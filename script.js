const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
function addTask(){
    if(inputBox.value ===''){
        alert("You must write something");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML= inputBox.value;    
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7"
        li.appendChild(span);
    }   
    inputBox.value="";
    saveData();
    
}


listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }  
}
,false);


function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();


//connect
/* function con(){
    var mysql= require('mysql');
    var db = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "A121120n",
        database: 'todo'
})


db.connect(function(err){
    if(err){
        throw err;
    }
    console.log("Connected !!");
    var sql="INSERT INTO lists (id, task) VALUES (?,?);";
    //if don't want to use array then --
    //.....var sql="INSERT INTO lists (id, task) VALUES ('${id}','${task}');";
    //db.query(sql,(err,result).....
    
    db.query(sql,[id,task],(err,result)=>{
        if(err) throw err;
        console.log("INSERTED")
    })
})
} */



