import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function BookModal({show,hostelName, handleClose,handleAdd}) {

  const [nameSurname, setNameSurname] = useState("");
  const [date, setDate] = useState("");
  const [people, setPeople] = useState("");


  const handleSubmit = (e) => {e.preventDefault();

    const newBooking = {
      id: new Date().getTime(),
      reservation: nameSurname,
      day: date,
      completed: false,
       hostel: hostelName,
    };
   handleAdd(newBooking);
    handleClose();
  };

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Booking For Hotel {hostelName} </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Name & Surname</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name & surname"
                required
                onChange={(e) => setNameSurname(e.target.value)}
                value={nameSurname}
              />
              <Form.Label className="mt-2">How many people ?</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter"
                required
                onChange={(e) => setPeople(e.target.value)}
                value={people}
              />
              <Form.Label className="mt-2">Day & Time</Form.Label>
              <Form.Control
                type="datetime-local"
                required
                onChange={(e) => setDate(e.target.value)}
                value={date}
              />
            </Form.Group>
            <div className="text-center mt-3">
              <Button
                className="me-2 btn-success"
                variant="secondary"
                type="submit"
              >
                Reserve
              </Button>
              <Button
                className="btn-danger"
                variant="primary"
                onClick={handleClose}
                type="button"
              >
                Close
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default BookModal