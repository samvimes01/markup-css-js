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

for (const item of items) {
  const img = images.find((image) => image.name === item.innerHTML);
  if (!img) {
    continue;
  }
  const imgset = `image-set(url('assets/img/${img.image}_600.avif') type('image/avif'), url('assets/img/${img.image}_600.webp') type('image/wepb'))`;
  item.parentElement.style.setProperty("--beach-img", imgset);
}