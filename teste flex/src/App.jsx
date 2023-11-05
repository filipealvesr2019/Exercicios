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
          <a href="#"><img src="https://i.postimg.cc/zD4FjpDs/home.png" alt="" /><span>Home</span> </a>
          <a href="#"><img src="https://i.postimg.cc/nr9Yx92S/box.png" alt="" /><span>Produtos</span> </a>
          <a href="#"><img src="https://i.postimg.cc/G2gwNVgJ/to-do-list.png"></img><span>Pedidos</span></a>
          <a href="#"><img src="https://i.postimg.cc/3xZK1Sh9/setting.png"></img><span>Configurações</span></a>
        </nav>
      </footer>

          </>
  );
}

export default App;
