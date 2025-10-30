import "./Sena.css";

export default function Sena() {
  return (
    <div className="sena-container">
      {/* Header */}
      <header className="sena-header">
        <div className="sena-logo"></div>
        <nav className="sena-nav">
          <a href="#">INICIO</a>
          <a href="#">PROGRAMAS</a>
          <a href="#">CONTACTO</a>
        </nav>
      </header>

      {/* Títulos */}
      <div className="sena-titulos">
        <h1>SERVICIO NACIONAL DE APRENDIZAJE</h1>
        <h2>CENTRO DE GESTIÓN DE MERCADOS</h2>
        <h3>BOGOTÁ</h3>
      </div>

      {/* Cuadros de programas */}
      <div className="sena-programas">
        {["ADSO", "REDES DE DATOS", "ANIMACIÓN 3D", "LOGÍSTICA", "MERCADEO", "SISTEMAS"].map(
          (item) => (
            <div key={item} className="sena-cuadro">
              {item}
            </div>
          )
        )}
      </div>

      {/* Formulario */}
      <form className="sena-form">
        <label>NOMBRES</label>
        <input type="text" placeholder="Tu nombre" />
        <label>CORREO</label>
        <input type="email" placeholder="tu@email.com" />
        <label>MENSAJE</label>
        <textarea rows="4" placeholder="Escribe tu mensaje..."></textarea>
        <button type="submit">ENVIAR</button>
      </form>
    </div>
  );
}
