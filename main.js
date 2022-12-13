const BTN_OPEN = document.createElement("button");
BTN_OPEN.textContent = "Ouverture";
const BTN_CLOSE = document.createElement("button");
BTN_CLOSE.textContent = "Fermeture";

document.body.appendChild(BTN_OPEN);
document.body.appendChild(BTN_CLOSE);

let params =
  "scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=600,height=300,left=100,top=100";
let popup;
let start;
let end;

BTN_OPEN.addEventListener("click", (e) => {
  popup = open("", "test", params);
  start = Date.now();
  document.body.removeChild(document.body.lastChild);
  console.log(document.body.childNodes);
});

BTN_CLOSE.addEventListener("click", (e) => {
  popup.close();
  end = Date.now();
  console.log(`Execution time: ${end / 1000 - start / 1000} s`);
  document.body.append(
    `Execution time: ${Math.round(end / 1000 - start / 1000)} s`
  );
});

BTN_OPEN.style.margin = "10px";
BTN_CLOSE.style.margin = "10px";
