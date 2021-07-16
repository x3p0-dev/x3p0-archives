
// Import block metadata and settings.
import * as archives from './block/index';

// WP dependencies.
const { registerBlockType } = wp.blocks;

// Register block types.
wp.domReady( () => {
	registerBlockType( archives.metadata, archives.settings );
} );
