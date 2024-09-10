import React from "react";

const Bestseller = (props) => {
  if (props.isBestseller) {
    return <span className="hotel__best-seller-flag">Bestseller</span>;
  } else {
    return null;
  }
};

export default Bestseller;
