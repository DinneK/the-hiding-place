class Room {
  constructor(room) {
    this.roomNumber = room.number;
    this.roomType = room.roomType;
    this.bidet = room.bidet;
    this.bedSize = room.bedSize;
    this.numBeds = room.numBeds;
    this.costPerNight = room.costPerNight;
  }

  filterRoomByType(bookings) {
    const filteredRoom = bookings.filter(
      (booking) => booking.roomType === this.roomType
    );
    filteredRoom.push(this.roomType);
    return filteredRoom;
  }
}

export default Room;
