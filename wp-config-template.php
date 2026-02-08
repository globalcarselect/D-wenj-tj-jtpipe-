<?php
/**
 * WordPress基础配置文件。
 *
 * 这个文件被安装程序用来创建wp-config.php配置文件，
 * 但是您也可以直接复制这份文件，并重命名为"wp-config.php"，
 * 然后填入相关信息。
 *
 * 这个文件包含以下配置选项：
 * * 数据库设置
 * * 密钥
 * * 数据库表前缀
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** 数据库设置 - 您可以从您的主机提供商获取这些信息 ** //
/** WordPress数据库的名称 */
define( 'DB_NAME', 'wordpress_db' );

/** MySQL数据库用户名 */
define( 'DB_USER', 'wp_user' );

/** MySQL数据库密码 */
define( 'DB_PASSWORD', 'secure_password' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** 数据库字符集 */
define( 'DB_CHARSET', 'utf8' );

/** 数据库整理类型。如不确定请勿更改 */
define( 'DB_COLLATE', '' );

/**#@+
 * 认证唯一密钥和盐。
 *
 * 更改这些值会令所有使用这些值的用户cookie失效。
 * 如果您不确定如何生成这些值，请访问 https://api.wordpress.org/secret-key/1.1/salt/
 * 以获取（这些值）。
 */
define( 'AUTH_KEY',         'put your unique phrase here' );
define( 'SECURE_AUTH_KEY',  'put your unique phrase here' );
define( 'LOGGED_IN_KEY',    'put your unique phrase here' );
define( 'NONCE_KEY',        'put your unique phrase here' );
define( 'AUTH_SALT',        'put your unique phrase here' );
define( 'SECURE_AUTH_SALT', 'put your unique phrase here' );
define( 'LOGGED_IN_SALT',   'put your unique phrase here' );
define( 'NONCE_SALT',       'put your unique phrase here' );

/**#@-*/

/**
 * WordPress数据表前缀。
 *
 * 如果您有在同一数据库内安装多个WordPress的需求，请为每个WordPress设置
 * 不同的数据表前缀。前缀名只能为数字、字母加下划线。
 */
$table_prefix = 'wp_';

/**
 * 开发者专用：WordPress调试模式。
 *
 * 将这个值改为true，WordPress将显示所有用于开发的错误和警告。
 * 强烈建议插件开发者和主题开发人员在开发环境中使用。
 */
define( 'WP_DEBUG', false );

/* 好了！请不要再继续编辑。请保存该文件。 */

/** WordPress目录的绝对路径。 */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** 设置WordPress变量和包含文件。 */
require_once ABSPATH . 'wp-settings.php';