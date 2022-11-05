import flowerImage from "../img/pexels-irina-iriser-673857.jpg"
import pineappleImage from "../img/pexels-karolina-grabowska-4195527.jpg"
import colaImage from "../img/pexels-olena-bohovyk-3819969.jpg"
import skyImage from "../img/pexels-soubhagya-maharana-5245865.jpg"

function chooseImage(inputFromPopup){
    let toBeaddedImage;
    switch (inputFromPopup) {
        case ("Ananas"):
            toBeaddedImage = pineappleImage;
            break;
        case ("Bloemen"):
            toBeaddedImage = flowerImage;
            break;
        case ("Cola"):
            toBeaddedImage = colaImage;
            break;
        default:
            toBeaddedImage = skyImage;
            break;
    }
    return toBeaddedImage;
}

export default chooseImage;