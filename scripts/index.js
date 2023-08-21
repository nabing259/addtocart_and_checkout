// Store cart items in local storage with key: "items"

const groceryItems = [
    {
        image:"https://www.bigbasket.com/media/uploads/p/l/10000148_30-fresho-onion.jpg",
        name:"Onion",
        price: 35
    },
    {
        image:"https://www.bigbasket.com/media/uploads/p/l/10000159_27-fresho-potato.jpg",
        name:"Potato",
        price: 36
    },
    {
        image:"https://www.bigbasket.com/media/uploads/p/l/10000201_15-fresho-tomato-hybrid.jpg",
        name:"Tomato",
        price: 80
    },
    {
        image:"https://www.bigbasket.com/media/uploads/p/l/10000071_14-fresho-carrot-orange.jpg",
        name:"Carrot",
        price: 50
    },
    {
        image:"https://www.bigbasket.com/media/uploads/p/l/10000143_14-fresho-ladies-finger.jpg",
        name:"Ladies Finger",
        price: 40
    },
    {
        image:"https://www.bigbasket.com/media/uploads/p/l/10000068_22-fresho-capsicum-green.jpg",
        name:"Capsicum",
        price: 100
    },
    {
        image:"https://www.bigbasket.com/media/uploads/p/l/10000074_19-fresho-cauliflower.jpg",
        name:"Cauliflower",
        price: 60
    },
    {
        image:"https://www.bigbasket.com/media/uploads/p/l/10000119_17-fresho-ginger.jpg",
        name:"Ginger 500 g",
        price: 110
    },
    {
        image:"https://www.bigbasket.com/media/uploads/p/l/10000102_17-fresho-cucumber.jpg",
        name:"Cucumber",
        price: 30
    },
    {
        image:"https://www.bigbasket.com/media/uploads/p/l/40120006_5-fresho-pomegranate-small.jpg",
        name:"Pomegranate",
        price: 120
    },
    {
        image:"https://www.bigbasket.com/media/uploads/p/l/40296057_3-fresho-papaya.jpg",
        name:"Papaya",
        price: 100
    },
    {
        image:"https://www.bigbasket.com/media/uploads/p/l/40029982_3-fresho-garlic-organically-grown.jpg",
        name:"Garlic",
        price: 50
    },
    {
        image:"https://www.bigbasket.com/media/uploads/p/l/10000156_21-fresho-pineapple.jpg",
        name:"Pineapple",
        price: 100
    },
    {
        image:"https://www.bigbasket.com/media/uploads/p/l/10000188_12-fresho-palak-cleaned-without-roots.jpg",
        name:"Palak",
        price: 50
    },
    {
        image:"https://www.bigbasket.com/media/uploads/p/l/10000063_20-fresho-broccoli.jpg",
        name:"Broccoli",
        price: 60
    },
    {
        image:"https://www.bigbasket.com/media/uploads/p/l/10000047_21-fresho-beetroot.jpg",
        name:"Beetroot",
        price: 50
    },
    {
        image:"https://www.bigbasket.com/media/uploads/p/l/30009286_7-fresho-blueberry.jpg",
        name:"Blueberry 125g",
        price: 300
    }
];

groceryItems.map((ele, ind)=>{
    let div = document.createElement("div");

    let img = document.createElement("img");
    img.src = ele.image;

    let div1 = document.createElement("div");
    div1.className = "info";

    let name = document.createElement("p");
    name.innerText = ele.name;

    let price = document.createElement("p");
    price.innerText = `₹ ${ele.price} /-`;

    let endDiv = document.createElement("div");
    endDiv.classList.add("endDiv");
    endDiv.innerHTML = `
    <div id="qtyDiv">
        <label id="qty">Qty</label>
        <input type="text" value="1" id="qtyInp" data-item="${ind}">
    </div>`;

    let button = document.createElement("button");
    button.innerText = "Add to Cart";
    button.addEventListener("click", () => {
        let quantity = parseInt(document.querySelector(`#qtyInp[data-item="${ind}"]`).value);
        let itemWithQuantity = { ...ele, quantity };
        addToCart(itemWithQuantity);
    });


    div1.append(name, price);
    endDiv.append(button);
    div.append(img, div1, endDiv);
    document.querySelector("#items").append(div);
});

let addToCart = (ele) => {
    let cart = JSON.parse(localStorage.getItem("items")) || [];
    
    let existingItem = cart.find(item => item.item.name === ele.name);

    if (existingItem) {
        existingItem.quantity++; 
    } else {
        cart.push({ item: ele, quantity: ele.quantity}); 
    }

    localStorage.setItem("items", JSON.stringify(cart));
    cartCount();

    console.log(cart);
}


let counter = document.querySelector("#item_count h2");
let cartCount = () => {
    let cart = JSON.parse(localStorage.getItem("items")) || [];
    let totalCount = cart.reduce((total, item) => total + item.quantity, 0);
    counter.innerText = totalCount;
}
cartCount();