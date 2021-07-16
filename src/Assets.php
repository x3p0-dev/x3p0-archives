<?php
/**
 * Assets class.
 *
 * Sets up and register assets for the plugin.
 *
 * @author    Justin Tadlock <justintadlock@gmail.com>
 * @copyright Copyright (c) 2021, Justin Tadlock
 * @link      https://github.com/x3p0-dev/x3p0-archives
 * @license   http://www.gnu.org/licenses/old-licenses/gpl-2.0.html
 */

namespace X3P0\Archives;

use Hybrid\Mix\Mix;

/**
 * Handles assets.
 *
 * @since  1.0.0
 * @access public
 */
class Assets {

	/**
	 * Instance of the Mix object.
	 *
	 * @since  1.0.0
	 * @access private
	 * @var    \Hybrid\Mix\Mix
	 */
	private $mix;

	/**
	 * Sets up object state.
	 *
	 * @since  1.0.0
	 * @access public
	 * @param  Mix    $mix
	 * @return void
	 */
	public function __construct( Mix $mix ) {
		$this->mix = $mix;
	}

	/**
	 * Boots the class, running its actions/filters.
	 *
	 * @since  1.0.0
	 * @access public
	 * @return void
	 */
	public function boot() {
		add_action( 'init', [ $this, 'register' ] );

		add_action( 'save_post', [ $this, 'deleteTransients' ] );
	}

	/**
	 * Registers assets with WordPress.
	 *
	 * @since  1.0.0
	 * @access public
	 * @return void
	 */
	public function register() {

		wp_register_style(
			'x3p0-archives',
			$this->mix->asset( 'css/style.css' ), null, null
		);

		wp_register_style(
			'x3p0-archives-editor',
			$this->mix->asset( 'css/editor.css' ), null, null
		);

		wp_register_script(
			'x3p0-archives-editor',
			$this->mix->asset( 'js/editor.js' ),
			[
				'wp-block-editor',
				'wp-blocks',
				'wp-components',
				'wp-compose',
				'wp-core-data',
				'wp-data',
				'wp-date',
				'wp-i18n',
				'wp-element',
				'wp-server-side-render'
			],
			null,
			true
		);

		wp_localize_script(
			'x3p0-archives-editor',
			'x3p0Archives',
			[
				'monthLink' => $this->getMonthLinkUrl(),
			 	'years'     => $this->getPostYears()
			]
		);
	}

	private function getMonthLinkUrl() {
		global $wp_rewrite;

		$monthlink = $wp_rewrite->get_month_permastruct();

		if ( ! empty( $monthlink ) ) {
			$monthlink = home_url( user_trailingslashit( $monthlink, 'month' ) );
		} else {
			$monthlink = home_url( '?m=%year%%monthnum%' );
		}

		return $monthlink;
	}

	private function getPostYears() {
		global $wpdb;

		$transient = get_transient( 'x3p0_archives_post_years' );

		if ( $transient ) {
			return $transient;
		}

		$results = [];

		$years = $wpdb->get_results(
			"SELECT YEAR(post_date) FROM {$wpdb->posts} WHERE post_status = 'publish' GROUP BY YEAR(post_date) DESC",
			ARRAY_N
		);

		if ( is_array( $years ) && 0 < count( $years ) ) {
			foreach ( $years as $year ) {
				$results[] = $year[0];
			}
		}

		set_transient( 'x3p0_archives_post_years', $results, WEEK_IN_SECONDS );

		return $results;
	}

	public function deleteTransients() {
		delete_transient( 'x3p0_archives_post_years' );
	}
}
