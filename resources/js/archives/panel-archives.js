/**
 * Archives settings block inspector panel.
 *
 * @author    Justin Tadlock <justintadlock@gmail.com>
 * @copyright Copyright (c) 2023, Justin Tadlock
 * @link      https://github.com/x3p0-dev/x3p0-archives
 * @license   http://www.gnu.org/licenses/old-licenses/gpl-2.0.html
 */

import { useInstanceId } from '@wordpress/compose';
import { __ }            from '@wordpress/i18n';
import { usePostTypes } from '../common/hooks-common';

import {
	SelectControl,
	__experimentalToolsPanel as ToolsPanel,
	__experimentalToolsPanelItem as ToolsPanelItem,
} from '@wordpress/components';

const { years } = x3p0Archives;

const ArchivesPanel = ( {
	attributes: {
		postType,
		order,
		month,
		year
	},
	setAttributes
} ) => {
	const panelId = useInstanceId( ArchivesPanel );

	const postTypeOptions = usePostTypes();

	const allYears = [
		{ label: __( 'Select Year', 'x3p0-archives' ), value: '' }
	];

	if ( years.length ) {
		years.forEach( ( year ) => {
			allYears.push( { label: year, value: year } );
		} );
	}

	const resetPostTypeItem = () => setAttributes( { postType: 'post'    } );
	const resetOrderItem    = () => setAttributes( { order:    'desc'    } );
	const resetYearItem     = () => setAttributes( { year:     undefined } );
	const resetMonthItem    = () => setAttributes( { month:    undefined } );

	const resetPanel = () => {
		resetPostTypeItem();
		resetOrderItem();
		resetYearItem();
		resetMonthItem();
	};

	const postTypeControl = (
		<SelectControl
			label={ __( 'Post Type', 'x3p0-archives' ) }
			value={ postType }
			onChange={ ( value ) =>
				setAttributes( { postType: value } )
			}
			options={ postTypeOptions }
		/>
	);

	const orderControl = (
		<SelectControl
			label={ __( 'Order', 'x3p0-archives' ) }
			value={ order }
			onChange={ ( value ) =>
				setAttributes( { order: value } )
			}
			options={ [
				{ value: 'desc', label: __( 'Descending', 'x3p0-archives' ) },
				{ value: 'asc',  label: __( 'Ascending',  'x3p0-archives' ) }
			] }
		/>
	);

	 const yearControl = allYears && (
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
	 );

	const monthControl = year && (
		<SelectControl
			label={ __( 'Month', 'x3p0-archives' ) }
			value={ month }
			onChange={ ( value ) =>
				setAttributes( { month: value } )
			}
			options={ [
				{ value: '',   label: __( 'Select Month', 'x3p0-archives' ) },
				{ value: '01', label: __( 'January',      'x3p0-archives' ) },
				{ value: '02', label: __( 'February',     'x3p0-archives' ) },
				{ value: '03', label: __( 'March',        'x3p0-archives' ) },
				{ value: '04', label: __( 'April',        'x3p0-archives' ) },
				{ value: '05', label: __( 'May',          'x3p0-archives' ) },
				{ value: '06', label: __( 'June',         'x3p0-archives' ) },
				{ value: '07', label: __( 'July',         'x3p0-archives' ) },
				{ value: '08', label: __( 'August',       'x3p0-archives' ) },
				{ value: '09', label: __( 'September',    'x3p0-archives' ) },
				{ value: '10', label: __( 'October',      'x3p0-archives' ) },
				{ value: '11', label: __( 'November',     'x3p0-archives' ) },
				{ value: '12', label: __( 'December',     'x3p0-archives' ) }
			] }
		/>
	);

	return (
		<ToolsPanel
			label={ __( 'Archives', 'x3p0-archives' ) }
			panelId={ panelId }
			className="wp-block-x3p0-archives-panel__progress"
			resetAll={ resetPanel }
		>
			<ToolsPanelItem
				label={ __( 'Post Type', 'x3p0-archives' ) }
				hasValue={ () => !! postType }
				onDeselect={ resetPostTypeItem }
				panelId={ panelId }
			>
				{ postTypeControl }
			</ToolsPanelItem>
			<ToolsPanelItem
				label={ __( 'Order', 'x3p0-archives' ) }
				hasValue={ () => !! order }
				onDeselect={ resetOrderItem }
				panelId={ panelId }
			>
				{ orderControl }
			</ToolsPanelItem>
			{ yearControl && (
				<ToolsPanelItem
					label={ __( 'Year', 'x3p0-archives' ) }
					hasValue={ () => !! year }
					onDeselect={ resetYearItem }
					panelId={ panelId }
				>
					{ yearControl }
				</ToolsPanelItem>
			) }
			{ monthControl && (
				<ToolsPanelItem
					label={ __( 'Month', 'x3p0-archives' ) }
					hasValue={ () => !! month }
					onDeselect={ resetMonthItem }
					panelId={ panelId }
				>
					{ monthControl }
				</ToolsPanelItem>
			) }
		</ToolsPanel>
	);
}

export default ArchivesPanel;
