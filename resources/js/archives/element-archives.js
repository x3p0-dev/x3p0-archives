/**
 * Returns the archives element.
 *
 * @author    Justin Tadlock <justintadlock@gmail.com>
 * @copyright Copyright (c) 2023, Justin Tadlock
 * @link      https://github.com/x3p0-dev/x3p0-archives
 * @license   http://www.gnu.org/licenses/old-licenses/gpl-2.0.html
 */

import icon from '../block-icon';

import { date, dateI18n, format } from '@wordpress/date';

import { store as coreStore } from '@wordpress/core-data';

import { __, _n } from '@wordpress/i18n';

import { useSelect } from '@wordpress/data';

import {
	Placeholder,
	Spinner
} from '@wordpress/components';

import { preventDefault } from '../common/utils-common';

export default ( { attributes, setAttributes } ) => {

	const {
		postType,
		month,
		year,
		order,
		headingTag,
	} = attributes;

	const { latestPosts } = useSelect( ( select ) => {

		let queryArgs = {
			per_page:  -1,
			order:     order,
			orderby:   'date'
		};

		if ( year ) {
			let afterDate = new Date(
				year,
				month ? month - 1 : 0,
				1
			);

			let beforeDate = new Date(
				year,
				month ? month : 11,
				month ? 0 : 31,
				23, 59, 59
			);

			queryArgs.after = afterDate.toISOString();
			queryArgs.before = beforeDate.toISOString();
		}

		const posts = select( coreStore ).getEntityRecords(
			'postType',
			postType,
			queryArgs
		);

		return {
			latestPosts: ! Array.isArray( posts )
				? posts
				: posts.map( ( post ) => {
					return { ...post };
				} )
		};

	}, [
		// Attributes to update the query.
		order,
		year,
		month,
		postType
	] );

	const hasPosts = !! latestPosts?.length;

	if ( ! hasPosts ) {
		return (
			<Placeholder
				icon={ icon }
				label={ __( 'Site Archives', 'x3p0-archives' ) }
			>
				{
					! Array.isArray( latestPosts )
					? ( <Spinner /> )
					: ( __( 'No posts found.', 'x3p0-archives' ) )
				}
			</Placeholder>
		);
	}

	let currentYear = '';
	let currentMonth = '';
	const archives = [];

	latestPosts.forEach( ( post, i ) => {

		let year   = date( 'Y', post.date_gmt );
		let month  = date( 'm', post.date_gmt );

		if ( currentYear !== year || currentMonth !== month ) {

			let newMonth = {
				year: year,
				month: month,
				date: dateI18n( 'F Y', post.date_gmt ),
				posts: []
			};

			archives[ year + month ] = newMonth;

			currentYear  = year;
			currentMonth = month;
		}

		archives[ year + month ].posts.push( post );
	} );

	// Reverses the months. Posts are already reversed.
	if ( 'desc' === order ) {
		archives.reverse();
	}

	const HeadingTag = headingTag ?? 'h2';

	const archivesHtml = archives.map( ( month, i ) => {

		let currentDay = '';

		return [ (
			<>
			<HeadingTag className="wp-block-x3p0-archives__heading">
				<a
					href={
						x3p0Archives.monthLink.replace(
							'%year%', month.year
						).replace(
							'%monthnum%', month.month
						)
					}
					className="wp-block-x3p0-archives__heading-link"
					onClick={ preventDefault }
				>
					{ month.date }
				</a>
			</HeadingTag>
			<ul className="wp-block-x3p0-archives__list">
				{ month.posts.map( ( post, i ) => {
					let daynum = date( 'd', post.date_gmt );

					let postClass = daynum === currentDay
					               ? 'wp-block-x3p0-archives__post has-duplicate-day'
						       : 'wp-block-x3p0-archives__post';

					currentDay = daynum;

					return ( <li className={ postClass } key={ i }>
						<time
							dateTime={ format( 'c', post.date_gmt ) }
							className="wp-block-x3p0-archives__post-day"
						>
							{ dateI18n( 'd:', post.date_gmt ) }
						</time>
						<a
							href={ post.link }
							className="wp-block-x3p0-archives__post-link"
							onClick={ preventDefault }
							rel="noreferrer noopener"
						>
							{ post.title.rendered || post.id }
						</a>
					</li> );
				} ) }
			</ul>
			</>
		) ];
	} );

	return archivesHtml;

};
