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

    // const getCopyText = document.getElementById("copyText").innerText;

    // console.log(getCopyText);
    //    alert(getCopyText);
  });
}
