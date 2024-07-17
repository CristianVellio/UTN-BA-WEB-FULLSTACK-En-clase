import "./Boton.css";

function Boton(props) {
  const estiloBoton = {
    backgroundColor: props.color,
  };
  return (
    <div>
      <button style={estiloBoton} onClick={props.onClick} className="boton">
        {props.texto}
      </button>
    </div>
  );
}

export default Boton;
