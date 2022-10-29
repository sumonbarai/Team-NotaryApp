import axios from "axios";
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
    axios
      .post("http://demo2211087.mockable.io/mock", {})
      .then(function (response) {
        setCompanies(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
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
