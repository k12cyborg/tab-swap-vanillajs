const blocks = document.getElementsByClassName("card");

const handleDrag = (i) => (e) => {
  e.target.id = "origin";
};

function handleEnter(e) {
  e.preventDefault();
  const a = document.querySelector("#origin");

  if (e.target.style.order != a.style.order && e.target.id != "origin") {
    const order = a.style.order;
    a.style.order = e.target.style.order;
    e.target.style.order = order;
  }
}

let i = 0;
for (let card of blocks) {
  card.style.order = i;
  card.addEventListener("dragstart", handleDrag(i));
  card.addEventListener("dragenter", handleEnter);
  card.addEventListener("dragover", (e) => e.preventDefault());
  card.addEventListener("drop", (e) => {
    e.preventDefault();
    e.target.id = "";
  });
  i++;
}
