import { useState } from "react";
import memeData from "../memeData";

export default function Meme() {

  const [memeImage, setMemeImage] = useState("https://i.imgflip.com/1ur9b0.jpg") 

  function getMeme() {
    const allMeme = memeData.data.memes;
    const randomNum = Math.floor(Math.random() * allMeme.length);
   
    return setMemeImage(allMeme[randomNum].url);


  }

  return (
    <main>
      <div className="form">
        <input type="text" placeholder="Top text" className="form--input" />
        <input type="text" placeholder="Bottom text" className="form--input" />
        <button className="form--button" onClick={getMeme}>
          Press to get a new meme
        </button>
      </div>
      <img src={memeImage} alt="meme images" className="meme--image"/>
    </main>
  );
}
