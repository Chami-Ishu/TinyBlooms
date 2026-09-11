# 🌸 TinyBlooms

### Full-Stack Flower Bouquet E-Commerce Website

TinyBlooms is a full-stack flower bouquet e-commerce web application designed to provide customers with a simple and user-friendly way to browse handmade flower bouquets, manage their cart, place orders, and track their orders.

The project includes a React-based frontend and a Spring Boot backend connected to a MySQL database.

---

## ✨ Features

### 👩‍💻 Customer Side

- 🌸 Browse available flower bouquets
- 🛍️ Add bouquets to the shopping cart
- ➕ Increase or decrease product quantities
- 💰 Automatically calculate cart totals
- 📦 Place orders through the checkout process
- 🆔 Receive a unique Order ID after placing an order
- 🔎 Track order details using the Order ID
- 📱 Responsive and user-friendly interface
- 💌 Contact information and WhatsApp integration

### 🔐 Admin Side

- 🔑 Secure admin login
- 📊 Admin dashboard with order summary
- 📦 View all customer orders
- 👀 View order details
- 🔄 Update order status
- 📈 View total orders, pending orders, and total sales

---

## 🛠️ Tech Stack

### Frontend
- React.js
- JavaScript
- HTML5
- CSS3
- Vite

### Backend
- Java
- Spring Boot
- Spring Data JPA
- REST API
- Maven

### Database
- MySQL

### Tools
- Git
- GitHub
- VS Code
- IntelliJ IDEA

---

## 📁 Project Structure

```text
TinyBlooms/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── assets/
│   │   ├── AdminDashboard.jsx
│   │   ├── AdminLogin.jsx
│   │   ├── AdminOrders.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
└── tinyblooms-backend/
    ├── src/
    │   ├── main/
    │   │   ├── java/
    │   │   └── resources/
    │   └── test/
    ├── pom.xml
    ├── mvnw
    └── mvnw.cmd


🔄 Application Flow

Customer
   │
   ▼
Browse Bouquets
   │
   ▼
Add to Cart
   │
   ▼
Checkout
   │
   ▼
Place Order
   │
   ▼
Receive Order ID
   │
   ▼
Track Order


Admin Flow

Admin Login
    │
    ▼
Admin Dashboard
    │
    ├── View Summary
    │
    ├── View Orders
    │
    └── Update Order Status


## 🌐 REST API

The Spring Boot backend provides REST API endpoints for handling customer orders and admin order management.

Example:
POST   /api/orders
GET    /api/orders
GET    /api/orders/summary
PUT    /api/orders/{id}/status

## 🎯 Project Objectives

The main objectives of TinyBlooms are:

To develop a complete full-stack e-commerce application
To practice React frontend development
To implement backend services using Spring Boot
To work with REST APIs
To integrate a MySQL database
To implement CRUD operations
To understand frontend-backend communication
To implement customer order management
To develop an admin management system

## 📌 Future Improvements

Possible future enhancements include:

💳 Online payment integration
👤 Customer account and authentication system
📧 Order confirmation emails
🌸 More bouquet categories and products
📊 Advanced admin analytics
☁️ Deployment to a cloud platform

## 👩‍💻 Developed By

Chamishka Ishani

BSc (Hons) in Computer Science
NSBM Green University

## 🌷 Project

TinyBlooms by Chami

Handmade flowers, made with love. 💗
