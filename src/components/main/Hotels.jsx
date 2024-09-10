import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { hotels } from "../../helper/data.js";
import Perk from "../addition/Perk.jsx"
import Roomsleft from "../addition/Roomsleft.jsx";
import Bestseller from "../addition/Bestseller.jsx";
import BookModal from "./BookModal.jsx";
import { useState } from "react";


const Hotels = ({handleAdd}) => {
  const [show, setShow] = useState(false);
  const [hostelName, setHostelName] = useState("");
    const handleClose = () => setShow(false);
  const handleShow = (name) => {
    setShow(true);
    setHostelName(name);
  };

  return (
  <Container>
    <div>
      <Row className="hotel">
        {hotels.map(({id, name, rating, reviewCount, pricePerNight, imageSrc, roomsRemaining, isBestSeller, hasParking, allowsPets, hasRoomService, hasFitnessCenter,hasFreeCancellation, includesBreakfast}) => (
                <Col className="hotels-list">
        <img src={imageSrc}  alt="hotel main entrance"
          className="hotel__image"
          onClick={() => handleShow(name)}
        />
        <div className="hotel__text">
          <div className="hotel__header">
            <h3 className="hotel__name">
              {name}
            </h3>
            <span className="hotel__rating">
              {rating}
            </span>
          </div>
          <div className="hotel__main">
            <div>
              <span>{reviewCount} reviews</span>
              <Perk
                perk="Free cancellation"
                hasPerk={hasFreeCancellation}
              />
              <Perk
                perk="Breakfast included"
                hasPerk={includesBreakfast}
              />
              <Perk
                perk="Onsite parking"
                hasPerk={hasParking}
              />
              <Perk
                perk="Pet friendly building"
                hasPerk={allowsPets}
              />
              <Perk
                perk="Order food to your room"
                hasPerk={hasRoomService}
              />
              <Perk
                perk="Fitness center access"
                hasPerk={hasFitnessCenter}
              />
              <Roomsleft
                roomsRemaining={roomsRemaining}
              />
            </div>
            <div className="hotel__main--right">
              <span>
                <span className="hotel__price">
                  ${pricePerNight}
                </span>{" "}
                per night
              </span>
              <span>Includes taxes and charges</span>
              <button className="hotel__see-rooms">
                See our last available rooms
              </button>
            </div>
          </div>
        </div>
        <Bestseller
          isBestseller={isBestSeller}
        />
            </Col>
        ))}
      </Row>
    </div>
    <BookModal
      show={show}
      handleClose={handleClose}
      handleAdd={handleAdd}
      hostelName={hostelName}
    />
  </Container>
)};

export default Hotels;
