import React from 'react';




const CartModal = ({ isOpen, closeModal, cartItems }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal}>
      <h2>Carrito de compras</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <button onClick={closeModal} className="p-5">Cerrar</button>
    </Modal>
  );
};

export default CartModal;