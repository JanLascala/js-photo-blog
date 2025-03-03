console.log("works fine")

const cardsRow = document.querySelector(`.container, .row`)
const cardsEndpoint = `https://lanciweb.github.io/demo/api/pictures/`



fetch(cardsEndpoint)
    .then(response => response.json())
    .then(cardData => {
        console.log(cardData) //works
    })
    .catch(Error => {

        console.error(error);


    })