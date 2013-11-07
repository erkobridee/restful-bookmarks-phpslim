<?php
class BookmarkDAO 
{
  
  private $_select = "SELECT * FROM bookmark ";
  private $_insert = "INSERT INTO bookmark(name, url, description) VALUES(:name, :url, :description)";
  private $_update = "UPDATE bookmark SET name = :name, description = :description, url = :url WHERE id = :id";
  private $_delete = "DELETE FROM bookmark WHERE id = :id";
  
  private function getDBConn() 
  {
    $dbhost="127.0.0.1";
    $dbuser="root";
    $dbpass="";
    $dbname="bookmarks";
    $dbh = new PDO("mysql:host=$dbhost;dbname=$dbname", $dbuser, $dbpass);  
    $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    return $dbh;
  }

  public function getAll() 
  {
    $sql = $this->_select . " ORDER BY name";
    
    try {
      $db = $this->getDBConn();
      $stmt = $db->query($sql);  
      $result = $stmt->fetchAll(PDO::FETCH_OBJ);
      $db = null;
      echo json_encode($result);
    } catch(PDOException $e) {
      echo '{"error":{"text":'. $e->getMessage() .'}}'; 
    }
  }

  public function getByName($name) 
  {
    $sql = $this->_select . " WHERE UPPER(name) LIKE UPPER(:name) ORDER BY name";

    try {
      $db = $this->getDBConn();
      $stmt = $db->prepare($sql);
      $name = "%".$name."%";  
      $stmt->bindParam("name", $name);
      $stmt->execute();
      $result = $stmt->fetchAll(PDO::FETCH_OBJ);
      $db = null;
      echo json_encode($result); 
    } catch(PDOException $e) {
      echo '{"error":{"text":'. $e->getMessage() .'}}'; 
    }
  }

  public function getById($id) 
  {
    $sql = $this->_select . " WHERE id = :id ORDER BY name";

    try {
      $db = $this->getDBConn();
      $stmt = $db->prepare($sql);  
      $stmt->bindParam("id", $id);
      $stmt->execute();
      $result = $stmt->fetchObject();  
      $db = null;
      echo json_encode($result); 
    } catch(PDOException $e) {
      echo '{"error":{"text":'. $e->getMessage() .'}}'; 
    }
  }

  public function insert($vo) 
  {
    
    try {
      $db = $this->getDBConn();
      $stmt = $db->prepare($this->_insert);  
      $stmt->bindParam("name", $vo->name);
      $stmt->bindParam("url", $vo->url);
      $stmt->bindParam("description", $vo->description);
      $stmt->execute();
      $vo->id = $db->lastInsertId();
      $db = null;
      echo json_encode($vo); 
    } catch(PDOException $e) {
      echo '{"error":{"text":'. $e->getMessage() .'}}'; 
    }
  }

  public function update($vo) 
  {
    try {
      $db = $this->getDBConn();
      $stmt = $db->prepare($this->_update);  
      $stmt->bindParam("name", $vo->name);
      $stmt->bindParam("url", $vo->url);
      $stmt->bindParam("description", $vo->description);
      $stmt->bindParam("id", $vo->id);
      $stmt->execute();
      $db = null;
      echo json_encode($vo); 
    } catch(PDOException $e) {
      echo '{"error":{"text":'. $e->getMessage() .'}}'; 
    } 
  }

  public function delete($id) 
  {
    try {
      $db = $this->getDBConn();
      $stmt = $db->prepare($this->_delete);  
      $stmt->bindParam("id", $id);
      $stmt->execute();
      $db = null;
      echo 'ok';
    } catch(PDOException $e) {
      echo '{"error":{"text":'. $e->getMessage() .'}}'; 
    }
  }

}
