import Board from "./Board";

const MemoryGame = ({ images }) => {
  let allImages = [...images, ...images];
  let shuffledImages = allImages.sort(() => Math.random() - 0.5);
  
  return (
    <div className="memory-game">
      <header>
        <h1>Memory Game</h1>
      </header>
      <main>
        <Board images={shuffledImages} />
      </main>
    </div>
  );
};

export default MemoryGame;
