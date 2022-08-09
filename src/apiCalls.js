const getCustomersData = fetch("http://localhost:3001/api/v1/customers")
  .then((response) => response.json())
  .catch((error) => console.log(error));

const getRoomsData = fetch("http://localhost:3001/api/v1/rooms")
  .then((response) => response.json())
  .catch((error) => console.log(error));

const getBookingsData = fetch("http://localhost:3001/api/v1/bookings")
  .then((response) => response.json())
  .catch((error) => console.log(error));

export { getCustomersData, getRoomsData, getBookingsData };

console.log("I will be a fetch request!");
