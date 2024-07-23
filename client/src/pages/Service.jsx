import React from "react";
import { useAuth } from "../store/Auth";
const Service = () => {
  const { services } = useAuth();
  return (
    <>
      <div className="service-container">
        {services.map((curr, index) => {
          const { price, description, provider, service } = curr;
          return (
            <div className="service-card" key={index}>
              <img
                src="https://png.pngtree.com/png-vector/20231018/ourmid/pngtree-job-desk-work-job-png-image_10206841.png"
                alt="not found"
              />
              <div className="service-price">
                <p>{provider}</p>
                <p>{price}</p>
              </div>
              <h1>{service}</h1>
              <p>{description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Service;
