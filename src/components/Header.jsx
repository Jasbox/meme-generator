import React from "react"
export default function Header() {
    return (
        <header className="header">
            <img 
                className="header--image"
                src={"/troll-face.png" } 
                alt="a comical laughing troll face in black and white"

            />
                
            <h2 className="header--title">MEME GENERATOR</h2>
            <h4 className="header--subtitle">Meme Away!</h4>
        </header>

       
        )
}