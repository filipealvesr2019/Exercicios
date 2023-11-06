import React, { useState } from 'react';

const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

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
            style={{ width: '30px', height: '30px' }} // ajuste o tamanho conforme necessário
          />
        )}
      </div>
      {isMenuOpen && (
        <div className="menu-content" style={{ marginTop: '20px' }}>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li
              style={{
                margin: '10px 0',
                color: selectedItem === 'Item 1' ? 'black' : 'gray',
              }}
              onClick={() => handleItemClick('Item 1')}
            >
              Item 1
            </li>
            <li
              style={{
                margin: '10px 0',
                color: selectedItem === 'Item 2' ? 'black' : 'gray',
              }}
              onClick={() => handleItemClick('Item 2')}
            >
              Item 2
            </li>
            <li
              style={{
                margin: '10px 0',
                color: selectedItem === 'Item 3' ? 'black' : 'gray',
              }}
              onClick={() => handleItemClick('Item 3')}
            >
              Item 3
            </li>
            {/* Adicione mais itens conforme necessário */}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
