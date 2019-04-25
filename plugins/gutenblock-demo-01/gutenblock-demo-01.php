<?php
/*
Plugin Name: Gutenblock Demo 1
*/
defined('ABSPATH') || exit('Nice try!');

function gutenblock_demo_01_register_block() {
    if (! function_exists('register_block_type')) {
        // Gutenberg is not active
        return;
    }

    wp_register_script( 'gutenblock-demo-1', plugins_url('build/index.js', __FILE__ ), array('wp-blocks', 'wp-element', 'wp-i18n'));

    register_block_type( 'gutenblock-demo/demo-01-static', array('editor_script' => 'gutenblock-demo-1') );
}
add_action( 'init', 'gutenblock_demo_01_register_block' );