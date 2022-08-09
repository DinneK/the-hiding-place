import { expect, should } from "chai";
import { mockData } from "./mockData";
import Room from "../src/classes/room";
import Guest from "../src/classes/guest";
import Booking from "../src/classes/booking";

describe("Room", () => {
  let room1;
  let room2;
  let room3;
  let room4;

  beforeEach(() => {
    room1 = new Room(mockData.rooms[0]);
    room2 = new Room(mockData.rooms[2]);
    room3 = new Room(mockData.rooms[6]);
  });

  it("should be a function", () => {
    expect(Room).to.be.a("function");
  });

  it("should be an instance of Room", () => {
    expect(room1).to.be.an.instanceOf(Room);
    expect(room2).to.be.an.instanceOf(Room);
    expect(room3).to.be.an.instanceOf(Room);
  });

  it("should have a room number", () => {
    expect(room1.roomNumber).to.equal(1);
    expect(room2.roomNumber).to.equal(7);
    expect(room3.roomNumber).to.equal(24);
  });

  it("should have a room type", () => {
    expect(room1.roomType).to.equal("residential suite");
    expect(room2.roomType).to.equal("single room");
    expect(room3.roomType).to.equal("suite");
  });

  it("should have a bidet", () => {
    expect(room1.bidet).to.equal(true);
    expect(room2.bidet).to.equal(false);
    expect(room3.bidet).to.equal(false);
  });

  it("should have a bed size", () => {
    expect(room1.bedSize).to.equal("queen");
    expect(room2.bedSize).to.equal("queen");
    expect(room3.bedSize).to.equal("queen");
  });

  it("should have a certain number of beds", () => {
    expect(room1.numBeds).to.equal(1);
    expect(room2.numBeds).to.equal(2);
    expect(room3.numBeds).to.equal(1);
  });

  it("should have a cost per night", () => {
    expect(room1.costPerNight).to.equal(358.4);
    expect(room2.costPerNight).to.equal(231.46);
    expect(room3.costPerNight).to.equal(327.24);
  });

  it("should should be able to choose rooms by type", () => {
    const rooms = mockData.rooms.map((room) => new Room(room));

    expect(room1.filterRoomByType(rooms, "residential suite")).to.deep.equal([
      {
        bedSize: "queen",
        bidet: true,
        costPerNight: 358.4,
        numBeds: 1,
        roomNumber: 1,
        roomType: "residential suite",
      },
      {
        bedSize: "twin",
        bidet: false,
        costPerNight: 457.88,
        numBeds: 1,
        roomNumber: 14,
        roomType: "residential suite",
      },
    ]);
    //expect(room2.filterRoomByType(bookings)).to.deep.equal(["single room"]);
    //expect(room3.filterRoomByType(bookings)).to.deep.equal(["suite"]);
  });
});
