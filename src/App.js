import React, { useEffect, useState } from "react";

function App() {
  const [stats, setStats] = useState({ total_orders: 0, total_amount: 0 });

  useEffect(() => {
    fetch("http://127.0.0.1:5000/stats")
      .then((res) => res.json())
      .then((data) => setStats(data))
      .catch((err) => console.error("Lỗi khi gọi API:", err));
  }, []);

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1>📊 Thống kê đơn hàng</h1>
      <p>Tổng số đơn hàng: {stats.total_orders}</p>
      <p>Tổng doanh thu: {stats.total_amount.toLocaleString()}đ</p>
    </div>
  );
}

export default App;
