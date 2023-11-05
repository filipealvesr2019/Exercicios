import React, { useState } from 'react';

const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div
        className="menu-icon"
        onClick={handleMenuClick}
        style={{
          cursor: 'pointer',
          padding: '10px',
          backgroundColor: 'lightgray',
          borderRadius: '50%',
        }}
      >
        {isMenuOpen ? (
          <div>X</div>
        ) : (
          <div>
            <div style={{ width: '25px', height: '3px', backgroundColor: 'black', margin: '4px 0' }}></div>
            <div style={{ width: '25px', height: '3px', backgroundColor: 'black', margin: '4px 0' }}></div>
            <div style={{ width: '25px', height: '3px', backgroundColor: 'black', margin: '4px 0' }}></div>
          </div>
        )}
      </div>
      {isMenuOpen && (
        <div className="menu-content" style={{ marginTop: '20px' }}>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li style={{ margin: '10px 0' }}>Item 1</li>
            <li style={{ margin: '10px 0' }}>Item 2</li>
            <li style={{ margin: '10px 0' }}>Item 3</li>
            {/* Adicione mais itens conforme necessário */}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
