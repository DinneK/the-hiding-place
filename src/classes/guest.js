class Guest {
  constructor(customer) {
    this.guestID = customer.id;
    this.guestName = customer.name;
  }

  hasBookedBefore(bookings) {
    const stayed = bookings.find((booking) => this.guestID === booking.userID);
    return !!stayed;
  }

  allBookings(bookings) {
    return bookings.filter((booking) => this.guestID === booking.userID);
  }

  showRoomsStayedIn(bookings, rooms) {
    const roomsDetails = this.allBookings(bookings).map((booking) => {
      const foundRoom = rooms.find(
        (room) => room.roomNumber === booking.roomNumber
      );
      const roomDetails = {
        bookingID: booking.bookingID,
        date: booking.dateBooked,
        roomNumber: foundRoom.roomNumber,
        roomType: foundRoom.roomType,
        bidet: foundRoom.bidet,
        bedSize: foundRoom.bedSize,
        numBeds: foundRoom.numBeds,
        costPerNight: foundRoom.costPerNight,
      };
      return roomDetails;
    });
    return roomsDetails;
  }

  showAllStaysTotal(bookings, rooms) {
    const allGuestBookings = this.allBookings(bookings);
    const staysTotal = allGuestBookings.reduce((acc, curr) => {
      const foundRoom = rooms.find(
        (room) => room.roomNumber === curr.roomNumber
      );
      return foundRoom.costPerNight + acc;
    }, 0);
    return `$${staysTotal.toFixed(2)}`;
  }
}

export default Guest;
