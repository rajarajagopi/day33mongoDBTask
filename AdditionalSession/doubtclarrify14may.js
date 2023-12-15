//Objects:
//It is a key : value pair data structure
// var objectname={k:v}
var obj={
    name:"John doe",
    age:23
}
//CRUD: insert,delete update
//Access:
//here we have two methods
// . notation(dot notation)
//Syntax:console.log(objectname.keyname)
console.log(obj.name);
console.log(obj.age);
console.log(obj.year);
//Insert a Key:
//Syntax:Objectname.keyname=value
obj.year=2018
console.log(obj);
//Q. Add the gender to the above object means create a key called gender and add Male as the value
obj.gender="male"
//Access the attendance
for(var i=0;i<obj.attendance.length;i++){
console.log(obj.attendance[i]);//obj.attendance[i]
  //Update:
//Syntax:objectname.keyname=value
obj.year=2019;
console.log(obj);
//Delete:
delete obj.year
}
//2nd Method for accessiblity
//Box Method
//Syntax:objectname["keyname"]
console.log(obj["name"]);
//For-in loop
//it is a unidirectional loop
//it is applicable to arrays as well as objects
//it depends on the key:value pair
//Syntax:for(var key in obj){console.log(obj[key])}
for(var a in obj){
console.log(a,obj[a]);
}

//Write a JavaScript program to find the most frequent item of an array.
//Sample array: 
var arr1=[3, 'q', 'q', 'q', 2, 3, 'q', 3, 'q', 2, 4, 9, 3];
//Sample Output: q ( 5 times )
var arr=[3, 'q', 'q', 'q', 2, 3, 'q', 3, 'q', 2, 4, 9, 3];
var obj={};
var minocc=1;
var count=0;
var item=" ";
for(var i=0;i<arr.length;i++){
var ele=arr[i];
if(obj[ele]){
  obj[ele]++;
}
else{
obj[ele]=1
}
if(obj[ele]>minocc){
minocc=obj[ele]
item=ele
}
}
console.log(item+"occured"+minocc+"times");