import React from "react";
import { Table } from "react-bootstrap";
import Order from "./Order";

const Orders = ({ companiesInformation }) => {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {companiesInformation?.length &&
            companiesInformation.map((companies, index) => (
              <Order key={index} companies={companies}></Order>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Orders;
