# RESTful Bookmarks PHP Slim

Exemplo de aplicação para salvar links, onde a interface utiliza AngularJS + Twitter Bootstrap e o lado do servidor utilizado o PHP com Slim Framework para disponibilizar um serviço de dados RESTful, via JSON.


## Guia de instalação

### Clone

```bash
$ git clone https://github.com/erkobridee/restful-bookmarks-phpslim.git
$ cd restful-bookmarks-phpslim/
```

### Crie a base de dados no Mysql

```bash
$ mysql -u DBUSERNAME -p MYSQLPASSWORD -e 'CREATE DATABASE bookmarks;'
$ mysql -u DBUSERNAME -p MYSQLPASSWORD bookmarks < bookmarks.sql
```

### Conexão com o Mysql

edite o usuário `DBUSERNAME` e `MYSQLPASSWORD` no arquivo `api/dao/BookmarkDAO.php`

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

* Copiar a estrutura do projeto para o diretório */htdocs* do XAMPP


### Exemplo de configuração do Nginx

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

## Desenvolvimento com Sublime Text

1. Para o desenvolvimento, vá até o Sublime Text, *File > Open...* e selecione o diretório do projeto

2. Agora é só codificar :)


## Licença

MIT : [http://erkobridee.mit-license.org](http://erkobridee.mit-license.org)


## Projeto construído com

* IDE

  * [Sublime Text](http://www.sublimetext.com/) 2

* Cliente

  * [AngularJS](http://angularjs.org/) 1.2.1

  * [Twitter Bootstrap](http://getbootstrap.com/) 3.x

* Servidor

  * [PHP](http://php.net/)

  * [Slim Framework](http://www.slimframework.com/) 

  * [MySQL](http://www.mysql.com/)

  * [XAMPP](http://www.apachefriends.org/pt_br/xampp.html) ou [nginx](http://nginx.org/)


## Posts úteis

* [Vedovelli - Introdução ao AngularJS](http://blog.vedovelli.com.br/?p=1946) utilizado a idéia de como configurar o Slim, do projeto no [github - crud angular](https://github.com/vedovelli/crud-angular/)

* [RESTful services with jQuery, PHP and the Slim Framework](http://coenraets.org/blog/2011/12/restful-services-with-jquery-php-and-the-slim-framework/)

* Leitura recomendável : [JavaScript Patterns Collection](http://shichuan.github.com/javascript-patterns/)


## RESTful - URLs do projeto

Verbos HTTP

* **GET** - recupera 1 ou mais bookmarks

  * [.../rest/bookmarks/]() - lista todos os bookmarks

  * [.../rest/bookmarks/{id}]() - retorna o respectivo bookmark pelo seu ID

  * [.../rest/bookmarks/search/{name}]() - retorna uma lista dos bookmarks que contém o respectivo nome

* **POST** - insere um novo

  * [.../rest/bookmarks/]() - enviado no corpo da requisição

* **PUT** - atualiza um existente

  * [.../rest/bookmarks/{id}]() - enviado no corpo da requisição

* **DELETE** - remove 1 bookmark pelo ID

  * [.../rest/bookmarks/{id}]() 


## Estrutura do projeto

* Necessário [Slim Framework/Install](http://www.slimframework.com/install)

```
restful-bookmarks-phpslim/
  rest/
    dao/
      BookmarkDAO.php
    Slim/
      # arquivos do Slim Framework
    .htacess    # mapeamento das URLs para o Apache (XAMPP)
    index.php   # configuração do slim e rotas
  app/
    # arquivos/código da aplicação
  shared/
    # arquivos/códigos que podem ser reaproveitados em futuros projetos
  vendor/
    # libs
  index.html
  require.config.js # arquivo de configuração da aplicação para require.js
```
