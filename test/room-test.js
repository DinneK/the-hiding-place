import { expect } from "chai";
import { mockData } from "./mockData";
import Room from "../src/classes/room";

describe("Room", () => {
  let room1;
  let room2;
  let room3;

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
});
