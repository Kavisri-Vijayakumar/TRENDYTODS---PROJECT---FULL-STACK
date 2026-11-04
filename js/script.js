function addToCart(name, price){

    let cart =
    JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({
        name:name,
        price:price
    });

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    alert(name + " added to cart!");
}

/* WISHLIST */

function addToWishlist(name, price){

    let wishlist =
    JSON.parse(localStorage.getItem("wishlist")) || [];

    wishlist.push({
        name:name,
        price:price
    });

    localStorage.setItem(
        "wishlist",
        JSON.stringify(wishlist)
    );

    alert(name + " added to wishlist!");
}