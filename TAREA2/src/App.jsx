import TARJETA from "./COMPONENTES/TARJETA/TARJETA";
import "./App.css"

export default function App() {
  return (
    <div className="contenedor">
      <h1>Mi tarjeta de presentación</h1>

      <div className="contenedor-tarjetas">

        <TARJETA
          nombre="Jorge Neuville"
          profesion="TSU EN INFORMATICA"
          descripcion="Me apasiona el diseño, la creatividad y la comunicación visual. Siempre estoy aprendiendo cosas nuevas."
        />


      </div>
    </div>
  );
}



