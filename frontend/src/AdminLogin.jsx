import { useState } from "react";

function AdminLogin({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "admin123") {
      onLogin();
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="admin-login">
      <div className="login-box">

        <div className="login-icon">🔐</div>

        <h2>Admin Login</h2>

        <p className="login-subtitle">
          Welcome back to TinyBlooms 🌸
        </p>

        <form onSubmit={handleLogin}>

          <div className="input-group">
            <label>Username</label>

            <input
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>

            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="admin-login-button">
            Login
          </button>

        </form>

        <p className="login-note">
          Admin access only
        </p>

      </div>
    </div>
  );
}

export default AdminLogin;