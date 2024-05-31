const images = [
  { name: "Whitehaven Beach, Australia", image: "whitehaven_australia" },
  { name: "Grace Bay, Turks and Caicos", image: "grace_bay" },
  { name: "Baia do Sancho, Brazil", image: "baia_sancho" },
  { name: "Navagio Beach, Greece", image: "navagio_beach" },
  { name: "Playa Paraiso, Mexico", image: "playa_paraiso" },
  { name: "Anse Source d'Argent, Seychelles", image: "anse_source" },
  { name: "Seven Mile Beach, Cayman Islands", image: "seven_mile" },
  { name: "Bora Bora, French Polynesia", image: "bora_bora" },
  { name: "Lanikai Beach, Hawaii", image: "lanikai_beach" },
  { name: "Pink Sands Beach, Bahamas", image: "pink_sands" },
];

const items = document.querySelectorAll("li h3");

const { dialog, title, contents } = addDialog();

for (const item of items) {
  const img = images.find((image) => image.name === item.innerHTML);
  if (!img) {
    continue;
  }
  const imgset = `image-set(url('assets/img/${img.image}_600.avif') type('image/avif'), url('assets/img/${img.image}_600.webp') type('image/wepb'))`;
  const li = item.parentElement;
  li.style.setProperty("--beach-img", imgset);

  li.addEventListener("click", function () {
    title.innerHTML = item.innerHTML;

    const image = document.createElement("img");
    image.src = `assets/img/${img.image}_600.webp`;

    const p = document.createElement("p");
    p.innerHTML = li.querySelector("p").innerHTML;

    const a = document.createElement("a");
    a.href = `https://www.google.com/search?q=${item.innerHTML}`;
    a.target = "_blank";
    a.innerHTML = `<button class="btn-visit">Visit</button>`;

    contents.appendChild(image);
    contents.appendChild(p);
    contents.appendChild(a);
    dialog.showModal();
  });
}

function addDialog() {
  const dialog = document.createElement("dialog");
  dialog.classList.add("dialog-box");

  const header = document.createElement("h2");
  header.classList.add("dialog-header");
  const title = document.createElement("div");
  const close = document.createElement("button");
  close.classList.add("dialog-close");
  close.innerHTML = "X";

  const contents = document.createElement("div");
  contents.classList.add("dialog-contents");

  close.addEventListener("click", function () {
    title.innerHTML = "";
    contents.innerHTML = "";
    this.closest("dialog").close();
  });

  header.appendChild(title);
  header.appendChild(close);
  dialog.appendChild(header);
  dialog.appendChild(contents);
  document.body.appendChild(dialog);

  return { dialog, contents, title };
}
