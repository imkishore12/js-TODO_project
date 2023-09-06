var CardContainer=document.getElementsByClassName("CardContainer");
var tasknamevalue=document.getElementById("tasknamevalue");
var popup=document.getElementsByClassName("popup");
var noitem=document.getElementById("noitem");
var blurs=document.getElementsByClassName("blurs");
var subpopupcontainer=document.getElementsByClassName("container1");
var singleCard=document.getElementById("singleCard");
var parents=document.getElementById("parent");
// function showpopup(){
//     //blurs[0].style.display="block";
//     popup[0].classList.remove("hide");

// }

function hidepopup(){
    popup[0].classList.add("hide");
    blurs[0].style.display= "none";
    
}
function showpopup(){
    blurs[0].style.display="block";
    popup[0].classList.remove("hide");
}
function addcard(){
    noitem.classList.add("hide");
    popup[0].classList.add("hide");
    blurs[0].style.display= "none";
    
    let card=document.createElement("div");
    
    let cardheading=document.createElement("h1");
    let line=document.createElement("hr");
    let tasklist=document.createElement("div");
    let addbutton=document.createElement("button");
    let delbutton=document.createElement("button");


    CardContainer[0].appendChild(card);
    card.appendChild(cardheading);
    card.appendChild(line);
    card.appendChild(tasklist);
    card.appendChild(addbutton);
    card.appendChild(delbutton);


    cardheading.innerHTML=tasknamevalue.value;
    card.classList.add("taskcontainer");
    cardheading.setAttribute("class", "taskname");
    addbutton.setAttribute("class",'fa-solid fa-circle-plus size')
    delbutton.setAttribute("class","fa-solid fa-trash del");
    tasknamevalue.value = "";


    delbutton.addEventListener("click", ()=>{
        card.remove();
        if(CardContainer[0].innerText ===''){
            noitem.classList.remove('hide');
        }

    })
    addbutton.addEventListener("click", ()=>{
        subpopupcontainer[0].classList.remove("hide");
        // blurs[0].style.display="block";
        
        
        // popup.classList.remove("hide");
        // blur.classList.add("hide");
        //subtaskpopup window


        blurs[0].style.display="block";
        //popup[0].classList.remove("hide");
       let subaddtaskpopupheading=document.createElement("h3");
       var subaddtaskpopupname=document.createElement("input");
       let buttondiv=document.createElement("div");
       let subaddtaskpopupaddbtn=document.createElement("button");
       let subaddtaskpopupclosebtn=document.createElement("button");




        subaddtaskpopupname.setAttribute("placeholder","please enter item");
        subpopupcontainer[0].appendChild(subaddtaskpopupheading);
        subpopupcontainer[0].appendChild(subaddtaskpopupname);
        subpopupcontainer[0].appendChild(buttondiv);
        buttondiv.appendChild(subaddtaskpopupaddbtn);
        buttondiv.appendChild(subaddtaskpopupclosebtn);


        
        buttondiv.setAttribute("class","buttonflex")
        subaddtaskpopupheading.innerHTML="Add New Item";
        subaddtaskpopupaddbtn.innerHTML="Add";
        subaddtaskpopupclosebtn.innerHTML="Close";

    
        // subaddtaskpopupaddbtn.addEventListener('click',()=>subaddtaskbtn(tasklist,subaddtaskpopupname))
        subaddtaskpopupaddbtn.addEventListener('click',()=>{
            blurs[0].style.display="none";
            let item=document.createElement('div');
            let itemtext=document.createElement('span');
            let markdone=document.createElement('button');

            item.append(itemtext);
            item.append(markdone);


            itemtext.innerHTML=subaddtaskpopupname.value;
            markdone.innerHTML="mark done";
            item.setAttribute("class", "div");
            itemtext.setAttribute("class","span");
            markdone.setAttribute("class","markdone");

            tasklist.appendChild(item);
            subpopupcontainer[0].classList.add("hide");



            subpopupcontainer[0].innerHTML="";


        markdone.addEventListener("click",() =>{
            itemtext.style.textDecoration="line-through";
            markdone.classList.add("hide");
        })


        })
            subaddtaskpopupclosebtn.addEventListener("click",() =>{
            blurs[0].style.display="none";
            subpopupcontainer[0].classList.add("hide");
            subpopupcontainer[0].innerHTML="";

        })
        
        
    }); 
    cardheading.addEventListener("click", ()=>{
        copysubaddtaskpopname=document.getElementsByTagName("input")[0];
        singleCard.classList.remove("hide");
        CardContainer[0].classList.add("hide");
        
        let copycard=card.cloneNode(true);
        singleCard.appendChild(copycard);

        parents.firstElementChild.classList.remove("hide");
        copycard.lastElementChild.addEventListener("click", ()=>{
            copycard.remove();
            card.remove();
            back();
        })


        
        
        copycard.lastElementChild.previousElementSibling.addEventListener("click", ()=>{
            
                subpopupcontainer[0].classList.remove("hide");
                // blurs[0].style.display="block";
                
                
                // popup.classList.remove("hide");
                // blur.classList.add("hide");
                //subtaskpopup window
        
        
                blurs[0].style.display="block";
                //popup[0].classList.remove("hide");
               let subaddtaskpopupheading=document.createElement("h3");
               var subaddtaskpopupname=document.createElement("input");
               let buttondiv=document.createElement("div");
               let subaddtaskpopupaddbtn=document.createElement("button");
               let subaddtaskpopupclosebtn=document.createElement("button");
        
        
        
        
                subaddtaskpopupname.setAttribute("placeholder","please enter item");
                subpopupcontainer[0].appendChild(subaddtaskpopupheading);
                subpopupcontainer[0].appendChild(subaddtaskpopupname);
                subpopupcontainer[0].appendChild(buttondiv);
                buttondiv.appendChild(subaddtaskpopupaddbtn);
                buttondiv.appendChild(subaddtaskpopupclosebtn);
        
        
                
                buttondiv.setAttribute("class","buttonflex")
                subaddtaskpopupheading.innerHTML="Add New Item";
                subaddtaskpopupaddbtn.innerHTML="Add";
                subaddtaskpopupclosebtn.innerHTML="Close";
                
                

                subaddtaskpopupaddbtn.addEventListener('click',()=>{
                    blurs[0].style.display="none";
                    let item=document.createElement('div');
                    let itemtext=document.createElement('span');
                    let markdone=document.createElement('button');
        
                    item.append(itemtext);
                    item.append(markdone);
        
        
                    itemtext.innerHTML=subaddtaskpopupname.value;
                    markdone.innerHTML="mark done";
                    item.setAttribute("class", "div");
                    itemtext.setAttribute("class","span");
                    markdone.setAttribute("class","markdone");
        
                    // copyCard.lastElementChild.previousElementSibling.previousSibling.appendChild(item);
                    var copy=copycard.lastElementChild.previousElementSibling.previousElementSibling.appendChild(item);
                    var copy1=copy.cloneNode(true);
                    tasklist.appendChild(copy1);
                    // tasklist.appendChild(copycard.lastElementChild.previousElementSibling.previousElementSibling.appendChild(item));
                    subpopupcontainer[0].classList.add("hide");
        
        
        
                    subpopupcontainer[0].innerHTML="";
        
        
                    
                    markdone.addEventListener("click",() =>{
                        let c=itemtext.style.textDecoration="line-through";
                         let copy=copycard.lastElementChild.previousElementSibling.previousElementSibling.appendChild(item);
                        let copy1=copy.cloneNode(true);
                        copy1.style.textDecoration="line-through";
                        copy1.lastElementChild.classList.add("hide");
                        tasklist.appendChild(copy1);
                        
                        tasklist.lastElementChild.previousElementSibling.remove();
                       
                        markdone.classList.add("hide");
                    })
            
                });



                
                
                subaddtaskpopupclosebtn.addEventListener("click",() =>{
                    blurs[0].style.display="none";
                    subpopupcontainer[0].classList.add("hide");
                    subpopupcontainer[0].innerHTML="";
        
                })
                
                
            
        
        })
        
        
        
    })
    
    
    
    
}




function back(){
    parents.firstElementChild.classList.add("hide");
    singleCard.classList.add("hide");
    CardContainer[0].classList.remove("hide");
    singleCard.innerText="";
}