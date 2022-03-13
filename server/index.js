const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  database: "Syntax",
});

db.connect((err) => {
    if (err) throw err;
    console.log("Connected!");
  });

app.get("/items", (req, res) => {
    console.log("Running...");
    db.query("SELECT * FROM Syntax.items;", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });
  app.get("/seniors/:seniorid", (req, res) => {
    const seniorid= req.params.seniorid;
    console.log("Running...");
    db.query("SELECT A.ItemID,A.Item_Name,A.Availability,B.Price FROM Items A, Deal B WHERE A.ItemID=B.ItemID AND B.UserID=?;", seniorid, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
<<<<<<< HEAD
  }); 
  app.get("/deals/:ItemID", (req, res) => {
    const iid= req.params.ItemID;
    console.log("Running...");
    db.query("SELECT A.Name,A.Contact_no,B.Price FROM users A, deal B WHERE A.UserID=B.UserID AND B.ItemID=?;", iid, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
        res.send(result);
      }
    });
  });
=======
  });  

>>>>>>> 8a41ee69a6cb590a55947784e0181277f5f64a41
  app.delete("/delete/:id", (req, res) => {
    const id = req.params.id;
    db.query("DELETE FROM Deal WHERE ItemID = ?;", id, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });
  app.delete("/deletesen/:id", (req, res) => {
    const id = req.params.id;
    db.query("DELETE FROM Deal WHERE ItemID = ?;", id, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });
  app.delete("/deletesen/:id", (req, res) => {
    const id = req.params.id;
    db.query("DELETE FROM Deal WHERE ItemID = ?;", id, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });
  app.post('/login',(req,res)=>{
    const uid = req.body.uid;
    const pass = req.body.pass;
    console.log(uid+pass);
    db.query(
      "SELECT * FROM users WHERE UserID=? AND Password=?;",
      [uid,pass],
      (err,result) => {
        if (err){
          console.log(err);
          res.send({err: err})
        }
        if (result.length>0){
          res.send(result);
        } else {
          console.log("No user.")
          res.send({message: "Incorrect ID or Password."});
        }
      }
    );
  })
app.post('/additem',(req,res) => {
    const id = req.body.id;
    const name = req.body.name;
    const avl = req.body.avl;
    db.query(
        'INSERT INTO Items(ItemID,Item_Name,Availability) VALUES (?,?,?)',
        [id,name,avl],
        (err,result) => {
            if (err) {
                console.log(err);
            } else{
                res.send("Item added.")
            }
        }

    );
      });
    app.post('/adduser',(req,res) => {
      const uid = req.body.uid;
      const name = req.body.name;
      const pass = req.body.pass;
      const contact = req.body.contact;
      const priv = req.body.priv;
      db.query(
          'INSERT INTO users(UserID,Name,Password,Contact_no,Privilege) VALUES (?,?,?,?,?)',
          [uid,name,pass,contact,priv],
          (err,result) => {
              if (err) {
                  console.log(err);
              } else{
                  res.send("User added.")
              }
          }
  
      );
});

  app.post('/adddeal',(req,res) => {
  const userID = req.body.userID;
  const itemID = req.body.itemID;
  const price = req.body.price;
  
 
  
  db.query(
      'INSERT INTO deal(UserID,ItemID,Price) VALUES (?,?,?)',
      
      [userID,itemID,price],
      (err,result) => {
          if (err) {
              console.log(err);
          } else{
              res.send("Deal added.")
          }
      }

  );
});
app.post('/adddeal',(req,res) => {
  const userID = req.body.userID;
  const itemID = req.body.itemID;
  const price = req.body.price;
  
 
  
  db.query(
      'INSERT INTO deal(UserID,ItemID,Price) VALUES (?,?,?)',
      
      [userID,itemID,price],
      (err,result) => {
          if (err) {
              console.log(err);
          } else{
              res.send("Deal added.")
          }
      }

  );
});
app.listen(3001, () => {
    console.log("Server connected.");
 });