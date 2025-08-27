// Traverse technique Hearth Count function
const hearths = document.getElementsByClassName("clickHearth");
for (let hearth of hearths) {
  hearth.addEventListener("click", function () {
    // const spnHearth = hearth.parentNode.children[1].children[0];

    const spanHearth = document.getElementById("spnHeartCount");

    const hearthCount = spanHearth;
    let newHearthCount = parseInt(hearthCount.innerText);
    newHearthCount++;

    spanHearth.innerText = newHearthCount;
  });
}

// Traverse technique Copy Count function
const copys = document.getElementsByClassName("spnCopyCount");
for (let copy of copys) {
  copy.addEventListener("click", function () {
    const spanCopy = document.getElementById("spnCopy");

    const copyCounts = spanCopy;
    let newCopyCount = parseInt(copyCounts.innerText);
    newCopyCount++;
    spanCopy.innerText = newCopyCount;
  });
}

// Traverse technique function
const cardTextBtn = document.getElementsByClassName("card-btn");
for (let cardText of cardTextBtn) {
  cardText.addEventListener("click", function () {
    const cartContainer = document.getElementById("cart-container");
    const newCart = document.createElement("div");

    const h1Text =
      cardText.parentNode.parentNode.children[1].children[0].innerText;
    const number =
      cardText.parentNode.parentNode.children[2].children[0].innerText;

    // Local Time
    const nowTime = new Date();
    const localTimes = nowTime.toLocaleString("en-US", {
      //   timeZone: "Asia/Dhaka",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
    });

    newCart.innerHTML = `
      <div class="bg-[#fafafa] rounded-lg p-3 mb-2 flex justify-between items-center">
                  <div class="">
                  <h1 class="font-bold text-sm">${h1Text}</h1>
                  <h1 id="copyText" class="text-xl font-semibold text-[#5c5c5c]">${number}</h1>
                  </div>
                  <div>
                  <h1>${localTimes}</h1>
                  </div>
                </div>
  `;

    cartContainer.appendChild(newCart);

    // Copy to Clipboard
  });
}

// Button clear
document.getElementById("btn-clear").addEventListener("click", function () {
  const clearBtn = document.getElementById("cart-container");
  clearBtn.innerHTML = " ";
});
