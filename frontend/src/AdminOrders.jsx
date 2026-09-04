import { useEffect, useState } from "react";

function AdminOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/orders")
      .then((response) => response.json())
      .then((data) => setOrders(data))
      .catch((error) =>
        console.error("Error fetching orders:", error)
      );
  }, []);

  const updateStatus = async (orderId, newStatus) => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/orders/${orderId}/status?status=${newStatus}`,
        {
          method: "PUT"
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update status");
      }

      setOrders(
        orders.map((order) =>
          order.id === orderId
            ? { ...order, status: newStatus }
            : order
        )
      );
    } catch (error) {
      console.error(error);
      alert("Failed to update order status.");
    }
  };

  const formatDate = (date) => {
    if (!date) return "-";

    return new Date(date).toLocaleString("en-GB", {
      dateStyle: "medium",
      timeStyle: "short"
    });
  };

  return (
    <section className="admin-orders">

      <h2>Customer Orders 📦</h2>

      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <div className="orders-table-container">

          <table className="orders-table">

            <thead>
              <tr>
                <th>ID</th>
                <th>Customer</th>
                <th>Phone</th>
                <th>Address</th>
                <th>Total</th>
                <th>Order Date</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>

              {orders.map((order) => (

                <tr key={order.id}>

                  <td>#{order.id}</td>

                  <td>{order.customerName}</td>

                  <td>{order.phone}</td>

                  <td>{order.address}</td>

                  <td className="order-price">
                    Rs. {Number(order.totalPrice).toLocaleString()}
                  </td>

                  <td>
                    {formatDate(order.orderDate)}
                  </td>

                  <td>

                    <select
                      className={`status-select ${order.status
                        ?.toLowerCase()
                        .replace(" ", "-")}`}
                      value={order.status}
                      onChange={(e) =>
                        updateStatus(
                          order.id,
                          e.target.value
                        )
                      }
                    >
                      <option value="Pending">
                        Pending
                      </option>

                      <option value="Confirmed">
                        Confirmed
                      </option>

                      <option value="Delivered">
                        Delivered
                      </option>
                    </select>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>
      )}

    </section>
  );
}

export default AdminOrders;