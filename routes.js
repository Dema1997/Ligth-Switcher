var express=require("express");
var router=express.Router();
var fs = require('fs'); 
  
// json file with the data 
var data_ = fs.readFileSync('data-test.json');
var data = JSON.parse(data_); 

router.get("/",function(req,res){
    res.render("index.ejs");
});
router.get('/data', alldata);
router.get('/data/UseCount/', getUseCount);
router.get('/prova',incrementCount);
router.get('/prova1',incrementCount1);
router.get('/default',usoDefault);
router.get('/dark',usoDark);

function jsonReader(filePath,cb){
    fs.readFile(filePath,'utf-8',(err,fileData) =>{
        if(err){
            return cb && cb(err);
        }
        try{
            const object=JSON.parse(fileData);
            return cb && cb(null,object);
        }catch(err){
            return cb && cb(err);
        }
    });
}
function usoDefault(request,response){
    jsonReader('./data-test.json',(err,data)=>{
        if(err){
            console.log(err);
        }else{
         var usoDefault=data.Default_mode;
            response.json(usoDefault);
         }
    });
}
function usoDark(request,response){
    jsonReader('./data-test.json',(err,data)=>{
        if(err){
            console.log(err);
        }else{
         var usoDark=data.Dark_mode;
            response.json(usoDark);
         }
    });
}
function incrementCount(request,response){
    jsonReader('./data-test.json',(err,data)=>{
        if(err){
            console.log(err);
        }else{
         data.Usage_count+=1;
         data.Ligth_status="OFF";
         data.Dark_mode+=1;
         fs.writeFile('./data-test.json',JSON.stringify(data,null,2),err =>{
            response.render("dark.ejs");
         });
         }
    });
 } 
function incrementCount1(request,response){
    jsonReader('./data-test.json',(err,data)=>{
        if(err){
            console.log(err);
        }else{
         data.Usage_count+=1;
         data.Ligth_status="ON";
         data.Default_mode+=1;
         fs.writeFile('./data-test.json',JSON.stringify(data,null,2),err =>{
            response.render("index.ejs");
         });
         }
    });
 } 
function getUseCount(request, response) { 
   jsonReader('./data-test.json',(err,data)=>{
       if(err){
           console.log(err);
       }else{
        count=data.Usage_count;
        fs.writeFile('./data-test.json',JSON.stringify(data,null,2),err =>{
           response.json(count);
        });
        }
   });
} 
function alldata(request, response) { 
    // Returns all information about the elements 
   var data_ = fs.readFileSync('data-test.json');
   var data = JSON.parse(data_); 
   response.send(data);
} 

module.exports= router;