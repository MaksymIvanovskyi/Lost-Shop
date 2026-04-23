export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-logo">LOST</div>
        <div className="footer-cols">
          <div className="footer-col">
            <h4>OUR STORE</h4>
            <ul>
              <li><a href="#shop">Shop</a></li>
              <li><a href="#care">Customer Care</a></li>
              <li><a href="#stores">Stores</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>NEED ASSISTANCE?</h4>
            <p>0988083333</p>
            <p>lost@gmail.com</p>
          </div>
          <div className="footer-col">
            <h4>TERMS & CONDITIONS</h4>
            <ul>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Shipping Policy</a></li>
              <li><a href="#">Refund Policy</a></li>
              <li><a href="#">Accessibility Statement</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>STAY CONNECTED</h4>
            <p className="footer-friend">BE OUR FRIEND</p>
            <div className="social-icons">
              <a href="#" className="social-icon">Instagram</a>
              <a href="#" className="social-icon">Facebook</a>
              <a href="#" className="social-icon">Twitter</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 LOST. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
