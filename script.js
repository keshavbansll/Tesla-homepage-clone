let display1 = document.querySelector(".display-img");
let displayHeading = document.querySelector(".overlay-content h1");
let displayLink = document.querySelector(".display-link");
let orderModel3 = document.querySelector(".Model-3");
let orderModelY = document.querySelector(".Model-Y");
let leftCircle = document.querySelector(".left-circle");
let rightCircle = document.querySelector(".right-circle");
let leftArrow = document.querySelector(".left-arrow");
let rightArrow = document.querySelector(".right-arrow");

let sliderInterval = null;
let toggle = false;

function startAutoSlide() {
  sliderInterval = setInterval(() => {
    display1.classList.add("fade-out"); //Start fading out

    setTimeout(() => {
      updateDisplay(toggle);
      toggle = !toggle;
      display1.classList.remove("fade-out");
    }, 400);
  }, 5000);
}

startAutoSlide();

function manualToggle(newState) {
  clearInterval(sliderInterval);
  updateDisplay(newState);
  toggle = newState;
  startAutoSlide();
}

function updateDisplay(state) {
  display1.src = state
    ? "assets/images/Display 1.avif"
    : "assets/images/Display 2.avif";

  displayHeading.innerText = state
    ? "$7,500 Federal Tax Credit Ending"
    : "Model 3";

  displayLink.innerText = state
    ? "Limited Inventory - Take Delivery Now"
    : "From $299/mo for a Limited Time";
  displayLink.style.textDecoration = state ? "underline" : "none";

  orderModel3.innerText = state ? "Order Model 3" : "Order Now";

  if (state) {
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

  if (state) {
    leftCircle.classList.remove("circle-opacity");
    rightCircle.classList.add("circle-opacity");
  } else {
    leftCircle.classList.add("circle-opacity");
    rightCircle.classList.remove("circle-opacity");
  }
}

leftCircle.addEventListener("click", (e) => {
  e.preventDefault();
  if (!toggle) {
    manualToggle(true);
  }
});
rightCircle.addEventListener("click", (e) => {
  e.preventDefault();
  if (toggle) {
    manualToggle(false);
  }
});

leftArrow.addEventListener("click", (e) => {
  e.preventDefault();
  if (!toggle) {
    manualToggle(true);
  }
});
rightArrow.addEventListener("click", (e) => {
  e.preventDefault();
  if (toggle) {
    manualToggle(false);
  }
});
