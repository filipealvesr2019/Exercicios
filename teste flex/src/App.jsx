import { useState } from "react";
import "./App.css";
import MobileMenu from "./MobileMenu";

function App() {
  const items = Array.from(Array(100).keys()); // Criar um array de 100 itens
  const [selectedItem, setSelectedItem] = useState('Home');

  const handleItemClick = (itemName) => {
    setSelectedItem(itemName);
  };

  const getIcon = (itemName) => {
    if (selectedItem === itemName) {
      switch (itemName) {
        case 'Home':
          return 'https://i.postimg.cc/PfgLCRKR/home-1.png';
        case 'Produtos':
          return 'https://i.postimg.cc/RC762zcL/box-3.png';
        case 'Pedidos':
          return 'https://i.postimg.cc/vBQFB9NB/to-do-list-1.png';
        case 'Configurações':
          return 'https://i.postimg.cc/DwPKKBxD/setting-1.png';
        default:
          return '';
      }
    } else {
      switch (itemName) {
        case 'Home':
          return 'https://i.postimg.cc/zD4FjpDs/home.png';
        case 'Produtos':
          return 'https://i.postimg.cc/nr9Yx92S/box.png';
        case 'Pedidos':
          return 'https://i.postimg.cc/G2gwNVgJ/to-do-list.png';
        case 'Configurações':
          return 'https://i.postimg.cc/3xZK1Sh9/setting.png';
        default:
          return '';
      }
    }
  };

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
          <a
            className={selectedItem === 'Home' ? 'selected' : ''}
            onClick={() => handleItemClick('Home')}
          >
            <img
              src={getIcon('Home')}
              alt=""
            />
            <span>Home</span>
          </a>
          <a
           
            className={selectedItem === 'Produtos' ? 'selected' : ''}
            onClick={() => handleItemClick('Produtos')}
          >
            <img
              src={getIcon('Produtos')}
              alt=""
            />
            <span>Produtos</span>
          </a>
          <a
            
            className={selectedItem === 'Pedidos' ? 'selected' : ''}
            onClick={() => handleItemClick('Pedidos')}
          >
            <img
              src={getIcon('Pedidos')}
              alt=""
            />
            <span>Pedidos</span>
          </a>
          <a
           
            className={selectedItem === 'Configurações' ? 'selected' : ''}
            onClick={() => handleItemClick('Configurações')}
          >
            <img
              src={getIcon('Configurações')}
              alt=""
            />
            <span>Configurações</span>
          </a>
        </nav>
      </footer>
    </>
  );
}

export default App;
