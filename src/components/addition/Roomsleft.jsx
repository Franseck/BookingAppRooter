import React from "react";

const Roomsleft = (props) => {
  if (props.roomsRemaining < 10) {
    return (
      <span className="hotel__rooms-remaining">
        Only {props.roomsRemaining} rooms left!
      </span>
    );
  } else {
    return null;
  }
};

export default Roomsleft;