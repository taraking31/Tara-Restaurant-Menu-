//grab the animal buttons
const image_button = document.getElementsByName("image_button")

//activate animal buttons
image_button.forEach(button => {
    button.addEventListener("change", event => { 
        text.innerHTML = "Here is a picture of " + button.value
        photo.src = "images/" + button.value + ".jpg"

    })
})

const animal_buttons = document.getElementsByName("animal-button")
const text = document.querySelector("#text")
const photo = document.querySelector("#photo")


