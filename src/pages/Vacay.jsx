import React, { useEffect, useState } from 'react'
import BookingList from "../components/main/BookingList";
import Hotels from "../components/main/Hotels";
import { bookingData, hotels } from "../helper/data";
import Footer from "../components/Footer"


const Vacay = () =>{
    const [bookings, setBookings] = useState(bookingData);
  
    useEffect(() => {
      const savedBookings = JSON.parse(localStorage.getItem("bookings"));
      if (savedBookings) {
        setBookings(savedBookings);
      }
    }, []);
  
    useEffect(() => {
      localStorage.setItem("bookings", JSON.stringify(bookings));
    }, [bookings]);
  
    const handleAdd = (newBooking) => {
      setBookings([...bookings, newBooking]);
    };
    const handleDelete = (id) => {
      const filteredBooking= bookings.filter((item) => item.id !== id);
      setBookings(filteredBooking);
    };
    const handleDoubleClick = (id) => {
      const filteredCompleted = bookings.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      );
      setBookings(filteredCompleted);
    };
  
    return (
        <div className="App">
      
        <Hotels
         hotels={hotels}
          handleAdd={handleAdd}
        />
             <BookingList
        bookings={bookings}
        handleDelete={handleDelete}
        handleDoubleClick={handleDoubleClick}
      />
        <Footer />
      </div>
    );
  }
  
  export default Vacay;