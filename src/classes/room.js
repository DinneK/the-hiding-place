class Room {
  constructor(room) {
    this.roomNumber = room.number;
    this.roomType = room.roomType;
    this.bidet = room.bidet;
    this.bedSize = room.bedSize;
    this.numBeds = room.numBeds;
    this.costPerNight = room.costPerNight;
  }

  filterRoomByType(rooms, roomType) {
    const filteredRoom = rooms.filter((room) => room.roomType === roomType);
    return filteredRoom;
  }
}

export default Room;
