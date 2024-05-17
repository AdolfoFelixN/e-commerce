import { useEffect, useState } from "react";
import "../styles/principal.css";
import "../styles/header.css";
import data from '../data/datos.json';

const Principal = () => {
  const [carrito, setCarrito] = useState(0);
  const [productos, setProductos] = useState([]);
  const [mostrarMujer, setMostrarMujer] = useState(false);
  const [mostrarHombre, setMostrarHombre] = useState(false);
  const [mostrarCalzado, setMostrarCalzado] = useState(false);

  function agregarAlCarrito(id) {
    setCarrito(carrito + 1);
    setProductos(productos.map(producto => 
      producto.id === id ? { ...producto, cantidad: producto.cantidad + 1 } : producto
    ));
  }
  
  useEffect(() => {
    const productosConCantidad = data.map(producto => ({
      ...producto,
      cantidad: 0
    }));
    setProductos(productosConCantidad);
  }, []);

  function mostrarTodosLosProductos() {
    const productosConCantidad = data.map(producto => ({
      ...producto,
      cantidad: 0
    }));
    setProductos(productosConCantidad);
    setMostrarMujer(false);
  }

  function mostrarProductosMujer() {
    const productosMujer = data.filter(producto => producto.categoria === "mujer");
    setProductos(productosMujer);
    setMostrarMujer(true);
  }

  function mostrarProductosHombre() {
    const productosHombre = data.filter(producto => producto.categoria === "hombre");
    setProductos(productosHombre);
    setMostrarHombre(true);
  }

  function mostrarProductosCalzado() {
    const productosCalzado = data.filter(producto => producto.categoria.includes("calzado"));
    setProductos(productosCalzado);
    setMostrarCalzado(true);
  }
  

  return (
    <>
      <nav>
        <h1>FELIX STORE</h1>
        <form action="">
          <input
            type="text"
            placeholder="Playera, Pantalon, Sueter, Zapatos..."
          />
          <i className="bi bi-search"></i>
        </form>
      </nav>

      <div className="categorias">
        <ul>
          <span onClick={() => mostrarTodosLosProductos()}>Todo</span>
          <span onClick={() => mostrarProductosMujer()}>Mujer</span>
          <span onClick={() => mostrarProductosHombre()}>Hombre</span>
          <span onClick={() => mostrarProductosCalzado()}>Calzado</span>
          <span>Deporte</span>
          <span>Accesorios</span>
        </ul>
        <div className="carrito">
          <i className="bi bi-cart3"></i>
          <p> {carrito} </p>
        </div>
      </div>

      <div className="contenedor">
        <div className="fila">
          {productos.map(producto => (
            <div key={producto.id} className="producto">
              <div className="imagenProducto">
                <img src={producto.imagen} alt={producto.nombre} />  
              </div>
              <div className="pieProducto">
                <h3>{producto.nombre.length > 30 ? `${producto.nombre.substring(0, 30)}...` : producto.nombre}</h3>
                <p>${producto.precio}</p>
                <div className="cantidadProducto">                  
                  <i className="bi bi-cart3" onClick={() => agregarAlCarrito(producto.id)}> {producto.cantidad} </i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Principal;
