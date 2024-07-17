import "./Section.css";
import Alola from "../../assets/img/Alola.jpg";
import Boton from "../boton/Boton";

function Section() {
  const handlerClickEnBoton = () => {
    alert("You clicked on the Region button");
  };
  return (
    <section className="section">
      <h2>Data on Alola Region</h2>
      <p>
        Alola is made up of four islands: Melemele Island, Akala Island, Ula'ula
        Island, and Poni Island. In the center is an artificial island by the
        name of Aether Paradise. It is a popular resort destination and attracts
        a lot of tourists from other regions. In Alola, humans and Pokémon
        coexist in a very close relationship, and a culture has developed that
        is different from other regions.
      </p>
      <img src={Alola} alt="Alola Region" />
      <Boton
        color="cornflowerblue"
        texto="Region"
        onClick={handlerClickEnBoton}
      />
      <Boton texto="Safari" />
    </section>
  );
}

export default Section;
