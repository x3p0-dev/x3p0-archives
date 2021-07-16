import icon from './icon';

// Node modules dependencies.
import classnames from 'classnames';

// WP dependencies.
const { get, includes, invoke, isUndefined, pickBy } = lodash;

const { date, dateI18n, format } = wp.date;

const coreStore = wp.coreData.store;

const { __, _n, sprintf } = wp.i18n;
const { useSelect } = wp.data;

const {
	PanelBody,
	Placeholder,
	QueryControls,
	SelectControl,
	Spinner,
	TextControl
} = wp.components;

const { RawHTML, useMemo } = wp.element;

const {
	BlockControls,
	InspectorControls,
	useBlockProps
} = wp.blockEditor;

const usePostTypes = () => {

	const { postTypes } = useSelect( ( select ) => {
		const { getPostTypes } = select( coreStore );

		const excludedPostTypes = [ 'attachment' ];

		const filteredPostTypes = getPostTypes( { per_page: -1 } )?.filter(
			( { viewable, slug } ) =>
				viewable && ! excludedPostTypes.includes( slug )
		);

		return { postTypes: filteredPostTypes };
	}, [] );

	const postTypesSelectOptions = useMemo(
		() =>
			( postTypes || [] ).map( ( { labels, slug } ) => ( {
				label: labels.singular_name,
				value: slug,
			} ) ),
		[ postTypes ]
	);

	return { postTypesSelectOptions };
};

// Prevent breadcrumb link events when users click them.
const preventDefault = ( event ) => event.preventDefault();

// Exports the archives block type edit function.
export default function ArchivesEdit( {
	attributes,
	setAttributes,
	clientId
} ) {

	const { postTypesSelectOptions } = usePostTypes();

	// Get the blockProps.
	let blockProps = useBlockProps();

	let {
		postType,
		month,
		year,
		order
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

	const allYears = [
		{ label: __( 'Select Year', 'x3p0-archives' ), value: '' }
	];

	if ( x3p0Archives.years.length ) {
		x3p0Archives.years.forEach( ( year ) => {
			allYears.push( { label: year, value: year } );
		} );
	}

	// Return elements and controls.
	const inspectorControls = (
		<InspectorControls>
			<PanelBody title={
				__( 'Archives settings', 'x3p0-archives' )
			}>
			<SelectControl
				label={ __( 'Post Type', 'x3p0-archives' ) }
				value={ postType }
				onChange={ ( value ) =>
					setAttributes( {
						postType: value
					} )
				}
				options={ postTypesSelectOptions }
			/>
			<SelectControl
				label={ __( 'Order', 'x3p0-archives' ) }
				value={ order }
				onChange={ ( value ) =>
					setAttributes( {
						order: value
					} )
				}
				options={ [
					{ value: 'desc', label: __( 'Descending', 'x3p0-archives' ) },
					{ value: 'asc',  label: __( 'Ascending',  'x3p0-archives' ) }
				] }
			/>
			{ allYears && (
				<SelectControl
					label={ __( 'Year', 'x3p0-archives' ) }
					value={ year }
					onChange={ ( value ) =>
						setAttributes( {
							year: value,

							// Disable month if no year.
							month: ! value ? '' : month
						} )
					}
					options={ allYears }
				/>
			) }
			{ year && (
				<SelectControl
					label={ __( 'Month', 'x3p0-archives' ) }
					value={ month }
					onChange={ ( value ) =>
						setAttributes( {
							month: value
						} )
					}
					options={ [
						{ value: '', label: __( 'Select Month', 'x3p0-archives' ) },
						{ value: '01', label: __( 'January',   'x3p0-archives' ) },
						{ value: '02', label: __( 'February',  'x3p0-archives' ) },
						{ value: '03', label: __( 'March',     'x3p0-archives' ) },
						{ value: '04', label: __( 'April',     'x3p0-archives' ) },
						{ value: '05', label: __( 'May',       'x3p0-archives' ) },
						{ value: '06', label: __( 'June',      'x3p0-archives' ) },
						{ value: '07', label: __( 'July',      'x3p0-archives' ) },
						{ value: '08', label: __( 'August',    'x3p0-archives' ) },
						{ value: '09', label: __( 'September', 'x3p0-archives' ) },
						{ value: '10', label: __( 'October',   'x3p0-archives' ) },
						{ value: '11', label: __( 'November',  'x3p0-archives' ) },
						{ value: '12', label: __( 'December',  'x3p0-archives' ) }
					] }
				/>
			) }
			</PanelBody>
		</InspectorControls>
	);

	if ( ! hasPosts ) {
		return (
			<div { ...blockProps }>
				{ inspectorControls }
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
			</div>
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

	const archivesHtml = archives.map( ( month, i ) => {

		let currentDay = '';

		return [ (
			<>
			<h2 className="wp-block-x3p0-archives__heading">
				<a
					href={
						x3p0Archives.monthLink.replace(
							'%year%', month.year
						).replace(
							'%monthnum%', month.month
						)
					}
					className="wp-block-x3p0-archives__heading-link"
				>
					{ month.date }
				</a>
			</h2>
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

	return (
		<>
			{ inspectorControls }
			<div { ...blockProps }>
				{ archivesHtml }
			</div>
		</>
	);
}
