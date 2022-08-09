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
    const roomDetails = rooms.filter(
      (room) => room.roomNumber === this.roomNumber
    );
    return roomDetails;
  }

  filterRoomsByDate(bookings, rooms, date) {
    const availableRoomsByDate = bookings.filter(
      (booking) => booking.dateBooked === date
    );
    let availableRooms = this.returnRoomDetails(availableRoomsByDate);
    let availRooms = rooms.filter((room) => {
      return !availableRooms.some((bookedRoom) => {
        return room.roomNumber === bookedRoom.roomNumber;
      });
    });
    return availRooms;
  }
}

export default Booking;
