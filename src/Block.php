<?php
/**
 * Block class.
 *
 * Registers and renders the block type on the front end.
 *
 * @author    Justin Tadlock <justintadlock@gmail.com>
 * @copyright Copyright (c) 2021, Justin Tadlock
 * @link      https://github.com/x3p0-dev/x3p0-archives
 * @license   http://www.gnu.org/licenses/old-licenses/gpl-2.0.html
 */

namespace X3P0\Archives;

use WP_Query;

/**
 * Handles the block type.
 *
 * @since  1.0.0
 * @access public
 */
class Block {

	/**
	 * Path to the `block.json` file.
	 *
	 * @since  1.0.0
	 * @access private
	 * @var    string
	 */
	private $json_path = '';

	/**
	 * Sets up object state.
	 *
	 * @since  1.0.0
	 * @access public
	 * @param  string  $json_path
	 * @return void
	 */
	public function __construct( string $json_path ) {
		$this->json_path = $json_path;
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
		add_action( 'save_post', [ $this, 'deleteCache' ] );
	}

	/**
	 * Registers the block with WordPress.
	 *
	 * @since  1.0.0
	 * @access public
	 * @return void
	 */
	public function register() {

		register_block_type( $this->json_path, [
			'render_callback' => [ $this, 'render' ]
		] );
	}

	/**
	 * Registers assets with WordPress.
	 *
	 * @since  1.0.0
	 * @access public
	 * @param  array  $attr
	 * @param  string  $content
	 * @return string
	 */
	public function render( $attr, $content ) {

		// Set up some default variables that need to be empty.
		$archives = $current_year = $current_month = $current_day = '';
		$cache = [];

		$query_args = [
			'posts_per_page'      => -1,
			'ignore_sticky_posts' => true,
			'post_type'           => $attr['postType'] ?? 'post',
			'year'                => $attr['year']     ?? '',
			'monthnum'            => $attr['month']    ?? '',
			'order'               => $attr['order']    ?? 'DESC'
		];

		// Translators: Month + Year date/time format.
		$format_month_year = __( 'F Y', 'x3p0-archives' );

		// Translators: Day date/time format.
		$format_post_day = __( 'd:', 'x3p0-archives' );

		// Create a unique key for this particular set of archives.
		$key = md5( serialize( array_values( $attr ) ) );

		// Check for a cached archives.
		$cache = wp_cache_get( 'x3p0_site_archives' );

		// If there is a cached archive, return it instead of doing all
		// the work we've already done.
		if ( is_array( $cache ) && ! empty( $cache[ $key ] ) ) {
			return $cache[ $key ];
		}

		// Query posts from the database.
		$loop = new WP_Query( $query_args );

		// If posts were found, format them for output.
		if ( $loop->have_posts() ) {

			// Loop through the individual posts.
			while ( $loop->have_posts() ) {

				// Set up the post.
				$loop->the_post();

				// Get the post's year and month. We need this
				// to compare it with the previous post date.
				$year   = get_the_time( 'Y' );
				$month  = get_the_time( 'm' );
				$daynum = get_the_time( 'd' );

				// If the current date doesn't match this post's
				// date, we need extra formatting.
				if ( $current_year !== $year || $current_month !== $month ) {

					// Close the list if not the first post.
					if ( $current_month && $current_year ) {
						$archives .= '</ul>';
					}

					// Set the current year and month to
					// this post's year and month.
					$current_year  = $year;
					$current_month = $month;
					$current_day   = '';

					// Build the month link.
					$month_link = get_month_link(
						$current_year,
						$current_month
					);

					// If we have one specific post type,
					// let's get the query args to append to
					// the month link
					if ( 'post' !== $attr['postType'] ) {
						$month_link = add_query_arg(
							'post_type',
							$attr['postType'],
							$month_link
						);
					}

					// Add a heading with the month and year
					// and link it to the monthly archive.
					$archives .= sprintf(
						'<%1$s class="wp-block-x3p0-archives__heading">
						<a class="wp-block-x3p0-archives__heading-link" href="%2$s">%3$s</a>
						</%1$s>',
						tag_escape( $attr['headingTag'] ?? 'h2' ),
						esc_url( $month_link ),
						esc_html( get_the_time( $format_month_year ) )
					);

					// Open a new unordered list.
					$archives .= '<ul class="wp-block-x3p0-archives__list">';
				}

				// Get the post's day.
				$day = sprintf(
					'<time class="wp-block-x3p0-archives__post-day" datetime="%s">%s</time>',
					esc_attr( get_the_date( DATE_W3C ) ),
					esc_html( get_the_time( $format_post_day ) )
				);

				// Check if there's a duplicate day so we can add a class.
				$duplicate_day = $current_day && $daynum === $current_day ? ' has-duplicate-day' : '';
				$current_day   = $daynum;

				$archives .= sprintf(
					'<li class="wp-block-x3p0-archives__post%s">%s <a class="wp-block-x3p0-archives__post-link" href="%s">%s</a></li>',
					$duplicate_day,
					$day,
					esc_url( get_permalink() ),
					get_the_title() ? the_title( '', '', false ) : get_the_ID()
				);
			}

			// Close the final unordered list.
			$archives .= '</ul>';
		}

		// Wrap the list in a `<div>`.
		if ( $archives ) {

			$wrapper_attributes = get_block_wrapper_attributes();

			$archives = sprintf(
				'<div %s>%s</div>',
				$wrapper_attributes,
				$archives
			);
		}

		// Reset the query to the page's original query.
		wp_reset_postdata();

		// Make sure $cache is an array.
		if ( ! is_array( $cache ) ) {
			$cache = [];
		}

		// Set the cache for the plugin, so caching plugins can make
		// this super fast.
		$cache[ $key ] = $archives;
		wp_cache_set( 'x3p0_site_archives', $cache );

		// Return the formatted archives.
		return $archives;
	}

	public function deleteCache() {
		wp_cache_delete( 'x3p0_site_archives' );
	}
}
