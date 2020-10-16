// map
const map = L.map("mapid").setView([-3.7522141, -38.535286], 15);

// tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});

let marker;

// create and add marker
map.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector("[name=lat]").value = lat;
  document.querySelector("[name=lng]").value = lng;

  // remove icon
  marker && map.removeLayer(marker);

  // add icon layer
  marker = L.marker([lat, lng], { icon }).addTo(map);
});

// upload photos
function addPhotoField() {
  //pegar o container de fotos #images
  const container = document.querySelector("#images");

  //pegar o container para duplicar .new-image
  const fieldsContainer = document.querySelectorAll(".new-upload");

  //clone da ultuma imagem adicionada
  const newfieldContainer = fieldsContainer[
    fieldsContainer.length - 1
  ].cloneNode(true);

  //Verifica se o campo está vazio, se sim, não adiciona ao container de imagens
  const input = newfieldContainer.children[0];

  if (input.value == "") {
    return;
  }
  //Limpando o campo antes de adicionar ao container de imagens
  newfieldContainer.children[0].value = "";

  //adicionar o o clone ao container de #images
  container.appendChild(newfieldContainer);
}

function deleteField(event) {
  const span = event.currentTarget;

  const fieldsContainer = document.querySelectorAll(".new-upload");

  if (fieldsContainer.length < 2) {
    //limpar o vaor do campo
    span.parentNode.children[0].value = "";
    return;
  }

  //deletar o campo
  span.parentNode.remove();
}

//select yes or no

// select yes or no
function toggleSelect(event) {
  // remove the .active class from the buttons
  document.querySelectorAll(".button-select button").forEach(function (button) {
    button.classList.remove("active");
  });

  // put the .active class on the clicked button
  const button = event.currentTarget;
  button.classList.add("active");

  // update input hidden with the selected value
  const input = document.querySelector('[name="open_on_weekends"]');

  // check yes or no
  input.value = button.dataset.value;
}
