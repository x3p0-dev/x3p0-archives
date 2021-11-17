<?php
/**
 * Plugin Name:       X3P0 - Archives
 * Plugin URI:        https://github.com/x3p0-dev/x3p0-archives
 * Description:       A site archives block for WordPress for listing posts by month.
 * Version:           1.0.0-beta-20211117
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Author:            Justin Tadlock
 * Author URI:        https://x3p0.com
 * Text Domain:       x3p0-archives
 * Domain Path:       /public/lang
 */

namespace X3P0\Archives;

# ------------------------------------------------------------------------------
# Run the Composer autoloader.
# ------------------------------------------------------------------------------
#
# Auto-load classes and files via the Composer autoloader. Be sure to check if
# the file exists in case someone's using Composer to load their dependencies in
# a different directory.

if ( file_exists( __DIR__ . '/vendor/autoload.php' ) ) {
	require_once __DIR__ . '/vendor/autoload.php';
}

# ------------------------------------------------------------------------------
# Bootstrap plugin.
# ------------------------------------------------------------------------------
#
# Just runs a small bootstrapping routine.

app();
