let bagItem=[];
onload();
function onload(){
  let bagitemStr=localStorage.getItem('bagItem');
  bagItem=bagitemStr ? JSON.parse(bagitemStr):[];
displayItemOnHomePage();

displayCnt();
}
function addtobag(itemId){
  bagItem.push(itemId);
  localStorage.setItem('bagItem', JSON.stringify(bagItem))
  displayCnt();
}
function displayCnt(){
  let bagcnt=document.querySelector('.bag_item_cnt');
  if(bagItem.length>0){
  bagcnt.innerText=bagItem.length;
  bagcnt.style.visibility="visible";
  }
  else{
    bagcnt.style.visibility="hidden";
  }
}

function displayItemOnHomePage(){
let item_container=document.querySelector('.card_item');
let innerhtml='';
if(!item_container){
  return;
}
items.forEach(item=>{
  innerhtml+=`<div class="card" style="width: 15rem; height: 27rem;">
            <div class="card_img">
            <img src="${item.item_img}" class="card-img-top " alt="...">
          </div>
            <div class="card-body">
              <h5 class="card-title">${item.item_name}</h5>
              <p class="card-text">${item.about_item}</p>
              <div class="price">
                <span class="current_price">₹${item.item_price.current_price}</span>
                <span class="real_price">₹${item.item_price.real_price}</span>
                <span class="discount">(${item.item_price.off}% OFF)</span>
              </div>
              <a href="#" class="btn btn-primary btn1" onclick="addtobag(${item.id})">Go somewhere</a>
            </div>
          </div>`
});
item_container.innerHTML=innerhtml;
}