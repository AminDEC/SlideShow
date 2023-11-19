import "./App.css";
import Pics from "./objects.js";

function App() {
  return (
    <div className="App">
      <img className="imag__back" src={Pics[4].image_adrees} alt="NO" />
      <div className="main__container">
        <div className="image__container">
          <img src={Pics[4].image_adrees} alt="" className="image__view" />
          <div className="image__details">
            <h1>{Pics[0].name}</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              egestas nibh in varius tincidunt. In scelerisque elit et leo
              interdum maximus. Nunc dapibus ante at augue maximus tincidunt.
              Suspendisse tincidunt euismod hendrerit. Morbi ac turpis lacinia,
              vehicula enim lacinia, porttitor urna. Nullam placerat risus eros,
              vel convallis leo venenatis eu. Duis vel mattis massa. Fusce
              venenatis leo est, ac gravida risus pretium in. Nam quis tortor
              mauris. Donec ac enim vitae massa fermentum venenatis. Nam nec
              diam condimentum, ornare ante eget, auctor odio.
            </p>
          </div>
        </div>

        <div className="slider__container">
          <div className="card__container">
            <button className="glass__button"> Previous </button>
            {Pics.map((Pic) => (
              <img src={Pic.image_adrees} alt="" className="image__card" />
            ))}
            <button className="glass__button"> Next </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
