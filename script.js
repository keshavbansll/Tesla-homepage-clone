let display1 = document.querySelector(".display-img");
let displayHeading = document.querySelector(".overlay-content h1");
let displayLink = document.querySelector(".display-link");
let orderModel3 = document.querySelector(".Model-3");
let orderModelY = document.querySelector(".Model-Y");

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
    orderModelY.innerText = toggle ? "Order Model Y" : "View Inventory";
    orderModelY.href = toggle
      ? "https://www.tesla.com/modely/design"
      : "https://www.tesla.com/inventory/new/m3";
    orderModelY.classList.toggle("view-inventory", !toggle);

    display1.classList.remove("fade-out");
    toggle = !toggle; //Toggle the image source
  }, 400);
}, 8000);
