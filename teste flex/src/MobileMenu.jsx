import React, { useState } from 'react';

const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [backgroundColor, setBackgroundColor] = useState('blue');
  const items = [
    { id: 'img', text: 'Pedidos', icon: 'https://i.ibb.co/LhhvcB0/box.png' },
    // Adicione mais itens conforme necessário
  ];
  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };




  
  const handleItemClick = (itemName) => {
    setSelectedItem(itemName);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div
        className="menu-icon"
        onClick={handleMenuClick}
        style={{ cursor: 'pointer' }}
      >
        {isMenuOpen ? (
          <img
            src="https://i.postimg.cc/gk2pt3N8/close.png"
            alt="Menu Icon"
            style={{ width: '30px', height: '30px' }} // ajuste o tamanho conforme necessário
          />
        ) : (
          <img
            src="https://i.postimg.cc/g2jVNtCR/menu.png"
            alt="Menu Icon"
            style={{ width: '30px', height: '30px' }}
            // ajuste o tamanho conforme necessário
          />
        )}
      </div>
      {isMenuOpen && (
        <div
          className="menu-content"
          style={{ marginTop: '20px', backgroundColor: '#14337D', width: '500px', padding: '2rem', fontFamily: 'urbanist', fontWeight: '600', fontSize: '2rem' }}
        >
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li
              style={{
                margin: '10px 0',
                color: selectedItem === 'Item 1' ? '#4FD6F7' : 'white',
              }}
              onClick={() => handleItemClick('Item 1')}
            >
              Home
            </li>
            <li
              style={{
                margin: '10px 0',
                color: selectedItem === 'Item 2' ? 'gray' : 'white',
              }}
              onClick={() => handleItemClick('Item 2')}
            >
              Produto
            </li>
            <li
              style={{
                margin: '10px 0',
                color: selectedItem === 'Item 3' ? 'gray' : 'white',
              }}
              onClick={() => handleItemClick('Item 3')}
            >
              Pedidos
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
