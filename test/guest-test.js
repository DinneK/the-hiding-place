import { expect } from "chai";
import { mockData } from "./mockData";
import Guest from "../src/classes/guest";
import Booking from "../src/classes/booking";
import Room from "../src/classes/room";

describe("Guest", () => {
  let guest1;
  let guest2;
  let guest3;

  beforeEach(() => {
    guest1 = new Guest(mockData.customers[0]);
    guest2 = new Guest(mockData.customers[1]);
    guest3 = new Guest(mockData.customers[5]);
  });

  it("should be a function", () => {
    expect(Guest).to.be.a("function");
  });

  it("should be an instance of Guest", () => {
    expect(guest1).to.be.an.instanceOf(Guest);
    expect(guest2).to.be.an.instanceOf(Guest);
    expect(guest3).to.be.an.instanceOf(Guest);
  });

  it("guest should have an ID", () => {
    expect(guest1.guestID).to.equal(1);
    expect(guest2.guestID).to.equal(2);
    expect(guest3.guestID).to.equal(20);
  });

  it("guest should have a name", () => {
    expect(guest1.guestName).to.equal("Leatha Ullrich");
    expect(guest2.guestName).to.equal("Rocio Schuster");
    expect(guest3.guestName).to.equal("Keon Kirlin");
  });

  it("should check if guest has booked before", () => {
    const bookings = mockData.bookings.map((booking) => new Booking(booking));

    expect(guest1.hasBookedBefore(bookings)).to.equal(true);
    expect(guest2.hasBookedBefore(bookings)).to.equal(false);
    expect(guest3.hasBookedBefore(bookings)).to.equal(true);
  });

  it("should show room number and details of rooms stayed in", () => {
    const bookings = mockData.bookings.map((booking) => new Booking(booking));

    const rooms = mockData.rooms.map((room) => new Room(room));

    expect(guest1.showRoomsStayedIn(bookings, rooms)).to.deep.equal([
      {
        bookingID: "5fwrgu4i7k55hl6t8",
        date: "2022/02/05",
        roomNumber: 12,
        roomType: "single room",
        bidet: false,
        bedSize: "twin",
        numBeds: 2,
        costPerNight: 172.09,
      },
    ]);

    expect(guest2.showRoomsStayedIn(bookings, rooms)).to.deep.equal([]);
    expect(guest3.showRoomsStayedIn(bookings, rooms)).to.deep.equal([
      {
        bookingID: "5fwrgu4i7k55hl6t7",
        date: "2022/02/16",
        roomNumber: 7,
        roomType: "single room",
        bidet: false,
        bedSize: "queen",
        numBeds: 2,
        costPerNight: 231.46,
      },
      {
        bookingID: "5fwrgu4i7k55hl6ui",
        date: "2022/02/07",
        roomNumber: 24,
        roomType: "suite",
        bidet: false,
        bedSize: "queen",
        numBeds: 1,
        costPerNight: 327.24,
      },
    ]);
  });

  it("should check guest's total spent for all stays", () => {
    const bookings = mockData.bookings.map((booking) => new Booking(booking));

    const rooms = mockData.rooms.map((room) => new Room(room));

    expect(guest1.showAllStaysTotal(bookings, rooms)).to.equal("$172.09");
    expect(guest2.showAllStaysTotal(bookings, rooms)).to.equal("$0.00");
    expect(guest3.showAllStaysTotal(bookings, rooms)).to.equal("$558.70");
  });
});
