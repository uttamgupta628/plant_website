const shipping_price=10;
let bagItemObj;
onLoad();
function onLoad(){
    displayBagItem();
    displayItem();
    displaycardsummary();
}
function displaycardsummary(){
  let cardsummay=document.querySelector('.item_summary');
  if(bagItemObj.length===0){
    cardsummay.innerHTML=``;
  }
  else{
  let total_item=bagItemObj.length;
  let total_mrp=0;
  let total_discount=0;
  bagItemObj.forEach(bagitem=>{
    total_mrp+=bagitem.item_price.real_price;
    total_discount+=bagitem.item_price.real_price-bagitem.item_price.current_price;
  })
  let total_price=total_mrp-total_discount+shipping_price;
  cardsummay.innerHTML=`
                <div class="container">
                <p id="price_dispaly">Price Detail(${total_item} item)</p>
                <hr>
                <p class="real_price">Total MRP <span class="mrp_display">₹${total_mrp}</span></p>
                <p class="total_discount">Total Discount <span class="Discount_display">₹${total_discount}</span></p>
                <p class="Shipping_charge">Shipping Charge <span class="shipping">₹${shipping_price}</span></p>
                <p class="Totol_price">Total Price <span>₹${total_price}</span></p>
                <button type="button" class="btn btn-danger btn1">Buy</button>
                </div>
                `
}
}
function displayBagItem(){
    bagItemObj=bagItem.map(itemId=>{
        for(let i=0;i<items.length;i++){
            if(itemId==items[i].id){
                return items[i];
            }
        }
    })
}
function displayItem(){
    let items=document.querySelector('.card_container');
    let innerHTML='';
    bagItemObj.forEach(bagItem => {
        innerHTML+=generateItemhtml(bagItem);
    });
    items.innerHTML=innerHTML;
}
function removefrombag(itemid){
    bagItem=bagItem.filter(bagitemID=>bagitemID!=itemid);
    localStorage.setItem('bagItem', JSON.stringify(bagItem));
    displayBagItem();
    displayCnt();
    displayItem();
    displaycardsummary();
}
function generateItemhtml(item){
    return `
                <div class="card mb-3" style="max-width: 540px;">
                <span class="cross" onclick="removefrombag(${item.id})">X</span>
                <div class="row g-0 card_cnt">
                <div class="col-md-6">
                <img src="${item.item_img}" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-6">
                <div class="card-body">
                <h5 class="card-title">${item.item_name}</h5>
                <p class="card-text">${item.about_item}</p>
                <p class="card-text"><medium class="text-body-secondary">(${item.item_price.off}% OFF)</medium></p>
                    </div>
                  </div>
                </div>
            </div>
              `
}