import Modal from "./modal"
import "./App.css";
import MobileMenu from "./MobileMenu";

function App() {
  const items = Array.from(Array(100).keys()); // Criar um array de 100 itens



  return (
    <>
     <MobileMenu></MobileMenu>
        <div className="grid-container">
      {items.map((item) => (
        <div key={item} className="grid-item"></div>
      ))}
    </div>
     
      <footer className="footer">
        <nav>
          <a href="#">Home</a>
          <a href="#">Produtos</a>
          <a href="#">Pedidos</a>
          <a href="#">Configurações</a>
        </nav>
      </footer>

          </>
  );
}

export default App;
