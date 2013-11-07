<?php

// http://docs.slimframework.com/

require 'Slim/Slim.php';
require 'dao/BookmarkDAO.php';

$app = new Slim();
$dao = new BookmarkDAO();

// GET
$app->get('/bookmarks', function() use($dao) {
  $dao->getAll();
});

$app->get('/bookmarks/:id', function($id) use($dao) {
  $dao->getById($id);
});

$app->get('/bookmarks/search/:name', function($name) use($dao) {
  $dao->getByName($name);
});

//---

$app->delete('/bookmarks/:id', function($id) use($dao) {
  $dao->delete($id);
});

$app->post('/bookmarks', function() use($dao, $app) {
  //$request = Slim::getInstance()->request();
  $request = $app->request();
  $body = $request->getBody();
  $vo = json_decode($body);
  $dao->insert($vo);
});

$app->put('/bookmarks/:id', function($id) use($dao, $app) {
  $request = $app->request();
  $body = $request->getBody();
  $vo = json_decode($body);
  $vo->id = $id;
  $dao->update($vo);
});


$app->run();

?>