// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: { name: "pepperoni", price: 1 },
  mushrooms: { name: "Mushrooms", price: 1 },
  greenPeppers: { name: "Green Peppers", price: 1 },
  whiteSauce: { name: "White sauce", price: 3 },
  glutenFreeCrust: { name: "Gluten-free crust", price: 5 },
};

// Initial value of the state (the state values can change over time)
let state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false,
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll(".pep").forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = "visible";
    } else {
      onePep.style.visibility = "hidden";
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  const allMushrooms = document.querySelectorAll("section.mushroom");
  allMushrooms.forEach((mushroom) => {
    if (state.mushrooms) {
      mushroom.style.visibility = "visible";
    } else {
      mushroom.style.visibility = "hidden";
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  const allGreenPeppers = document.querySelectorAll("section.green-pepper");
  allGreenPeppers.forEach((pepper) => {
    if (state.greenPeppers) {
      pepper.style.visibility = "visible";
    } else {
      pepper.style.visibility = "hidden";
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  const sauceSection = document.querySelector(".sauce");
  if (state.whiteSauce) {
    sauceSection.classList.add("sauce-white");
  } else {
    sauceSection.classList.remove("sauce-white");
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  const crustSections = document.querySelectorAll(".crust");
  crustSections.forEach((section) => {
    if (state.glutenFreeCrust) {
      section.classList.add("crust-gluten-free");
    } else {
      section.classList.remove("crust-gluten-free");
    }
  });
}

const ingredientsClasses = {
  pepperoni: "pepperoni",
  mushrooms: "mushrooms",
  greenPeppers: "green-peppers",
  whiteSauce: "sauce",
  glutenFreeCrust: "crust",
};

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  // const buttons = document.querySelectorAll(".btn");
  // buttons.forEach((button) => {
  //   // button.addEventListener("click", () => {
  //   //   button.classList.toggle("active");
  //   // });
  //   button.onclick = () => {
  //     button.classList.toggle("active");
  //   };
  // });
  // document.querySelectorAll(".btn").forEach((button) => {
  //   for (let key in ingredients) {
  //     if (ingredients[key].name === button.innerText) {
  //       if (state[key]) {
  //         button.classList.add("active");
  //       } else {
  //         button.classList.remove("active");
  //       }
  //     }
  //   }
  // });
  // for (let key in ingredientsClasses) {
  //   if (state[key]) {
  //     document
  //       .querySelector(`.btn-${ingredientClasses[key]}`)
  //       .classList.add("active");
  //   } else {
  //     document
  //       .querySelector(`.btn-${ingredientClasses[key]}`)
  //       .classList.remove("active");
  //   }
  // }
}

//  <aside class="panel price">
{
  /* <h2>Your pizza's price</h2>

<b>$10 cheese pizza</b>
<ul>
  <li>$1 pepperoni</li>
  <li>$1 mushrooms</li>
  <li>$1 green peppers</li>
  <li>$3 white sauce</li>
  <li>$5 gluten-free crust</li>
</ul>
<strong>$21</strong>
</aside> */
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  const price = document.querySelector(".panel.price strong");
  const ingredientList = document.querySelector(".panel.price ul");
  // ingredientList.innerHTML = "";
  let sum = basePrice;
  let newWholeList = "";

  for (let ingredient in state) {
    //

    if (state[ingredient]) {
      //
      //
      sum += ingredients[ingredient].price;
      newWholeList += `<li>$${ingredients[ingredient].price} ${ingredients[ingredient].name}</li>`;
    }
  }
  price.innerText = `$${sum}`;
  ingredientList.innerHTML = newWholeList;

  // document.querySelector(“.price b”).innerHTML = `$${basePrice} cheese pizza`
  // let total = basePrice;
  // // remove ingredients from list
  // const list = document.querySelectorAll(“.price li”);
  // list.forEach(li => li.remove());
  // // select ingredients elements for the list
  // let ingredientsList = document.querySelector(“.price ul”)
  // // loop over current state
  // for (let key in state) {
  //   if(state[key] === true) {
  //     total += ingredients[key].price;
  //     //create html list item
  //     const listItem = document.createElement(“li”);
  //     // set text of ingredient with price and name
  //     listItem.innerText = `$${ingredients[key].price} ${ingredients[key].name}`;
  //     //add li to DOM
  //     ingredientsList.appendChild(listItem);
  //   }
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector(".btn.btn-pepperoni").addEventListener("click", () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-pepper">`

// want to seelect btn btn-mushrooms
const mushRoomButtons = document.querySelector(".btn.btn-mushrooms");
// add event listener
mushRoomButtons.addEventListener("click", () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`

const greenPepperButton = document.querySelector(".btn.btn-green-peppers");
// add event listener
greenPepperButton.addEventListener("click", () => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
const sauceButton = document.querySelector(".btn.btn-sauce");
sauceButton.addEventListener("click", () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
const crustButton = document.querySelector(".btn.btn-crust");
crustButton.addEventListener("click", () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
