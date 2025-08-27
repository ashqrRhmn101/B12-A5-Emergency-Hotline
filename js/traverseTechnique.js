// Traverse technique function
const cardCopyBtn = document.getElementsByClassName("btn-copy");
for (let CopyText of cardCopyBtn) {
  CopyText.addEventListener("click", function () {
    const number =
      CopyText.parentNode.parentNode.children[2].children[0].innerText;

    // Copy to Clipboard
    navigator.clipboard.writeText(number);

    alert(`নম্বর কপি হয়েছে :${number}`);
  });
}
