const loadData = id =>{
    const inputField = document.getElementById(id);
    const inputValue = inputField.value;
    inputField.value = '';
    return inputValue;
}

const productField = () =>{
    const product = loadData('product-name')
    const value = loadData('product-value')
    console.log(product, value)
    displayData(product, value)
    // localStorage.setItem(product, value)
    saveItemToLocalStorage(product, value)
}

const getElementById = () =>{
    let savedCart = localStorage.getItem('cart');
    let cart = {};
    if(savedCart){
        cart = JSON.parse(savedCart);
    }
    return cart;
}

const saveItemToLocalStorage = (product, value) =>{
    const cart = getElementById();
    cart[product] = value;
    const cartStringfied = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringfied);
}

const displayData = (product, value) =>{
    const productQuantity = document.getElementById('product-quantity')
    const li = document.createElement('li')
    li.innerText = `${product} : ${value}`
    productQuantity.appendChild(li)
}

const displayStoredProduct = () =>{
    const cart = getElementById();

    for(const product in cart){
        const quantity = cart[product]
        console.log(product, quantity)
        displayData(product, quantity);
    }
}

displayStoredProduct ()