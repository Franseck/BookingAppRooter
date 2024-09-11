import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/Row";
import { TiDelete } from "react-icons/ti";
import img from "../../assets/book.jpeg"
import "../../components/main/booking.scss"


function BookingList ({ bookings, handleDelete, handleDoubleClick }) {
  return (
    <div>
      <Container className="booking-list">
      <h3 className="display-6 mb-2" style={{ color: "rgb(166, 18, 189)" }}>
        Booking List
      </h3>
        {bookings?.length === 0 && (
          <img width="100%" src={img} alt="Finish" />
        )}
        {bookings.map(
          ({ id, reservation, day, completed, hostel, people }) => {
            return (
              <div key={id} className="booking">
                <Row
                  className="align-items-center"
                  onDoubleClick={() => handleDoubleClick(id)}
                >
                  <Col xs={12} md={3}>
                    <p className="fw-bold mb-1">Reservation:</p>
                    <p className="text-muted mb-0">{reservation}</p>
                  </Col>
                  <Col xs={12} md={3}>
                    <p className="fw-bold mb-1">Hostel:</p>
                    <p className="text-muted mb-0">{hostel}</p>
                  </Col>
                  <Col xs={6} md={3}>
                    <p className="fw-bold mb-1">Number of People:</p>
                    <p className="text-muted mb-0">{people}</p>
                  </Col>
                  <Col xs={12} md={2}>
                    <p className="fw-bold mb-1">Date:</p>
                    <p className="text-muted mb-0">
                      {new Date(day).toLocaleDateString("tr")}
                    </p>
                    <p className="fw-bold mb-1">Time:</p>
                    <p className="text-muted mb-0">
                      {new Date(day).toLocaleTimeString("tr")}
                    </p>
                  </Col>
                  <Col xs={12} md={1} className="text-center">
                    <TiDelete
                      type="button"
                      className="text-danger fs-1"
                      style={{ cursor: "pointer" }}
                      onClick={() => handleDelete(id)}
                    />
                  </Col>
                  {completed && (
                    <div className="completedDiv">
                      Completed on {new Date().toLocaleDateString()}
                    </div>
                  )}
                </Row>
                <hr />
              </div>
            );
          }
        )}
      </Container>
      

    </div>
  );
}
export default BookingList
