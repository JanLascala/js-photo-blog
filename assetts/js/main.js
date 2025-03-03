console.log("works fine")

const cardsRow = document.querySelector(`.container .row`)
const cardsEndpoint = `https://lanciweb.github.io/demo/api/pictures/`
const pictureEl = document.querySelector(`.card-img-top`)
const overLayEl = document.getElementById(`overlay`)
const overlayBtnoff = document.getElementById(`Closebtn`)


fetch(cardsEndpoint)
    .then(response => response.json())
    .then(cardData => {
        console.log(cardData) //works

        // insert data inside the cards

        cardData.forEach(singleCardData => {


            // data of EACH card 
            console.log(singleCardData);

            const CardMarkup =

                `<div class="col-12 col-md-6 col-xl-4">
            <div Id="Polaroid" class="card p-3">
                <div id="Img_container">
                    <img class="card-img-top" onclick="on()" src="${singleCardData.url}" />
                    <img id="RedPin" width="30" src="./assetts/img/pin.svg" alt="red pin">
                </div>
                <div class="card-body text-start">
                    <p class="photo_date text-body-secondary">${singleCardData.date}</p>
                    <h3 id="Photo_title" class="card-title">${singleCardData.title}</h3>
                </div>
            </div>
        </div>`
            cardsRow.insertAdjacentHTML(`beforeend`, CardMarkup)
        });



    })
    .catch(Error => {

        console.error(error);


    })

/*overlay funtions*/

/*pictureEl.addEventListener(`click`, function () {

    overLayEl.classList.add(`.displayOverlay`)
})*/

function on() {
    overLayEl.style.display = "block";

}

function off() {
    overLayEl.style.display = "none";
}

