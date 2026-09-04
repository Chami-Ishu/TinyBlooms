import { useState } from "react";
import BouquetCard from "./components/BouquetCard";
import AdminLogin from "./AdminLogin";
import AdminDashboard from "./AdminDashboard";
import "./App.css";
import roseImage from "./assets/rose-bouquet.jpg";
import tulipImage from "./assets/tulip-bouquet.jpg";
import pastelImage from "./assets/pastel-bouquet.jpg";
import logoImage from "./assets/logo.png";
import whatsappQR from "./assets/whatsapp-qr.jpeg";
import heroBanner from "./assets/tinyblooms-hero-banner.png";

function App() {
  const [cart, setCart] = useState([]);
  const [showCheckout, setShowCheckout] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const [showAdmin, setShowAdmin] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [searchOrderId, setSearchOrderId] = useState("");
  const [searchedOrder, setSearchedOrder] = useState(null);
  const [orderSearchError, setOrderSearchError] = useState("");

  const scrollToSection = (sectionId) => {
  document.getElementById(sectionId)?.scrollIntoView({
    behavior: "smooth",
  });
};

  // Calculate total price
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const totalItems = cart.reduce(
  (total, item) => total + item.quantity,
  0
);

  // Increase quantity
  const increaseQuantity = (index) => {
    setCart(
      cart.map((item, i) =>
        i === index
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // Decrease quantity
  const decreaseQuantity = (index) => {
    const item = cart[index];

    if (item.quantity === 1) {
      removeFromCart(index);
    } else {
      setCart(
        cart.map((item, i) =>
          i === index
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    }
  };

  // Remove item from cart
  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  if (showAdmin) {
  if (isAdmin) {
    return (
      <AdminDashboard
        onLogout={() => {
          setIsAdmin(false);
          setShowAdmin(false);
        }}
      />
    );
  }

  return (
    <AdminLogin
      onLogin={() => setIsAdmin(true)}
    />
  );
}

  return (
    
    <div className="container">

      {/* Navigation */}
      <nav className="navbar">
       <div className="logo">
       <img src={logoImage} alt="TinyBlooms by Chami" />
       </div>

        <ul className="nav-links">
          <li onClick={() => scrollToSection("home")}>Home</li>
          <li onClick={() => scrollToSection("bouquets")}>Bouquets</li>
          <li onClick={() => scrollToSection("about")}>About</li>
          <li onClick={() => scrollToSection("contact")}>Contact</li>
          <li onClick={() => setShowAdmin(true)}> 🔐 Admin</li>
          <li>🛒 Cart ({totalItems})</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
  <img
    src={heroBanner}
    alt="TinyBlooms handmade flower bouquets"
    className="hero-banner"
  />

  
</section>
      
      {/* Bouquets Section */}
      <section className="bouquets" id="bouquets">
        <h2>Our Beautiful Bouquets 🌷</h2>

        <div className="bouquet-container">

          {/* Rose Bouquet */}
          <BouquetCard
            name="Classic Rose Bouquet"
            price="2500"
            emoji="🌹"
            image={roseImage}
            onAddToCart={() => {
              const existingItem = cart.find(
                (item) => item.name === "Classic Rose Bouquet"
              );

              if (existingItem) {
                setCart(
                  cart.map((item) =>
                    item.name === "Classic Rose Bouquet"
                      ? {
                          ...item,
                          quantity: item.quantity + 1
                        }
                      : item
                  )
                );
              } else {
                setCart([
                  ...cart,
                  {
                    name: "Classic Rose Bouquet",
                    price: 2500,
                    quantity: 1
                  }
                ]);
              }
            }}
          />

          {/* Tulip Bouquet */}
          <BouquetCard
            name="Spring Tulip Bouquet"
            price="3000"
            emoji="🌷"
            image={tulipImage}
            onAddToCart={() => {
              const existingItem = cart.find(
                (item) => item.name === "Spring Tulip Bouquet"
              );

              if (existingItem) {
                setCart(
                  cart.map((item) =>
                    item.name === "Spring Tulip Bouquet"
                      ? {
                          ...item,
                          quantity: item.quantity + 1
                        }
                      : item
                  )
                );
              } else {
                setCart([
                  ...cart,
                  {
                    name: "Spring Tulip Bouquet",
                    price: 3000,
                    quantity: 1
                  }
                ]);
              }
            }}
          />

          {/* Pastel Bouquet */}
          <BouquetCard
            name="Pastel Flower Bouquet"
            price="2800"
            emoji="🌸"
            image={pastelImage}
            onAddToCart={() => {
              const existingItem = cart.find(
                (item) => item.name === "Pastel Flower Bouquet"
              );

              if (existingItem) {
                setCart(
                  cart.map((item) =>
                    item.name === "Pastel Flower Bouquet"
                      ? {
                          ...item,
                          quantity: item.quantity + 1
                        }
                      : item
                  )
                );
              } else {
                setCart([
                  ...cart,
                  {
                    name: "Pastel Flower Bouquet",
                    price: 2800,
                    quantity: 1
                  }
                ]);
              }
            }}
          />

        </div>
      </section>

      <section className="about-section" id="about">
  <h2>About TinyBlooms 🌸</h2>

  <p>
    At TinyBlooms by Chami, every bouquet is handmade with love, care, and attention to detail. 💐

We create beautiful handmade flowers that are perfect for birthdays, anniversaries, special occasions, or simply to make someone smile. Each bouquet can be customized according to your preferences, including the flower style, colours, arrangement, and overall design.

Whether you have a specific idea in mind or need help creating something special, you can personalize your bouquet to match your taste and occasion. 💗

<div className="about-features">

  <div className="about-feature">
    <h4>✨ <b>Handmade with Care</b></h4>
    <p>Every bouquet is carefully handmade with love.</p>
  </div>

  <div className="about-feature">
    <h4>🌸 <b>Customizable Designs</b></h4>
    <p>Create a bouquet that matches your style.</p>
  </div>

  <div className="about-feature">
    <h4>🎁 <b>Perfect for Every Occasion</b></h4>
    <p>Beautiful gifts for every special moment.</p>
  </div>

  <div className="about-feature">
    <h4>💌 <b>Made Especially for You</b></h4>
    <p>Personalized with your ideas and preferences.</p>
  </div>

</div>
  </p>
</section>


<section className="contact-section" id="contact">

  <h2>Contact Us 💌</h2>

  <p className="contact-intro">
    Have a question or want to order a custom bouquet?
    We'd love to hear from you! 🌸
  </p>

  <div className="contact-content">

    {/* Left - Contact Details */}
    <div className="contact-details">

      <div className="contact-item">
        <div className="contact-icon">📱</div>
        <div>
          <h3>WhatsApp</h3>
          <p>0762002587</p>
        </div>
      </div>

      <div className="contact-item">
        <div className="contact-icon">📧</div>
        <div>
          <h3>Email</h3>
          <p>tinybloomsbychami@gmail.com</p>
        </div>
      </div>

      <div className="contact-item">
        <div className="contact-icon">📍</div>
        <div>
          <h3>Delivery</h3>
          <p>Islandwide delivery available</p>
        </div>
      </div>

    </div>

    {/* Right - WhatsApp QR */}
    <div className="qr-card">

      <h3>Chat With Us 💬</h3>

      <p>Scan the QR code to contact us on WhatsApp.</p>

      <img
        src={whatsappQR}
        alt="TinyBlooms WhatsApp QR Code"
      />

      <span>Scan to chat 🌸</span>

    </div>

  </div>

</section>


      {/* Cart Section */}
      <section className="cart-section" id="cart">

        <h2>Your Cart 🛒</h2>

        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <div className="cart-items">

              {cart.map((item, index) => (
                <div className="cart-item" key={index}>

                  <div>
                    <span>
                      {item.name} - Rs. {item.price}
                    </span>

                    <div className="quantity-controls">

                      <button
                        onClick={() => decreaseQuantity(index)}
                      >
                        −
                      </button>

                      <span>{item.quantity}</span>

                      <button
                        onClick={() => increaseQuantity(index)}
                      >
                        +
                      </button>

                    </div>
                  </div>

                  <button
                    onClick={() => removeFromCart(index)}
                  >
                    Remove
                  </button>

                </div>
              ))}

            </div>

            {/* Total */}
            <div className="cart-total">
              <h3>Total: Rs. {totalPrice}</h3>

              <button className="checkout-button" onClick={() => setShowCheckout(true)}>
              Checkout
              </button>
            </div>
          </>
        )}

      </section>

      {showCheckout && (
  <section className="checkout-section">
    <h2>Checkout 🛒</h2>
      
      <form
  className="checkout-form"
  onSubmit={async (e) => {
  e.preventDefault();

  const order = {
    customerName: customerName,
    phone: phone,
    address: address,
    totalPrice: totalPrice
  };

  try {
    const response = await fetch("http://localhost:8080/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(order)
    });

    if (!response.ok) {
      throw new Error("Failed to place order");
    }

    const savedOrder = await response.json();

    setOrderId(savedOrder.id);
    setOrderPlaced(true);
    setCart([]);
    setCustomerName("");
    setPhone("");
    setAddress("");

  } catch (error) {
    console.error(error);
    alert("Something went wrong. Please try again.");
  }
}}
  
      >

      <label>
        Your Name
      </label>

      <input
        type="text"
        placeholder="Enter your name"
        required
        value={customerName}
        onChange={(e) => setCustomerName(e.target.value)}
      />

      <label>
        Phone Number
      </label>

      <input
        type="tel"
        placeholder="Enter your phone number"
        required
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      

      <label>
        Delivery Address
      </label>

      <textarea
        placeholder="Enter your delivery address"
        rows="4"
        required
        value={address}
        onChange={(e) => setAddress(e.target.value)}    
      ></textarea>

      <button type="submit" className="place-order-button">
        Place Order
      </button>

    </form>

    {orderPlaced && (
  <div className="order-success">
    <h3>Order Placed Successfully! 🎉</h3>

    <p>
      Your Order ID is: <strong>#{orderId}</strong>
    </p>

    <p>
      Please keep this Order ID for future reference.
    </p>

    <p>
      Thank you for shopping with TinyBlooms 🌸
    </p>
  </div>
)}


  </section>

)}

<section className="order-tracking">

  <h2>Track Your Order 📦</h2>

  <p>Enter your Order ID to check your order status.</p>

  <div className="tracking-form">

    <input
      type="number"
      placeholder="Enter Order ID"
      value={searchOrderId}
      onChange={(e) => setSearchOrderId(e.target.value)}
    />

    <button
      onClick={async () => {

        setOrderSearchError("");
        setSearchedOrder(null);

        try {
          const response = await fetch(
            `http://localhost:8080/api/orders/${searchOrderId}`
          );

          if (!response.ok) {
            throw new Error("Order not found");
          }

          const data = await response.json();
          setSearchedOrder(data);

        } catch (error) {
          setOrderSearchError("Order not found. Please check your Order ID.");
        }
      }}
    >
      Track Order
    </button>

  </div>

  {orderSearchError && (
    <p className="order-error">
      {orderSearchError}
    </p>
  )}

  {searchedOrder && (
    <div className="order-status-card">

      <h3>Order #{searchedOrder.id}</h3>

      <p>
        Customer: {searchedOrder.customerName}
      </p>

      <p>
        Total: Rs.{" "}
        {Number(searchedOrder.totalPrice).toLocaleString()}
      </p>

      <p>
        Status:
        <strong> {searchedOrder.status}</strong>
      </p>

    </div>
  )}

</section>


      <footer className="footer">
  <div className="footer-content">
    <h3>TinyBlooms 🌸</h3>

    <p>Handmade flowers, made with love.</p>


    <div className="footer-links">
      <span onClick={() => scrollToSection("home")}>Home</span>
      <span onClick={() => scrollToSection("bouquets")}>Bouquets</span>
      <span onClick={() => scrollToSection("about")}>About</span>
      <span onClick={() => scrollToSection("contact")}>Contact</span>
    </div>

    <p className="copyright">
      © 2026 TinyBlooms. All rights reserved.
    </p>
  </div>
</footer>

    </div>
  );
}

export default App;