class Booking {
  constructor(book) {
    this.bookingID = book.id;
    this.userID = book.userID;
    this.dateBooked = book.date;
    this.roomNumber = book.roomNumber;
  }
}

export default Booking;
