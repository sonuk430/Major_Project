let btns = document.querySelectorAll(".bottom_header_containt button");

let contact_list = document.querySelector(".contact_list");

let status_area = document.querySelector(".status_area");

let call_area = document.querySelector(".call_area");

let community_area = document.querySelector(".community_area");

// let chatBtns = document.querySelector(".chatBtns")

// let status_btns = document.querySelector(".status_btns");

// let callBtns = document.querySelector(".callBtns");


btns.forEach((element)=>{
   element.addEventListener("click",()=>{
if(element.id === "users"){
    console.log("done");
    community_area.style.left = "0";
    // contact_list.style.right = "100%";
    contact_list.style.display = "none";
}
  else if(element.id === "Status"){
    status_area.style.left = "0";
  }

  else if(element.id === "Calls"){
    call_area.style.left = "0";

  }
      
   })
})
