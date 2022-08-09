import { expect } from "chai";
import { mockData } from "./mockData";
import Booking from "../src/classes/booking";
import Guest from "../src/classes/guest";
import Room from "../src/classes/room";

describe("Booking", () => {
  let booking1;
  let booking2;
  let booking3;

  beforeEach(() => {
    booking1 = new Booking(mockData.bookings[3]);
    booking2 = new Booking(mockData.bookings[4]);
    booking3 = new Booking(mockData.bookings[5]);
  });

  it("should be a function", () => {
    expect(Booking).to.be.a("function");
  });

  it("should be an instance of Guest", () => {
    expect(booking1).to.be.an.instanceOf(Booking);
    expect(booking2).to.be.an.instanceOf(Booking);
    expect(booking3).to.be.an.instanceOf(Booking);
  });

  it("should have a booking ID", () => {
    expect(booking1.bookingID).to.equal("5fwrgu4i7k55hl6t7");
    expect(booking2.bookingID).to.equal("5fwrgu4i7k55hl6t8");
    expect(booking3.bookingID).to.equal("5fwrgu4i7k55hl6ui");
  });

  it("should have a user ID that is equal to the guest ID", () => {
    const guests = mockData.customers.map((customer) => new Guest(customer));

    expect(booking1.checkUserID(guests)).to.equal(20);
    expect(booking2.checkUserID(guests)).to.equal(1);
    expect(booking3.checkUserID(guests)).to.equal(20);
  });

  it("should have a date room was booked", () => {
    expect(booking1.dateBooked).to.equal("2022/02/16");
    expect(booking2.dateBooked).to.equal("2022/02/05");
    expect(booking3.dateBooked).to.equal("2022/02/07");
  });

  it("should have a room number that corresponds to a specific room ", () => {
    const rooms = mockData.rooms.map((room) => new Room(room));

    expect(booking1.returnRoomDetails(rooms)).to.deep.equal([
      {
        roomNumber: 7,
        roomType: "single room",
        bidet: false,
        bedSize: "queen",
        numBeds: 2,
        costPerNight: 231.46,
      },
    ]);
    expect(booking2.returnRoomDetails(rooms)).to.deep.equal([
      {
        roomNumber: 12,
        roomType: "single room",
        bidet: false,
        bedSize: "twin",
        numBeds: 2,
        costPerNight: 172.09,
      },
    ]);
    expect(booking3.returnRoomDetails(rooms)).to.deep.equal([
      {
        roomNumber: 24,
        roomType: "suite",
        bidet: false,
        bedSize: "queen",
        numBeds: 1,
        costPerNight: 327.24,
      },
    ]);
  });

  it("should be able to filter available room(s) by date", () => {
    const rooms = mockData.rooms.map((room) => new Room(room));
    const bookings = mockData.bookings.map((booking) => new Booking(booking));

    expect(booking1.filterRoomsByDate(bookings, "2022/02/17")).to.equal(20);
    //expect(booking2.filterRoomsByDate(rooms)).to.equal(1);
    //expect(booking3.filterRoomsByDate(bookings, 2022/01/22)).to.equal(20);
  });
});
