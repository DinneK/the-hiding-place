import { expect } from "chai";
import Guest from "..src/classes/guest";

describe("Guest", () => {
  let newGuests;

  beforeEach(() => {
    newGuests = {
      customers: [
        {
          id: 1,
          name: "Leatha Ullrich",
        },
        {
          id: 2,
          name: "Rocio Schuster",
        },
        {
          id: 3,
          name: "Kelvin Schiller",
        },
        {
          id: 4,
          name: "Kennedi Emard",
        },
        {
          id: 5,
          name: "Rhiannon Little",
        },
        {
          id: 6,
          name: "Fleta Schuppe",
        },
      ],
    };
  });
});
