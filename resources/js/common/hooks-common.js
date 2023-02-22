/**
 * Custom hooks.
 *
 * @author    Justin Tadlock <justintadlock@gmail.com>
 * @copyright Copyright (c) 2023, Justin Tadlock
 * @link      https://github.com/x3p0-dev/x3p0-archives
 * @license   http://www.gnu.org/licenses/old-licenses/gpl-2.0.html
 */

import { store }     from '@wordpress/core-data';
import { useSelect } from '@wordpress/data';
import { useMemo }   from '@wordpress/element';

export const usePostTypes = () => {

	const { postTypes } = useSelect( ( select ) => {
		const { getPostTypes } = select( store );

		const excludedPostTypes = [ 'attachment' ];

		const filteredPostTypes = getPostTypes( { per_page: -1 } )?.filter(
			( { viewable, slug } ) =>
				viewable && ! excludedPostTypes.includes( slug )
		);

		return { postTypes: filteredPostTypes };
	}, [] );

	const postTypeOptions = useMemo(
		() =>
			( postTypes || [] ).map( ( { labels, slug } ) => ( {
				label: labels.singular_name,
				value: slug,
			} ) ),
		[ postTypes ]
	);

	return postTypeOptions;
};
