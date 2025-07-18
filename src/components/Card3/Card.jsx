import "./Card.css";
import profilePic from "../../assets/pastor.jpeg";

function Card() {
  return (
    <div className="card">
      <img src={profilePic} alt="Product" className="card-image" />
      <h2>PASTOR</h2>
      <p>This is our Leader.</p>
    </div>
  );
}

export default Card;
