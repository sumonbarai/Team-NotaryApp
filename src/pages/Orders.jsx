import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import OrderTable from "../components/Orders/Orders";

const Orders = () => {
  const [companies, setCompanies] = useState(null);
  let companiesInformation;
  if (companies) {
    companiesInformation = companies.companies;
  }
  useEffect(() => {
    fetch("http://demo2211087.mockable.io/mock", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    })
      .then((response) => response.json())
      .then((data) => setCompanies(data));
  }, []);

  return (
    <section>
      <div className="section-title d-flex justify-content-between">
        <h2 className="fs-1">Orders</h2>
        <button type="button" className="btn btn-primary ">
          New Orders
        </button>
      </div>
      <span>
        {companiesInformation ? companiesInformation.length : "No"} orders
      </span>
      <OrderTable companiesInformation={companiesInformation} />
    </section>
  );
};

export default Orders;
