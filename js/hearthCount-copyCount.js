// Heart Count
function getHeartCount(id) {
  document.getElementById(id).addEventListener("click", function () {
    const spnHearth = document.getElementById("spnHeartCount");

    const hearthCount = spnHearth;
    let newHearthCount = parseInt(hearthCount.innerText);
    newHearthCount++;

    spnHearth.innerText = newHearthCount;
  });
}

//  card 1
getHeartCount("clickHearth");
// //  card 2
getHeartCount("clickHearth2");
// //  card 3
getHeartCount("clickHearth3");
// //  card 4
// getHeartCount("clickHearth4");

// Copy Count
function getCopyCount(id) {
  document.getElementById(id).addEventListener("click", function () {
    const spanCopy = document.getElementById("spnCopy");

    const copyCounts = spanCopy;
    let newCopyCount = parseInt(copyCounts.innerText);
    newCopyCount++;
    spanCopy.innerText = newCopyCount;

    // Copy Text1
    const copyTextInner = document.getElementById("copyText").innerText;

    navigator.clipboard.writeText(copyTextInner);
    // Copy Text2
    const copyTextInner2 = document.getElementById("copyText2").innerText;

    navigator.clipboard.writeText(copyTextInner2);

  });
}

// card 1
getCopyCount("spnCopyCount");
// card 2
getCopyCount("spnCopyCount2");
// card 3
getCopyCount("spnCopyCount3");
