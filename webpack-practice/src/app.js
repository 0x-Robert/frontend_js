
const monkey = require("./monkey.js")
require("./css/main.css");

console.log(monkey);

const components = () => {
    const h1 = document.createElement("h1");
    h1.innerText = "hello webpack";
    return h1; 
}

monkey.food.forEach(f => {
    console.log(f);
})

document.body.appendChild(components());