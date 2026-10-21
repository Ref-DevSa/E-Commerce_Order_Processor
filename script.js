
const orders = [
  {
    orderId: "ORD-0001",
    customerName: "  nALEdi  mOKOENA ",
    email: "NALEDI.MOKOENA@example.com ",
    product: "Wireless Headphones",
    category: "Electronics",
    price: 1299.99,
    orderDate: "2026-10-18"
  },
  {
    orderId: "ORD-0002",
    customerName: "Sipho Dlamini",
    email: "sipho.dlamini@example.com",
    product: "Coffee Maker",
    category: "Home & Kitchen",
    price: 899.50,
    orderDate: "2026-10-15"
  }
];


const $ = (id) => document.getElementById(id);

function renderOrders() {
  $("orders-body").innerHTML = orders.map((order) => {
    return `
      <tr>
        <td class="border p-3">${order.orderId}</td>
        <td class="border p-3">${order.customerName}</td>
        <td class="border p-3">${order.email}</td>
        <td class="border p-3">${order.product}</td>
        <td class="border p-3">${order.category}</td>
        <td class="border p-3">R ${order.price.toFixed(2)}</td>
        <td class="border p-3">${order.orderDate}</td>
      </tr>
    `;
  }).join("");
}

renderOrders();
