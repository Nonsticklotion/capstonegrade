import "./Card.css";

import greekSalad from "../images/Salad.jpg";
import bruschetta from "../images/Bruchetta.svg";
import LemonDessert from "../images/LemonDessert.jpg";

const cardInfo = [
  {
    img: greekSalad,
    title: "Greek Salad",
    price: 12.99,
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
  },
  {
    img: bruschetta,
    title: "Bruschetta",
    price: 5.99,
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
  },
  {
    img: LemonDessert,
    title: "Lemon Dessert",
    price: 5.0,
    description:
      "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
  },
];
const Card = () => {
  return (
    <>
      <div className="cardset">
        {cardInfo.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.img} alt="greenSalad" />
            <div className="info">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h3>{item.title}</h3>
                <p style={{color:"orange",fontWeight:"600"}}>{item.price} $</p>
              </div>
              <p>{item.description}</p>
              <button className="choosebutton">More Info</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;
