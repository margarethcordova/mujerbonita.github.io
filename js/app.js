//cart
let cartIcon = document.querySelector("#card-icon");
let cart = document.querySelector(".cart")
let closeCart = document.querySelector("#close-cart")

//open cart
cartIcon.onclick = () => {
    cart.classList.add("active");
};
//close cart
closeCart.onclick = () => {
    cart.classList.remove("active");
};
//cart worcking
if (document.readyState == 'loading') {
    document.addEventListener('DOMcontentLoaded', ready)
} else {
    ready();
}

//making funtion
function ready() {
    //reomve itemsfrom cart
    var reomveCardButtons = document.getElementsByClassName("cart-remove");
    console.log(reomveCardButtons);
    for (var i = 0; i < reomveCardButtons.length; i++) {
        var button = reomveCardButtons[i];
        button.addEventListener("click", removeCardItem);

    }
    //quantity changes
    var quantityInputs = document.getElementsByClassName('cart-quantity')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantitychanged)
    }
}

//remove itemsfrom cart
function removeCardItem(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updatetotal();
}

//quantity changes
function quantitychanged(event) {
    var input = event.target;
    if (NaN(input.value) || input.value <= 0){
        input.value = 1;
    };
}

//update total
function updatetotal() {
    var cartcontenet = document.getElementsByClassName("cart-contenet")[0];
    var cartBoxes = document.getElementsByClassName("cart-box");
    var total = 0;
    for (var i = 0; i < cartBoxes.length; i++) {
        var cartBox = cartBoxes[i];
        var priceElemet = cartBox.getElementsByClassName("cart-price")[0];
        var quantityElement = cartBox.getClientRects("cart-quantity")[0];
        var price = parseFloat(priceElemet.innerText.replace("$", ""))
        var quantity = quantityElement.value;
        total = total + (price * quantity);

        document.getElementsByClassName('total-price')[0].innertext = '$' + total;
    }
}
