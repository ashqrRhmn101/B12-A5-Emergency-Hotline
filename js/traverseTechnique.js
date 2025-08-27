// Traverse technique function
const cardCopyBtn = document.getElementsByClassName("btn-copy");
for (let CopyText of cardCopyBtn) {
  CopyText.addEventListener("click", function () {
    const number =
      CopyText.parentNode.parentNode.children[2].children[0].innerText;

    // Copy to Clipboard
    navigator.clipboard.writeText(number);

    // const getCopyText = document.getElementById("copyText").innerText;

    // console.log(getCopyText);
    //    alert(getCopyText);
  });
}
