document.getElementById('hesapla').addEventListener('click', topla);



function topla(){
    var product1_piece;
    var product1_price;
    var product1_total;

    var product2_piece;
    var product2_price;
    var product2_total;

    var product3_piece;
    var product3_price;
    var product3_total;

    var subtotal1;

    ////////////////////

    product1_piece = document.getElementById('product1_piece').value;
    product1_price = document.getElementById('product1_price').value;

    product1_total = product1_piece * product1_price;
    document.getElementById('product1_total').value = product1_total;

    //////////////////////
    
    product2_piece = document.getElementById('product2_piece').value;
    product2_price = document.getElementById('product2_price').value;

    product2_total = product2_piece * product2_price;
    document.getElementById('product2_total').value = product2_total;    
    
    //////////////////////
    
    product3_piece = document.getElementById('product3_piece').value;
    product3_price = document.getElementById('product3_price').value;

    product3_total = product3_piece * product3_price;
    document.getElementById('product3_total').value = product3_total;


    ///////////////////////

    subtotal1 = product1_total + product2_total + product3_total;
    document.getElementById('subtotal1').value = subtotal1;

}