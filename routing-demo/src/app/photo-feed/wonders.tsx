import { StaticImageData } from "next/image";
import photo1 from "./photos/1.jpg";
import photo2 from "./photos/2.jpg";
import photo3 from "./photos/3.jpg";
import photo4 from "./photos/4.jpg";
import photo5 from "./photos/5.jpg";
import photo6 from "./photos/6.jpg";
import photo7 from "./photos/7.jpg";

export type wonderImage = {
    id: string;
    name: string;
    src: StaticImageData;
    photographer: string;
    location: string;
}

const wonderImages: wonderImage[] = [ {
    id: "1",
    name: "The Great Wall of China",
    src: photo1,
    photographer: "John Doe",
    location: "China",  
},
{
    id: "2",
    name: "Petra",
    src: photo2,
    photographer: "Jane Doe",
    location: "Jordan",
},
{
    id: "3",
    name: "Christ the Redeemer",
    src: photo3,
    photographer: "John Doe",
    location: "Brazil",
},
{
    id: "4",
    name: "Machu Picchu",
    src: photo4,
    photographer: "Jane Doe",
    location: "Peru",
},
{
    id: "5",
    name: "Chichen Itza",
    src: photo5,
    photographer: "John Doe",
    location: "Mexico",
},
{
    id: "6",
    name: "The Roman Colosseum",
    src: photo6,
    photographer: "Jane Doe",
    location: "Italy",
},
{
    id: "7",
    name: "Taj Mahal",
    src: photo7,
    photographer: "John Doe",
    location: "India",
}
]

export default wonderImages;