import React from 'react';
import PropTypes from "prop-types";

const foodILike = [
  {
    id:1,
    name: "kimchi",
    image:
      "https://www.platingsandpairings.com/wp-content/uploads/2014/12/Kimchi-5.jpg",
    rating: 5
  },
  {
    id:2,
    name: "ramen",
    image:
      "https://www.theflavorbender.com/wp-content/uploads/2019/01/Easy-Chicken-Ramen-Featured.jpg",
    rating: 4.9
  }
];

function Food({ name, picture , rating }){
  return <div>
    <h2>I like {name}</h2>
    <h4>{rating}/5.0</h4>
    <img src={picture} alt={name}/>
  </div>
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
      ))}
    </div>
  );
}

export default App;
