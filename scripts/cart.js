document.addEventListener("DOMContentLoaded", () => {
    let cart = JSON.parse(localStorage.getItem("items")) || [];
  
    const container = document.querySelector("#cart");
    container.innerHTML = "";

    cart.forEach((ele, index) => {
      const itemDiv = document.createElement("tr");
     
      itemDiv.innerHTML = `
      <td>  
        <img src="${ele.item.image}" alt="${ele.item.name}">
      </td>
      <td><h4>${ele.item.name}</h4></td>
      <td>Rs. ${ele.item.price}</td>
      <td>
        <button class="decrement" data-item="${index}">-</button><input value="${ele.quantity}"type="text" class="quantity"><button class="increment" data-item="${index}">+</button>
      </td>
      <td>Rs. ${ele.item.price * ele.quantity}</td>
        <td>
        <button class="remove" data-item="${index}">Remove</button>
        </td>
      `;
      container.append(itemDiv);
    });
  
    // Calculate and display the cart total
    const cartTotalAmount = document.querySelector("#cart_total");
    const cartTotal = cart.reduce((total, ele) => {
      return total + ele.item.price * ele.quantity;
    }, 0);
    cartTotalAmount.innerText = cartTotal;


    const decrementButtons = document.querySelectorAll(".decrement");
    const incrementButtons = document.querySelectorAll(".increment");

    decrementButtons.forEach(button => {
        button.addEventListener("click", handleDecrement);
    });

    incrementButtons.forEach(button => {
        button.addEventListener("click", handleIncrement);
    });

    const removeButtons = document.querySelectorAll(".remove");
    removeButtons.forEach(button => {
        button.addEventListener("click", function () {
            const index = button.dataset.item;
            cart.splice(index, 1);
            localStorage.setItem("items", JSON.stringify(cart));
            window.location.reload();
        });
    })
  });


  function handleDecrement(event) {
    const index = event.target.dataset.item;
    let cart = JSON.parse(localStorage.getItem("items")) || [];

    

    
    if (cart[index].quantity > 1) {
      cart[index].quantity--;
      localStorage.setItem("items", JSON.stringify(cart));
      updateCartItemQuantity(index, cart[index].quantity);
      updateCartTotal();
    }
   else{ 
      cart.splice(index, 1);
      localStorage.setItem("items", JSON.stringify(cart));
      window.location.reload();
    }
   
    window.location.reload();
  }
  
  function handleIncrement(event) {
    const index = event.target.dataset.item;
    let cart = JSON.parse(localStorage.getItem("items")) || [];
    
    cart[index].quantity++;
    localStorage.setItem("items", JSON.stringify(cart));
    updateCartItemQuantity(index, cart[index].quantity);
    updateCartTotal();
    window.location.reload();
  }
  function updateCartItemQuantity(index, quantity) {
    const quantityElement = document.querySelectorAll(".quantity")[index];
    quantityElement.textContent = quantity;
  }

  function updateCartTotal() {
    let cart = JSON.parse(localStorage.getItem("items")) || [];
    const cartTotalAmount = document.querySelector("#cart_total");
    const cartTotal = cart.reduce((total, cartItem) => {
      return total + cartItem.item.price * cartItem.quantity;
    }, 0);
    cartTotalAmount.innerText = cartTotal;
  }

  let cartTotal = document.querySelector("#cartTotal");
  function cartAmount(){
    cartTotal.innerHTML ="";
    let cart = JSON.parse(localStorage.getItem("items")) || [];
    let totalamount = cart.reduce((total, cartItem) => total + cartItem.item.price*cartItem.quantity, 0);
    cartTotal.innerHTML =`
    <h3>Total: ₹ ${totalamount} /-</h3>
    <button id="checkout" onclick="checkout(${totalamount})">Checkout</button>
    <div>
    <a href="index.html" id="home">Go to Home</a>
    </div
    `;
  }
cartAmount();

function checkout(amount){
  if(amount>=1) {
    window.location.href = "checkout.html";
  }
  else {
    alert("Please add items to cart");
  }
}
  