class Booking {
  constructor(book) {
    this.bookingID = book.id;
    this.userID = book.userID;
    this.dateBooked = book.date;
    this.roomNumber = book.roomNumber;
  }

  checkUserID(guests) {
    guests.find((guest) => guest.guestID === this.userID);
    return this.userID;
  }

  returnRoomDetails(rooms) {
    const roomDetails = rooms.map(
      (room) => room.roomNumber === this.roomNumber
    );
    return roomDetails;
  }

  filterRoomsByDate(bookings, date) {
    console.log({ bookings });
    console.log({ date });
    const availRoomsByDate = [];
    bookings.array.forEach((booking) => {
      if (booking.dateBooked.includes(date)) {
        availRoomsByDate.push(returnRoomDetails(rooms));
      }
    });
    console.log(availRoomsByDate);
    //if bookings.dateBooked !== date
    //then return available rooms
    //if bookings.dateBooked is === date
    // return sorry all rooms are booked on this date
  }
}

// filterByDateAndOrRoomType(date, roomType) {
//   const bookingTest = this.bookingRoomDetails.some(booking => booking.date === date && booking.roomType === roomType)
//   if(bookingTest) {
//       return this.filteredBookings = this.bookingRoomDetails.filter(room =>
//           room.date === date && room.roomType === roomType
//       )
//   }else {
//       return false
//   }
// }

export default Booking;
