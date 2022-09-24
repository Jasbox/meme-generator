import { useState } from "react";
import memeData from "../memeData";

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/1ur9b0.jpg",
  });

  const [allMemeImage, setAllMemeImage] = useState(memeData);

  function getMeme() {
    const allMeme = allMemeImage.data.memes;
    const randomNum = Math.floor(Math.random() * allMeme.length);

    setMeme((prevState) => {
      return {
        ...prevState,
        randomImage: allMeme[randomNum].url,
      };
    });
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
      <img src={meme.randomImage} alt="meme images" className="meme--image" />
    </main>
  );
}
