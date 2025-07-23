let display1 = document.querySelector(".display-img");
let displayHeading = document.querySelector(".overlay-content h1");
let displayLink = document.querySelector(".display-link");
let orderModel3 = document.querySelector(".Model-3");
let orderModelY = document.querySelector(".Model-Y");
let leftCircle = document.querySelector(".left-circle");
let rightCircle = document.querySelector(".right-circle");

let toggle = false;

setInterval(() => {
  display1.classList.add("fade-out"); //Start fading out

  setTimeout(() => {
    display1.src = toggle
      ? "assets/images/Display 1.avif"
      : "assets/images/Display 2.avif";

    displayHeading.innerText = toggle
      ? "$7,500 Federal Tax Credit Ending"
      : "Model 3";

    displayLink.innerText = toggle
      ? "Limited Inventory - Take Delivery Now"
      : "From $299/mo for a Limited Time";
    displayLink.style.textDecoration = toggle ? "underline" : "none";

    orderModel3.innerText = toggle ? "Order Model 3" : "Order Now";

    if (toggle) {
      orderModelY.innerText = "Order Model Y";
      orderModelY.href = "https://www.tesla.com/modely/design";
      orderModelY.classList.add("Model-Y");
      orderModelY.classList.remove("view-inventory");
    } else {
      orderModelY.innerText = "View Inventory";
      orderModelY.href = "https://www.tesla.com/inventory/new/m3";
      orderModelY.classList.add("view-inventory");
      orderModelY.classList.remove("Model-Y");
    }

    if (toggle) {
      leftCircle.classList.remove("circle-opacity");
      rightCircle.classList.add("circle-opacity");
    } else {
      leftCircle.classList.add("circle-opacity");
      rightCircle.classList.remove("circle-opacity");
    }

    display1.classList.remove("fade-out");
    toggle = !toggle; //Toggle the image source
  }, 400);
}, 4000);
