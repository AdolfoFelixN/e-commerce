import "../styles/header.css";

const Header = () => {  

  return (
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
  );
};

export default Header;