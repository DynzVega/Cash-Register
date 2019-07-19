//LOOPS

// for.. loop

//for (let x = 0; x < 10; x++){
  //  document.write('hello'+'<br>');
//}
function getTotal() {
    let pprice = document.getElementById('pprice').value;
    let quantity1 = document.getElementById('quantity1').value;
    pprice = Number(pprice);
    quantity1 = Number(quantity1);

    let getTotal = pprice * quantity1;

    alert (getTotal);
    document.getElementById('getTotal1').value = getTotal;
}

function Save1(){
    let cash1= document.getElementById('cash1').value;
    let getTotal1 = document.getElementById('getTotal1').value;
   
    cash1 = Number(cash1);
    getTotal1 = Number(getTotal1);

    if(cash1 < getTotal1){
      alert ("Insufficient Cash");
    }
    
    else {
      
    let Change = cash1-getTotal1;
        Change=Number(Change);
    
    document.getElementById('P1').innerText =document.getElementById('Product').value;
    document.getElementById('price2').innerText =document.getElementById('pprice').value;
    document.getElementById('Q2').innerText =document.getElementById('quantity1').value;
    document.getElementById('Total2').innerText =document.getElementById('getTotal1').value;
    document.getElementById('Cash2').innerText = document.getElementById('cash1').value;
    document.getElementById('Change2').innerText =Change;

   alert (Change);

     }
  }





