document.getElementById('detail-submit-btn').addEventListener ('click' , function (){
     const buyerInput = document.getElementById('buyer-details-input');
     console.log(buyerInput.value)
     document.getElementById('buyer-info').innerText = buyerInput.value;
     buyerInput.value = '';

})




document.getElementById('add-details-btn').addEventListener('click', function(){
   
    const itemName = document.getElementById('item-name-input').value;
    const itemPrice = document.getElementById('item-price-input').value;
    const itemQuantity = document.getElementById('item-quantity-input').value;
    
    const tableInfo = document.getElementById("info-table");
    const totalPrice = parseFloat(itemPrice) * parseFloat(itemQuantity);



    const tr  =element('tr')
    const th  =element('th')
    const td1 =element('td')
    const td2 =element('td')
    const td3 =element('td')


    
    td3.classList.add('item-total')
    th.innerText = itemName;
    td1.innerText = itemPrice;
    td2.innerText = itemQuantity;
    td3.innerText = totalPrice;

    tr.appendChild(th)
    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)

    tableInfo.appendChild(tr)
    calculateSubTotal()


})


function element (id){
    return document.createElement(id);
}


function calculateSubTotal(){
    const subTotalValue = calcSubTotal();
    const sobTotalDisplay = document.getElementById('sub-total');
    sobTotalDisplay.innerText = subTotalValue;

    const tax = subTotalValue * .2 ;
    document.getElementById('tax').innerText = tax;
   

    
   document.getElementById('grand-total').innerText = subTotalValue + tax ;

   
}


function calcSubTotal(){

    let subTotal = 0;
    const cost = document.getElementsByClassName('item-total')
    console.log(cost);
    for( let i = 0; i<cost.length; i++){
        let element = cost[i];
        const price = parseFloat(element.innerText);
        subTotal = subTotal + price;
    }
    return subTotal;


}
