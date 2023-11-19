// Mostafa M Amin
// use the code if you found it helpfull :)

import "./App.css";
import Pics from "./objects.js";
import { useState } from "react";

function App() {
  // state management usin '' use state '' hook
  const [current_index, setCurrent_index] = useState(0);

  // getting max indwx on a seperade var to prevent lins being to long
  var max_index = Pics.length - 1;

  // functions for event handeling
  let next = () => {
    setCurrent_index(
      current_index === Pics.length - 1
        ? current_index - max_index
        : current_index + 1
    );
  };

  let previous = () => {
    setCurrent_index(
      current_index === 0 ? current_index + max_index : current_index - 1
    );
  };

  // main body

  // the names of classes are self-explanatory
  return (
    <div className="App">
      <img
        className="imag__back"
        src={Pics[current_index].image_adrees}
        alt="NO"
      />
      <div className="main__container">
        <div className="image__container">
          <img
            src={Pics[current_index].image_adrees}
            alt=""
            className="image__view"
          />
          <div className="image__details">
            <h1>{Pics[current_index].name}</h1>
            <br />
            <p>{Pics[current_index].details}</p>
          </div>
        </div>

        <div className="slider__container">
          <div className="card__container">
            <button className="glass__button" onClick={previous}>
              Previous
            </button>
            {Pics.map((Pic, index) => (
              <img
                src={Pic.image_adrees}
                alt=""
                className="image__card"
                // nice blue shadow around the current card
                style={{
                  boxShadow:
                    index === current_index
                      ? "0 0 10px blue"
                      : "0 0 10px black",

                  transform: index === current_index ? " scale(1.25)" : "none",
                }}
              />
            ))}
            <button className="glass__button" onClick={next}>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
