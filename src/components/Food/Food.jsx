import "./Food.css";

function Food() {
  const food1 = "WORSHIP";
  const food2 = "OUTREACH";

  return (
    <div className="food-section">
      <h2>MEET OUR LEADERS</h2>
      <ul>
        <li>PRAYER</li>
        <li>{food1}</li>
        <li>{food2}</li>
      </ul>
    </div>
  );
}

export default Food;
