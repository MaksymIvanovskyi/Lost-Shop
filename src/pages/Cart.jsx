import { Link } from 'react-router-dom';
import './Cart.css';

export default function Cart({ cart, onRemoveFromCart }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <section className="cart-page">
      <div className="cart-heading">
        <h1 className="hero-title-cart">Кошик</h1>
      </div>
      {cart.length === 0 ? (
        <div className="cart-empty">
          <p>Ваш кошик порожній.</p>
          <Link to="/shop" className="cart-btn"style={{ textDecoration: 'none' }}>Перейти до магазину</Link>
        </div>
      ) : (
        <div className="cart-items">
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} className="cart-item-img" />
              <div className="cart-item-info">
                <p className="product-name">{item.name}</p>
                <p className="product-price">₴{item.price.toLocaleString()} × {item.qty}</p>
              </div>
              <button className="drawer-remove" type="button" onClick={() => onRemoveFromCart(item.id)}>✕</button>
            </div>
          ))}
          <div className="cart-summary">
            <span>Разом:</span>
            <strong>₴{total.toLocaleString()}</strong>
          </div>
        </div>
      )}
    </section>
  );
}
