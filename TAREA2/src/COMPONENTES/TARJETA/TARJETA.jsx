


function Tarjeta({ nombre, profesion, descripcion }) {
  return (
    <div className="tarjeta">
      <img
        src="https://lh3.googleusercontent.com/a/ACg8ocJtciBHX646EHPwdWMltqMeAUf6WdVrP7OGm-r_T4mkcyxPiUgm=s432-c-no"
        alt={`Foto de ${nombre}`}
        className="tarjeta-imagen"
      />

      <h2>{nombre}</h2>
      <h3>{profesion}</h3>
      <p>{descripcion}</p>
    </div>
  );
}

export default Tarjeta;