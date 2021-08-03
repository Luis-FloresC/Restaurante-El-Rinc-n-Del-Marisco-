


const addToShoppingCartButtons = document.querySelectorAll('.addToCart');
addToShoppingCartButtons.forEach((addToCartButton) => {
  addToCartButton.addEventListener('click', addToCartClicked);
});

const comprarButton = document.querySelector('.comprarButton');
comprarButton.addEventListener('click', comprarButtonClicked);

const shoppingCartItemsContainer = document.querySelector(
  '.shoppingCartItemsContainer'
);
          
//funcion que a la hora de hacer click en uno de los botones de añadir al carrito
function addToCartClicked(event) {
  //se crea el evento que captura los elemntos mas cercanos al .item
  const button = event.target;
  const item = button.closest('.item');
  //se captura el texto de los items que se llamaron
  const itemTitle = item.querySelector('.item-title').textContent;
  const itemPrice = item.querySelector('.item-price').textContent;
  //se usa el src para la ruta de la imagen
  const itemImage = item.querySelector('.item-image').src;

  addItemToShoppingCart(itemTitle, itemPrice, itemImage);
  
}
//funcion que toma los tres tipos de elementos y crea un Div con los mismos
function addItemToShoppingCart(itemTitle, itemPrice, itemImage) {
  const elementsTitle = shoppingCartItemsContainer.getElementsByClassName(
    'shoppingCartItemTitle'
  );
  for (let i = 0; i < elementsTitle.length; i++) {
    if (elementsTitle[i].innerText === itemTitle) {
      let elementQuantity = elementsTitle[
        i
      ].parentElement.parentElement.parentElement.querySelector(
        '.shoppingCartItemQuantity'
      );
      elementQuantity.value++;
      updateShoppingCartTotal();
      $('.toast').toast('show');
      updateShoppingCartTotal();
      return;
    }
  }
  const shoppingCartRow = document.createElement('div');
  const shoppingCartContent = `
  <div class="row shoppingCartItem">
        <div class="col-6">
            <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <img src=${itemImage} class="shopping-cart-image">
                <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">${itemTitle}</h6>
            </div>
        </div>
        <div class="col-2">
            <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <p class="item-price mb-0 shoppingCartItemPrice">${itemPrice}</p>
            </div>
        </div>
        <div class="col-4">
            <div
                class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number"
                    value="1">
                <button class="btn btn-danger buttonDelete" type="button">X</button>
            </div>
        </div>
    </div>`;
  shoppingCartRow.innerHTML = shoppingCartContent;
  shoppingCartItemsContainer.append(shoppingCartRow);
  shoppingCartRow
    .querySelector('.buttonDelete')
    .addEventListener('click', removeShoppingCartItem);
  shoppingCartRow
    .querySelector('.shoppingCartItemQuantity')
    .addEventListener('change', quantityChanged);
  updateShoppingCartTotal();
}
//funcion que va sumando el total cada vez que se añade un producto dentro de la cesta del carrito
function updateShoppingCartTotal() {
  let total = 0;
  //captura el total
  const shoppingCartTotal = document.querySelector('.shoppingCartTotal');
  const shoppingCartItems = document.querySelectorAll('.shoppingCartItem');
  shoppingCartItems.forEach((shoppingCartItem) => {
    //selecciona el precio de los elementos shoppingCartItem
    const shoppingCartItemPriceElement = shoppingCartItem.querySelector(
      '.shoppingCartItemPrice'
    );
    const shoppingCartItemPrice = Number(
      shoppingCartItemPriceElement.textContent.replace('$', '')
    );
    const shoppingCartItemQuantityElement = shoppingCartItem.querySelector(
      '.shoppingCartItemQuantity'
    );
    const shoppingCartItemQuantity = Number(
      shoppingCartItemQuantityElement.value
    );
    total = total + shoppingCartItemPrice * shoppingCartItemQuantity;
  });
  shoppingCartTotal.innerHTML = `${total.toFixed(2)}$`;
}
//funcion que remueve un Item del carrito de compras y ademas de eso actualiza el precio
function removeShoppingCartItem(event) {
  const buttonClicked = event.target;
  buttonClicked.closest('.shoppingCartItem').remove();
  updateShoppingCartTotal();
}
//Funcion que se ejecuta cuando se cambia la cantidad de elementos que se muestran en pantalla
function quantityChanged(event) {
  const input = event.target;
  input.value <= 0 ? (input.value = 1) : null;
  updateShoppingCartTotal();
}
//funcion que se ejecuta cuando se hace click en el boton de comprar, deja vacio el carrito
function comprarButtonClicked() {
  shoppingCartItemsContainer.innerHTML = '';
  updateShoppingCartTotal();
}


var buttonadd= document.getElementById('buttonadd'),
    overlay= document.getElementById('overlay'),
    popup= document.getElementById('popup'),
    btnCerrarPopup= document.getElementById('btn-cerrar-popup');

buttonadd.addEventListener('click',function(){
    overlay.classList.add('active');
    popup.classList.add('active');

})

btnCerrarPopup.addEventListener('click',function(){
    overlay.classList.remove('active');
    popup.classList.remove('active');

});
