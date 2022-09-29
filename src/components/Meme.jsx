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

  function handleChange (event) {
    const {name, value} = event.target
    setMeme(prevState => {
      return {
        ...prevState,
        [name]: value
      }
    })
  }

  return (
    <main>
      <div className="form">
        <input 
            type="text" 
            placeholder="Top text" 
            className="form--input"
            name="topText" 
            onChange={handleChange}
            value={meme.topText}
        />
        <input 
            type="text" 
            placeholder="Bottom text" 
            className="form--input" 
            name="bottomText"
            onChange={handleChange}
            value={meme.bottomText}
        />
        <button 
            className="form--button" 
            onClick={getMeme}
        >
          Press to get a new meme
        </button>
      </div>
      <div className="meme">

      <img src={meme.randomImage} alt="meme images" className="meme--image" />
      <h2 className="meme--text top">{meme.topText}</h2>
      <h2 className="meme--text bottom">{meme.bottomText}</h2>

      </div>
    </main>
  );
}
