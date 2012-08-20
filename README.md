RESTful Bookmarks PHP Slim
=================================

Exemplo de aplicação para salvar links, onde a interface utiliza AngularJS + Twitter Bootstrap e o lado do servidor utilizado o PHP com Slim Framework para disponibilizar um serviço de dados RESTful, via JSON.

Utilizado neste projeto
-----------------------

* Ambiente de desenvolvimento
  * [Sublime Text](http://www.sublimetext.com/) 2

* Cliente
  * [AngularJS](http://angularjs.org/) 1.0.1
  * [Twitter Bootstrap](twitter.github.com/bootstrap) 2.0.4

* Servidor
  * [PHP](http://php.net/)
  * [Slim Framework](http://www.slimframework.com/) 
  * [MySQL](http://www.mysql.com/)
  * [XAMPP](http://www.apachefriends.org/pt_br/xampp.html)

Posts que auxiliaram na montagem desse projeto:

* [Vedovelli - Introdução ao AngularJS](http://blog.vedovelli.com.br/?p=1946) utilizado a idéia de como configurar o Slim, do projeto no [github - crud angular](https://github.com/vedovelli/crud-angular/)
* [RESTful services with jQuery, PHP and the Slim Framework](http://coenraets.org/blog/2011/12/restful-services-with-jquery-php-and-the-slim-framework/)
* Uma leitura adicional muito útil e recomendável para se trabalhar com JavaScript : [JavaScript Patterns Collection](http://shichuan.github.com/javascript-patterns/)
  
Montando o ambiente local para uso desse projeto
------------------------------------------------
Feito o download/clone do projeto para a sua máquina local, realize o respectivos passos a seguir:

1. Caso esteja utilizando o XAMPP, mova, ou faça o clone do projeto no diretório */htdocs*

2. Necessário criar a base: **bookmarks** no MySQL
	
	`estrutura e alguns dados iniciais estão disponíveis no arquivo: bookmarks.sql`

3. Para o desenvolvimento, vá até o Sublime Text, *File > Open...* e selecione o diretório do projeto

4. Agora é só codificar :)


Quanto ao RESTful do projeto
----------------------------
A definição do método a ser executado é definido no cabeçalho da requisição enviada para o servidor.

* **GET** - recupera 1 ou mais bookmarks
	* [.../api/bookmarks/]() - lista todos os bookmarks
	* [.../api/bookmarks/{id}]() - retorna o respectivo bookmark pelo seu ID
	* [.../api/bookmarks/search/{name}]() - retorna uma lista dos bookmarks que contém o respectivo nome
* **POST** - insere um novo
	* [.../api/bookmarks/]() - enviado via post
* **PUT** - atualiza um existente
	* [.../api/bookmarks/{id}]() - enviado via post 
* **DELETE** - remove 1 bookmark pelo ID
	* [.../api/bookmarks/{id}]() 

Passos para gerar a estrutura inicial do projeto
------------------------------------------------

Necessário baixar o [Slim Framework/Install](http://www.slimframework.com/install), feito isso gerado a estrutura de diretórios no */htdocs* do XAMPP

<pre><code>restful-bookmarks-phpslim/
  api/
    dao/
      BookmarkDAO.php
    Slim/
      # diretório Slim que foi feito o download
    .htacess    # para o mapeamento das URLs
    index.php   # configuração do slim e rotas
  js/
    app.js
    controllers.js
    services.js
  tpl/
    edit.html
    list.html
  index.html</code></pre>
