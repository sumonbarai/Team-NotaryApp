import React from "react";

const Order = ({ companies }) => {
  const { name, email, status } = companies;

  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{status}</td>
    </tr>
  );
};

export default Order;
