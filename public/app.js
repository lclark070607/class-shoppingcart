/*
//  1a.  List all of the products (from Ajax).
    1. List all of the products 
    2. Ad a 'add to cart' button.
        - when someone adds to cart, move that item into an array
    3. show all items in cart in a separate column
    4. Calculate subtotal, total, and tax and show in cart*/

// let items = [ //creating fake array until we replace with ajax
//     { //one book
//         title: 'Book A', 
//         author: 'Person 1', 
//         price: 100.20, 
//         cover: 'http://something.jpeg',
//     },
//     { //one book
//         title: 'Book B', 
//         author: 'Person 2', 
//         price: 15.00, 
//         cover: 'http://something.jpeg',
//     },
//     { //one book
//         title: 'Book C', 
//         author: 'Person 3', 
//         price: 21.15, 
//         cover: 'http://something.jpeg',
//     },
// ];

// create array of objects from an api --"books" is our new item array from api

let cart = [];

window.addEventListener('load', function () { //this code runs before page exists, 
                                            //purpose to set it up so a function runs in the future
    console.log('here we go');
    getProducts();
    //loop over all items and show them
    // for( let i = 0; i < items.length; i++) {
    //     showProduct(items[i]);
    // }
});

function getProducts() {
    let request = new XMLHttpRequest();
    request.open('GET', 'http://api.queencityiron.com/books');
    request.addEventListener('load', function() {
        let response = JSON.parse(request.responseText);
        let books = response.books
        //Show each one of these books
        for (let i = 0; i <books.length; i++) {
            showProduct(books[i]);
        }
    });
    request.send();  //don't forget
}

/*Show the provided product in the DOM */
function showProduct(product) {
   // Create an <li>
   //Populate the <li> with Mustache output
   // Add to the parent
   let child = document.createElement('li');
   let parent = document.querySelector('#products ul');
   let template = document.querySelector('#product-template');

   //Mustache.render(template, values)
   child.innerHTML = Mustache.render(template.innerHTML, {
       bookName: product.title,
       authorName: product.author,
       price: product.price.toFixed(2),
       imageUrl: product.cover,
   });

   parent.appendChild(child); 
}