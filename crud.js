let cin = document.getElementById('cin');
let nom = document.getElementById('nom');
let prenom = document.getElementById('prenom');
let email  =document.getElementById('email');
let tel = document.getElementById('tel');
let nb=document.getElementById('nb');
let adds = document.getElementById('add');
let searchs = document.getElementById('search');
let mood='create';
let tmp;
//pour donner le nombre des line de table;
//------------------------------------------------------------------------------------------------
let listdata;
if(localStorage.info!=null){
    listdata=JSON.parse(localStorage.info);
}else{
    listdata=[];
}

adds.onclick=function(){
    let obj={
        cin:cin.value,
        nom:nom.value,
        prenom:prenom.value,
        email:email.value,
        tel:tel.value,
    }
    if(mood=='create'){
        
    if(cin.value=='' && nom.value=='' && prenom.value==''&&email.value=='' && tel.value==''){
        cin.style.border='1px solid red'
        nom.style.border='1px solid red'
        prenom.style.border='1px solid red'
        email.style.border='1px solid red'
        tel.style.border='1px solid red'
    }else{
        listdata.push(obj);
        localStorage.setItem('info'  , JSON.stringify(listdata))
        
    }
    }else{
        listdata[tmp]=obj;
        adds.innerHTML="create"
        mood="create";

    }
    showdata();
    cleardata()


    // pour le nombre de line de tableau
    nomberdeline()
}

//pour vue les informatios sur le tableau:
function showdata(){
    let tables='';
    for(let i =0; i<listdata.length; i++){
        tables+=`
        <tr>
                            <td>${listdata[i].cin}</td>
                            <td>${listdata[i].nom}</td>
                            <td>${listdata[i].prenom}</td>
                            <td>${listdata[i].email}</td>
                            <td>${listdata[i].tel}</td>
                            <td>
                                <button id="edit" onclick="edits(${i})"><i class="fa-solid fa-pen-to-square"></i></button>
                                <button id="delete" onclick="deletes(${i})"><i class="fa-solid fa-trash"></i></button>
                            </td>
        </tr>

        `
        
    }
    document.getElementById('contents').innerHTML=tables;
    

}showdata()


// pour vidre les inputs:
function cleardata(){
    cin.value='';
    nom.value='';
    prenom.value='';
    email.value='';
    tel.value='';
}

// fonction pour sypprimer les donnees:
function deletes(i){
        listdata.splice(i,1);
        showdata();
        localStorage.setItem('info'  , JSON.stringify(listdata))
        
        
    
}
//fonction pour modifier les donnes
function edits(i){
    cin.value=listdata[i].cin;
    nom.value=listdata[i].nom
    prenom.value=listdata[i].prenom
    email.value=listdata[i].email
    tel.value=listdata[i].tel;
    adds.innerHTML="update";
    mood='update';
    tmp=i;

}

function trouve(value){
    let tabless;
   for(let i = 0; i<listdata.length; i++){
    if(listdata[i].cin.includes(value)){
        tabless+=`
        <tr>
                            <td>${listdata[i].cin}</td>
                            <td>${listdata[i].nom}</td>
                            <td>${listdata[i].prenom}</td>
                            <td>${listdata[i].email}</td>
                            <td>${listdata[i].tel}</td>
                            <td>
                                <button id="edit" onclick="edits(${i})"><i class="fa-solid fa-pen-to-square"></i></button>
                                <button id="delete" onclick="deletes(${i})"><i class="fa-solid fa-trash"></i></button>
                            </td>
        </tr>

        `
        
    }
   }document.getElementById('contents').innerHTML=tabless;
}


function nomberdeline(){
    let a;
    a=listdata.length;
    nb.innerHTML=a;
}nomberdeline()