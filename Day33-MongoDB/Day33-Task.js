/* Queries:
          show dbs;

          use B47WE

          show collections;

          db.createCollection("day33Task");

          use day33Task;

        1.  Find all the information about each products
               Query:db.day33Task.find();

        2.  Find the product price which are between 400 to 800
               Query: db.day33Task.find({product_price:{$gte:400,$lte:800}})    

        3.  Find the product price which are not between 400 to 600
               Query:

        4.  List the four product which are grater than 500 in price
               Query:db.day33Task.find({product_price:{$gt:500}})

        5.  Find the product name and product material of each products
               Query:db.day33Task.find({},{product_name:1,product_material:1})

        6.  Find the product with a row id of 10
               Query:db.day33Task.find({},{id:1,product_name:1,_id:0})     

        7.  Find only the product name and product material    
               Query:db.day33Task.find({},{product_name:1,product_material:1}) 
            
        8.  Find all products which contain the value of soft in product material 
                Query:db.day33Task.find({product_material:'Soft'})
                
        9.  Find products which contain product color indigo  and product price 492.00
                Query:db.day33Task.find({product_color:'indigo',product_price:492},{})

        10  Delete the products which product price value are same
                Query:db.day33Task.aggregate([{$group: {_id:"$product_material",averageprice:{ $avg: "$product_price"}}}])

*/
