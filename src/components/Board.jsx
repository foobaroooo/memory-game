import { useState } from 'react';
import Tile from "./Tile";

export default function Board({ images }) {
    let [selectedIndex, setSelectedIndex] = useState(null);
    let [flippingTile, setFlippingTile] = useState(false);

    let handleClick = (index) => {
        if (images[selectedIndex] === images[index]) {
            console.log("Matched");
        }
  
        setFlippingTile(true);
        setSelectedIndex(index);
    };

    return (
        <div className={"board"}>
        {images.map((image, index) => (
            <div key={crypto.randomUUID()}>
                {(flippingTile) ? 
                    <img
                        src={image}
                        style={{ padding: "5px" }}
                        className="show"
                    />
                    :
                    <div>
                        <button className="imgPlaceholder" onClick={() => handleClick(index)}></button>    
                    </div>
                }   
            </div>
        ))}
        </div>
    );
}