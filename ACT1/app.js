import { myImage } from "./images.js"
import { myInfo } from "./info.js"

let myDataObject = {
    title : "CUTIE PUPPY",
    definition : "Having two puppies means they’ll always have each other around for company. When you’re not home and can’t provide entertainment for your pooch, another furry friend in the house will. Your dogs can play with each other, which can be effective for keeping boredom and lack of stimulation at bay",
    MyImg : "maijale.jpg",
    buttonName : "Learn More"
}

const {title, definition, MyImg, buttonName} = myDataObject

let container = document.getElementById('container')

container.append(myImage(MyImg))
container.append(myInfo(title, definition, buttonName))
