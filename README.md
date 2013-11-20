# RESTful Bookmarks PHP Slim

Sample application to bookmark links, where interface build with Angular.js + Twitter Bootstrap and server powered by PHP with Slim Framework, serving JSON by REST URLs.


## Install Guide

### Clone

```bash
$ git clone https://github.com/erkobridee/restful-bookmarks-phpslim.git
$ cd restful-bookmarks-phpslim/
```

### Create Mysql Database

```bash
$ mysql -u DBUSERNAME -p MYSQLPASSWORD -e 'CREATE DATABASE bookmarks;'
$ mysql -u DBUSERNAME -p MYSQLPASSWORD bookmarks < bookmarks.sql
```

### Mysql connections

edit user ```DBUSERNAME``` and ```MYSQLPASSWORD``` in ```api/dao/BookmarkDAO.php```

```php
...
  private function getDBConn()
  {
    $dbhost="127.0.0.1";
    $dbuser="DBUSERNAME";
    $dbpass="MYSQLPASSWORD";
    $dbname="bookmarks";
    $dbh = new PDO("mysql:host=$dbhost;dbname=$dbname", $dbuser, $dbpass);
    $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    return $dbh;
  }
...
```

### XAMPP

* Put project structure inside XAMPP */htdocs* directory


### Nginx example configuration

```nginx
server {
  listen 127.0.0.1:80;
  access_log /var/www/restful-bookmarks-phpslim/log/access.log;
  error_log /var/www/restful-bookmarks-phpslim/log/error.log warn;

  server_name restful-bookmarks-phpslim;
  root   /var/www/restful-bookmarks-phpslim/public/;

  index  index.php index.html index.htm;
  try_files $uri $uri/ /index.php?$request_uri;

  location /rest/ {
    try_files /rest/$uri $uri/ /rest/index.php?$request_uri;
    fastcgi_pass 127.0.0.1:9000;
    fastcgi_split_path_info ^/rest/(.+\.php)(/.+)$;
    fastcgi_intercept_errors on;
    fastcgi_index  index.php;
    include fastcgi_params;
  }
}
```

## Development with Sublime Text

1. On Sublime Text, in menu: *File > Open...* select project directory location in you computer

2. And happy coding :)


## License

MIT : [http://erkobridee.mit-license.org](http://erkobridee.mit-license.org)


## Project build with

* IDE

  * [Sublime Text](http://www.sublimetext.com/) 2

* Client

  * [AngularJS](http://angularjs.org/) 1.2.1

  * [Twitter Bootstrap](http://getbootstrap.com/) 3.x

* Server

  * [PHP](http://php.net/)

  * [Slim Framework](http://www.slimframework.com/) 

  * [MySQL](http://www.mysql.com/)

  * [XAMPP](http://www.apachefriends.org/pt_br/xampp.html) or [nginx](http://nginx.org/)


## Helpful posts

* [Vedovelli - Introdução ao AngularJS](http://blog.vedovelli.com.br/?p=1946) (pt_BR) | based in how to configure Slim Framework, from this [github - crud angular](https://github.com/vedovelli/crud-angular/) project

* [RESTful services with jQuery, PHP and the Slim Framework](http://coenraets.org/blog/2011/12/restful-services-with-jquery-php-and-the-slim-framework/)

* Recommended reading : [JavaScript Patterns Collection](http://shichuan.github.com/javascript-patterns/)


## Project REST URLs

HTTP Verbs

* **GET** - retrieve 1 or more bookmarks

  * [.../rest/bookmarks/]() - list all bookmarks

  * [.../rest/bookmarks/{id}]() - retrieve bookmark by ID

  * [.../rest/bookmarks/search/{name}]() - retrieve bookmarks list filtering by name

* **POST** - insert new one

  * [.../rest/bookmarks/]() - sent inside request body

* **PUT** - updates an existing

  * [.../rest/bookmarks/{id}]() - sent inside request body

* **DELETE** - remove bookmark by ID

  * [.../rest/bookmarks/{id}]() 


## Project Structure

* Must have [Slim Framework/Install](http://www.slimframework.com/install)

```
restful-bookmarks-phpslim/
  rest/
    dao/
      BookmarkDAO.php
    Slim/
      # Slim Framework files
    .htacess    # URLs map for Apache (XAMPP)
    index.php   # slim routes config
  app/
    # application files
  shared/
    # shared files with any future project
  vendor/
    # libs
  index.html
  require.config.js # require.js app config file
```
