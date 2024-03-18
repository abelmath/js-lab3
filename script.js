// script.js
function customizeHamburger() {
    const bunOptions = ["Sesame Bun", "Whole Wheat Bun", "Gluten-Free Bun"];
    const garnishOptions = ["Lettuce", "Tomato", "Onion"];
    const cheeseOptions = ["Cheddar", "Swiss", "Pepper Jack"];
    const sauceOptions = ["Ketchup", "Mustard", "Mayonnaise"];
    const pattyOptions = ["Beef", "Chicken", "Vegetarian"];
    const pattyCountOptions = ["Single", "Double", "Triple"];
    const extraOptions = ["Pickles", "Hot Peppers", "Olives"];

    const bun = bunOptions[Math.floor(Math.random() * bunOptions.length)];
    const garnish = garnishOptions[Math.floor(Math.random() * garnishOptions.length)];
    const cheese = cheeseOptions[Math.floor(Math.random() * cheeseOptions.length)];
    const sauce = sauceOptions[Math.floor(Math.random() * sauceOptions.length)];
    const patty = pattyOptions[Math.floor(Math.random() * pattyOptions.length)];
    const pattyCount = pattyCountOptions[Math.floor(Math.random() * pattyCountOptions.length)];
    const extra = extraOptions[Math.floor(Math.random() * extraOptions.length)];

    const description = `Your customized hamburger has a ${pattyCount} ${patty} patty on a ${bun} bun with ${garnish}, ${cheese}, ${sauce}, and ${extra}.`;

    document.getElementById("output").innerText = description;
}
