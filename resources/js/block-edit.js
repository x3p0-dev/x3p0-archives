

import {
	InspectorControls,
	useBlockProps
} from '@wordpress/block-editor';

import ArchivesPanel from './archives/panel-archives';

import ArchivesElement from './archives/element-archives';

// Exports the archives block type edit function.
export default function Edit( { attributes, setAttributes } ) {
	const blockProps = useBlockProps();

	return (
		<>
			<InspectorControls>
				<ArchivesPanel
					attributes={ attributes }
					setAttributes={ setAttributes }
				/>
			</InspectorControls>
			<div { ...blockProps }>
				<ArchivesElement
					attributes={ attributes }
					setAttributes={ setAttributes }
				/>
			</div>
		</>
	);
}
