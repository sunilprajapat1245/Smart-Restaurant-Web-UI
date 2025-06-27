let listItms = document.querySelector(".listItems") ;
listItms.style.maxHeight = "0px" ;

function toggleFunc(){
    if(listItms.style.maxHeight == "0px" ){
        listItms.style.maxHeight = "200px" ;
    }else{ 
        listItms.style.maxHeight = "0px" ;
    }
}