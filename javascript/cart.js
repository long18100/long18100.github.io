// FILTER
let list = document.getElementById('list-products');
let filter = document.querySelector('.filter');
let count = document.getElementById('count-product');
let listProducts = [
    {
        id: 1,
        name: 'Nike Air Force 1 07',
        price: 2100000,
        quantity: 0,
        image: '/images/men-product/p1.webp',
        nature: {
            color: ['white'],
            size: [38, 39, 40, 41, 42, 43, 44],
            type: 'men'
        }
    },
    {
        id: 2,
        name: 'Nike Air Force 1 Shadow',
        price: 3519000,
        quantity: 0,
        image: '/images/women-products/p1.webp',
        nature: {
            color: ['white', 'pink','turquoise'],
            size: [38, 39, 40, 41, 42, 43, 44],
            type: 'women'
        }
    },
    {
        id: 3,
        name: 'Nike Vomero 16',
        price: 2000000,
        quantity: 0,
        image: '/images/men-product/p2.webp',
        nature: {
            color: ['white', 'black'],
            size: [38, 39, 40, 41, 42, 43, 44],
            type: 'men'
        }
    },
    {
        id: 4,
        name: 'Nike Air Force 1 Shadow',
        price: 3239000,
        quantity: 0,
        image: '/images/women-products/p2.webp',
        nature: {
            color: ['white', 'red'],
            size: [38, 39, 40, 41, 42, 43, 44],
            type: 'women'
        }
    },
    {
        id: 5,
        name: 'Nike Air Force 1 07',
        price: 2349000,
        quantity: 0,
        image: '/images/men-product/p3.webp',
        nature: {
            color: ['white'],
            size: [38, 39, 40, 41, 42, 43, 44],
            type: 'men'
        }
    },
    {
        id: 6,
        name: 'Nike Air Force 1 Shadow',
        price: 2000000,
        quantity: 0,
        image: '/images/women-products/p3.webp',
        nature: {
            color: ['white', 'yellow','red','blue'],
            size: [38, 39, 40, 41, 42, 43, 44],
            type: 'women'
        }
    },
    {
        id: 7,
        name: 'Nike Revolution 6',
        price: 2000000,
        quantity: 0,
        image: '/images/men-product/p4.webp',
        nature: {
            color: ['white', 'black'],
            size: [38, 39, 40, 41, 42, 43, 44],
            type: 'men'
        }
    },
    {
        id: 8,
        name: 'Nike Zoom Fly 5',
        price: 2000000,
        quantity: 0,
        image: '/images/women-products/p4.webp',
        nature: {
            color: ['white', 'black','yellow'],
            size: [38, 39, 40, 41, 42, 43, 44],
            type: 'women'
        }
    },
    {
        id: 9,
        name: 'Nike SB Ishod Premium',
        price: 2000000,
        quantity: 0,
        image: '/images/men-product/p5.webp',
        nature: {
            color: ['black'],
            size: [38, 39, 40, 41, 42, 43, 44],
            type: 'men'
        }
    },
    {
        id: 10,
        name: 'Nike Pegasus 40',
        price: 2000000,
        quantity: 0,
        image: '/images/women-products/p5.webp',
        nature: {
            color: ['green'],
            size: [38, 39, 40, 41, 42, 43, 44],
            type: 'women'
        }
    },
    {
        id: 11,
        name: 'NikeCourt Air Zoom Lite 3',
        price: 2000000,
        quantity: 0,
        image: '/images/men-product/p6.webp',
        nature: {
            color: ['white', 'green'],
            size: [38, 39, 40, 41, 42, 43, 44],
            type: 'men'
        }
    },
    {
        id: 12,
        name: 'Nike Tech Hera',
        price: 2000000,
        quantity: 0,
        image: '/images/women-products/p6.webp',
        nature: {
            color: ['white', 'black'],
            size: [38, 39, 40, 41, 42, 43, 44],
            type: 'women'
        }
    },
    {
        id: 13,
        name: 'Nike Revolution 6',
        price: 2000000,
        quantity: 0,
        image: '/images/men-product/p7.webp',
        nature: {
            color: ['beige', 'black'],
            size: [38, 39, 40, 41, 42, 43, 44],
            type: 'men'
        }
    },
    {
        id: 14,
        name: 'Nike Zoom Bella 6',
        price: 2000000,
        quantity: 0,
        image: '/images/women-products/p7.webp',
        nature: {
            color: ['pink', 'white'],
            size: [38, 39, 40, 41, 42, 43, 44],
            type: 'women'
        }
    },
    {
        id: 15,
        name: 'Jordan Max Aura 4',
        price: 1000000,
        quantity: 0,
        image: '/images/men-product/p8.webp',
        nature: {
            color: ['white', 'black'],
            size: [38, 39, 40, 41, 42, 43, 44],
            type: 'men'
        }
    },
    {
        id: 16,
        name: 'Nike Pegasua Turbo',
        price: 1000000,
        quantity: 0,
        image: '/images/women-products/p8.webp',
        nature: {
            color: ['white', 'grey'],
            size: [38, 39, 40, 41, 42, 43, 44],
            type: 'women'
        }
    },
    {
        id: 17,
        name: 'Jor danStay Loyal 2',
        price: 2000000,
        quantity: 0,
        image: '/images/men-product/p9.webp',
        nature: {
            color: ['white', 'red'],
            size: [38, 39, 40, 41, 42, 43, 44],
            type: 'men'
        }
    },
    {
        id: 18,
        name: 'Air Jordan1 Low SE',
        price: 2000000,
        quantity: 0,
        image: '/images/women-products/p9.webp',
        nature: {
            color: ['white', 'orange'],
            size: [38, 39, 40, 41, 42, 43, 44],
            type: 'women'
        }
    },
    {
        id: 19,
        name: 'Nike Juniper Trail 2',
        price: 2000000,
        quantity: 0,
        image: '/images/men-product/p10.webp',
        nature: {
            color: ['beige', 'black','grey'],
            size: [38, 39, 40, 41, 42, 43, 44],
            type: 'men'
        }
    },
    {
        id: 20,
        name: 'Nike Pegasus Trail4',
        price: 2000000,
        quantity: 0,
        image: '/images/women-products/p10.webp',
        nature: {
            color: ['green'],
            size: [38, 39, 40, 41, 42, 43, 44],
            type: 'women'
        }
    },
    {
        id: 21,
        name: 'NikeCourt Air Zoom Lite 3',
        price: 2000000,
        quantity: 0,
        image: '/images/men-product/p11.webp',
        nature: {
            color: ['white', 'green'],
            size: [38, 39, 40, 41, 42, 43, 44],
            type: 'men'
        }
    },
    {
        id: 22,
        name: 'Nike Air Max Pulse',
        price: 2000000,
        quantity: 0,
        image: '/images/women-products/p11.webp',
        nature: {
            color: ['white'],
            size: [38, 39, 40, 41, 42, 43, 44],
            type: 'women'
        }
    },
    {
        id: 23,
        name: 'Nike Air Max Plus SE',
        price: 2000000,
        quantity: 0,
        image: '/images/men-product/p12.webp',
        nature: {
            color: ['white', 'black'],
            size: [38, 39, 40, 41, 42, 43, 44],
            type: 'men'
        }
    },
    {
        id: 24,
        name: 'Nike Metcon 8',
        price: 2000000,
        quantity: 0,
        image: '/images/women-products/p12.webp',
        nature: {
            color: ['yellow', 'grey'],
            size: [38, 39, 40, 41, 42, 43, 44],
            type: 'women'
        }
    },
    {
        id: 25,
        name: 'LeBron WitNess 7EP',
        price: 2000000,
        quantity: 0,
        image: '/images/men-product/p13.webp',
        nature: {
            color: ['red', 'black'],
            size: [38, 39, 40, 41, 42, 43, 44],
            type: 'men'
        }
    },
    {
        id: 26,
        name: 'Nike Court Legacy Lift',
        price: 2000000,
        quantity: 0,
        image: '/images/women-products/p13.webp',
        nature: {
            color: ['white', 'pink'],
            size: [38, 39, 40, 41, 42, 43, 44],
            type: 'women'
        }
    },
    {
        id: 27,
        name: 'Jordan Granville Pro',
        price: 2000000,
        quantity: 0,
        image: '/images/men-product/p14.webp',
        nature: {
            color: ['white', 'blue'],
            size: [38, 39, 40, 41, 42, 43, 44],
            type: 'men'
        }
    },
    {
        id: 28,
        name: 'Nike Peggagsus 40',
        price: 2000000,
        quantity: 0,
        image: '/images/women-products/p14.webp',
        nature: {
            color: ['pink'],
            size: [38, 39, 40, 41, 42, 43, 44],
            type: 'women'
        }
    },
    {
        id: 29,
        name: 'Nike Rival Fly 3',
        price: 2000000,
        quantity: 0,
        image: '/images/men-product/p15.webp',
        nature: {
            color: ['red', 'black'],
            size: [38, 39, 40, 41, 42, 43, 44],
            type: 'men'
        }
    },
    {
        id: 30,
        name: 'NNike Blazer Low 77 Jumbo',
        price: 2000000,
        quantity: 0,
        image: '/images/women-products/p15.webp',
        nature: {
            color: ['green', 'white'],
            size: [38, 39, 40, 41, 42, 43, 44],
            type: 'women'
        }
    }
];
let productFilter = listProducts;
showProduct(productFilter);
filter.addEventListener('submit', function (event) {
    event.preventDefault();
    let valueFilter = event.target.elements;
    productFilter = listProducts.filter(item => {
        if (valueFilter.color.value != '') {
            if (!item.nature.color.includes(valueFilter.color.value)) {
                return false;
            }
        }
        // check type
        if (valueFilter.typeProduct.value != '') {
            if (item.nature.type != valueFilter.typeProduct.value) {
                return false;
            }
        }
        console.log(valueFilter.typeProduct.value)
        
        // check name
        if (valueFilter.name.value != '') {
            if (!item.name.includes(valueFilter.name.value)) {
                return false;
            }
        }
        // check min price
        if (valueFilter.minPrice.value != '') {
            if (item.price < valueFilter.minPrice.value) {
                return false;
            }
        }
        //  check max price
        if (valueFilter.maxPrice.value != '') {
            if (item.price > valueFilter.maxPrice.value) {
                return false;
            }
        }
        return true;
    })
    showProduct(productFilter);
})
// RENDER FUNCTION
function showProduct(productFilter) {
    count.innerText = productFilter.length;
    list.innerHTML = '';
    productFilter.forEach((item, key) => {
        let newItem = document.createElement('div');
        newItem.classList.add('item-product');

        //create image
        let newImage = new Image();
        newImage.src = item.image;
        newItem.appendChild(newImage);
        // create name product
        let newTitle = document.createElement('div');
        newTitle.classList.add('name-product');
        newTitle.innerText = item.name;
        newItem.appendChild(newTitle);
        // create price
        let newPrice = document.createElement('div');
        newPrice.classList.add('price');
        newPrice.innerText = item.price.toLocaleString() + ' VND';
        newItem.appendChild(newPrice);
        //create add to cart button
        let newAddToCart = document.createElement('button');
        newAddToCart.classList.add('add-to-cart');
        newAddToCart.setAttribute('onclick',`addToCard(${key})`)
        newAddToCart.innerText = 'Add to cart';
        newItem.appendChild(newAddToCart); 

        list.appendChild(newItem);
    });
}



// ADD TO CART
let listCard = document.querySelector('.list-product-cart');
let total = document.querySelector('.total-payment');
let quantity = document.querySelectorAll('.count-product-added');
let bg_emptyCart = document.querySelector('.list-product-cart img')
let listCards  = [];
let listCardMinis = []
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(productFilter[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(key){
    listCard.innerHTML = '';
    let totalPrice = 0;
    let count = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.classList.add('item-product-cart');
            newDiv.setAttribute('data-key', key);
            newDiv.innerHTML = `
                <div><img src="${value.image}"/></div>
                <h1>${value.name}</h1>
                <div class="box-changeQuantity">
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>
                <span>${value.price.toLocaleString()}</span>
                <button class = "remove-item-cart" onclick="removeFromCart(${key})"><i class="fa-solid fa-trash"></i></button>`;
            listCard.appendChild(newDiv);
        }
    })
    if(count == 0) {
        listCard.style.height = 500 + 'px';
        listCard.style.background = 'url(/images/layers/emptyCart.svg) center no-repeat';
        listCard.style.backgroundSize = 100 + 'px';
    }else{
        listCard.style.height =  'auto';
        listCard.style.background = 'none'
    }
    total.innerText = totalPrice.toLocaleString();
    quantity.forEach((value) => {
        value.innerText = count;
    })
}
function removeFromCart(key){
    delete listCards[key];
    reloadCard(key);
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * productFilter[key].price;
    }
    reloadCard();
}