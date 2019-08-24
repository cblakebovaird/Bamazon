var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "cancer9463",
  database: "bamazon_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  afterConnection();
});

function afterConnection() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    // console.log(res);
    connection.end();
  });
}

function afterConnection() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    // console.log((res));
    for (var i = 0; i < res.length; i++){
      console.log("\nID: " + res[i].item_id + "\nProduct Name: " + res[i].product_name + "\nDepartment: " + res[i].department_name + "\nPrice: " + res[i].price + "\nQuantity in Stock: " + res[i].stock_quantity + "\n----------------");
    
 }
    
    inquirer.prompt ([
      {
        type: "input",
        name: "id",
        message: "What is the ID of the product you would like to purchase?"
      },
      {
        type: "input",
        name: "quantity",
        message: "How many units would you like to purchase?"
      }
    ]).then(function(answer){
        for (var i = 0; i < res.length; i++){
          if (answer.id === res[i].item_id){
            check();

            
      

          } 
        }
      
    });

    function check(){
      if (answer.quantity < res[i].stock_quantity){
        console.log("You have chosen to purchase " + answer.quantity + " units of item " + answer.id + ".");   

      }else {
        console.log("Insufficient Quantity.");
      
    }
    }
   
    connection.end();
  });
}