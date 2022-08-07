import { expect } from "chai";
import { mockData } from "./mockData";
import Booking from "../src/classes/booking";
import Guest from "../src/classes/guest";

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
});
