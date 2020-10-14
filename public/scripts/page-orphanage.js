const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false,
}

//create map
const map = L.map('mapid', options).setView([-3.7522141,-38.535286], 15);

//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',)
.addTo(map);


//create icon   
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29,68],
    popAnchor: [170, 2]
})

//create and add marker
L
.marker([-3.7522141,-38.535286], { icon })
.addTo(map)

// image gallery

function selectImage(event){
    const button = event.currentTarget;

    //remover todas as classes active

    const buttons = document.querySelectorAll(".images button")
    buttons.forEach((button) => {
        button.classList.remove("active")
    })

    //selecionar a imagem clicada
    const image = button.children[0]
    const imageContainer = document.querySelector('.orphanage-details > img')

    //atualizar o container de imagem
    imageContainer.src = image.src

    //adcionar classe active
    button.classList.add("active")
}