export default function Tile({ index, image, handleClick }) {
  return (
    <div>
      <img
        src={image}
        style={{ padding: "5px" }}
        className="show"
      />
      <div>
        <button className="imgPlaceholder" onClick={handleClick}></button>    
      </div>
    </div>
  );
}