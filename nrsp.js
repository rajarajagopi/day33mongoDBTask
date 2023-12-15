// All Country Common Name,Official Name,Region,Subregion,Population

var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function()
{
var result=JSON.parse(request.response);
console.log(result);
for(var i=0;i<result.length;i++){
    console.log("Country Common Name:"+result[i].name.common);
    console.log("Country Official Name:"+result[i].name.official);
    console.log("Region:"+result[i].region);
    console.log("SubRegion:"+result[i].subregion);
    console.log("Populations:"+result[i].population);
}
}