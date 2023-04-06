import React, { useState } from "react";
import toppingsData  from "./toppingsData";

const PizzaBuilder = () => {
  const [toppings, setToppings] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addTopping = (toppingName) => {
    const topping = toppingsData.find((topping) => topping.name === toppingName);
    setToppings([...toppings, topping]);
    setTotalPrice(totalPrice + topping.price);
  };

  const removeTopping = (index) => {
    const newToppings = [...toppings];
    const removedTopping = newToppings.splice(index, 1)[0];
    setToppings(newToppings);
    setTotalPrice(totalPrice - removedTopping.price);
  };

  return (
    <div>
      <div className="pizza">
        {toppings.map((topping, index) => (
          <div key={index} className={`topping ₹{topping.name.toLowerCase()}`}>
            <img src={topping.image} alt={topping.name} />
            <span>{topping.name} (₹{topping.price.toFixed(2)})</span>
            <button onClick={() => removeTopping(index)}>X</button>
          </div>
        ))}
      </div>
      <div className="topping-options">
        <h4>Pizzeria now gives you option to build your own pizza.Customise your pizza by choosing ingredients from the list given below</h4>
        <table>
          <thead>
            <tr>
            </tr>
          </thead>
          <tbody>
            {toppingsData.map((topping) => (
              <tr key={topping.name}>
                <td>
                  <img src={topping.image} alt={topping.name} />
                </td>
                <td>{topping.name}</td>
                <td>₹{topping.price.toFixed(2)}</td>
                <td>
                  
                    <input
                      type="checkbox"
                      id={topping.name}
                      onChange={() => addTopping(topping.name)}
                    />
                  <label htmlFor={topping.name}>
                    Add
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="total-price">
        Total Cost: ₹{totalPrice.toFixed(2)}
      </div>
      <button>Build Ur Pizza</button>
    </div>
  );
};

export default PizzaBuilder;
