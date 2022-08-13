// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import "./css/styles.css";

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import "./images/turing-logo.png";
import "./images/cover-forest.png";
import "./images/hotel-room1.png";
import "./images/moss-bridge.png";
import { getCustomersData, getRoomsData, getBookingsData } from "./apiCalls";
import Guest from "../src/classes/guest";
import Booking from "../src/classes/booking";
import Room from "../src/classes/room";

let customers;
let singleGuest;
let rooms;
let bookings;

//FETCH CALLS
function initializeCustomerData() {
  getCustomersData.then((data) => {
    customers = data.customers.map((customer) => new Guest(customer));
    return customers;
  });
}

function initializeRoomData() {
  getRoomsData.then((data) => {
    rooms = data.rooms.map((room) => new Room(room));
    return rooms;
  });
}

function initializeBookingData() {
  getBookingsData.then((data) => {
    bookings = data.bookings.map((booking) => new Booking(booking));
    return bookings;
  });
}

//SELECTORS HOME PAGE
const dashboardBtn = document.querySelector(".enter-dash");
const gateImage = document.querySelector(".gate");
const hidingTitleCard = document.querySelector(".title-card");
//SELECTORS LOGIN PAGE
const loginPage = document.querySelector(".login-page");
const userName = document.getElementById("username");
const password = document.getElementById("password");
const signInBtn = document.getElementById("sign-in");
const errorMessage = document.getElementById("error-message");
//GUEST DASHBOARD
const guestDashboard = document.querySelector(".guest-dashboard");
const bookingBox = document.querySelector(".past-room-details");
const guestDetailBox = document.querySelector(".guest-details");
//SELECTORS BOOKING PAGE
const bookBtn = document.querySelector(".booking-button");
const bookingPage = document.querySelector(".booking-page");
const calendar = document.querySelector(".calendar");
const dateInput = document.querySelector("input[type='date']");
const calendarSubmitBtn = document.querySelector(".calendar-submit");
// dateInput.value = new Date().toJSON().slice(0, 10);
// //.split("-").join("/");
// console.log(dateInput.value);
const roomDetailGrid = document.querySelector(".rooms-and-details");

//EVENT LISTENERS
window.addEventListener("load", () => {
  initializeCustomerData();
  initializeRoomData();
  initializeBookingData();
  homePage();
});
dashboardBtn.addEventListener("click", loadLoginPage);
signInBtn.addEventListener("click", loadGuestDashboard);
bookBtn.addEventListener("click", loadBookingPage);
calendarSubmitBtn.addEventListener("click", chooseBookingDate);

//HELPER FUNCTIONS
function show(element) {
  element.classList.remove("hidden");
}

function hide(element) {
  element.classList.add("hidden");
}

function homePage() {
  show(gateImage);
  show(hidingTitleCard);
  show(dashboardBtn);
  hide(loginPage);
  hide(bookingPage);
  hide(bookingBox);
}

function loadLoginPage() {
  show(loginPage);
  hide(gateImage);
  hide(hidingTitleCard);
  hide(dashboardBtn);
  hide(bookingPage);
  hide(bookingBox);
  userName.value = "";
  password.value = "";
}

function loadGuestDashboard(event) {
  event.preventDefault();
  if (userName.value === "" || password.value === "") {
    errorMessage.innerText = `Please Fill Out All Fields`;
  } else if (password.value !== "overlook2021") {
    errorMessage.innerText = `Wrong Password, Please Try Again.`;
  } else if (!userName.value.includes("customer")) {
    errorMessage.innerText = `Please Try A Different User Name.`;
  } else {
    show(guestDashboard);
    show(bookingBox);
    hide(gateImage);
    hide(hidingTitleCard);
    hide(loginPage);
    hide(dashboardBtn);
    hide(bookingPage);
    showAllBookings();
    showGuestPastDetails();
  }
}

function showAllBookings() {
  document.body.style.backgroundImage = `url('./images/moss-bridge.png')`;
  let userID = parseInt(userName.value.slice(8, userName.value.length));
  singleGuest = customers.find((guest) => guest.guestID === userID);
  singleGuest.showRoomsStayedIn(bookings, rooms).forEach((room) => {
    bookingBox.innerHTML += `<section class="bookings-box">
          <p class="room-font">
            Date Booked: ${room.date}<br>
            Room Number: ${room.roomNumber}<br>
            Room Type: ${room.roomType.toUpperCase()}<br>
            Bed Size: ${room.bedSize}<br>
            Number of Beds: ${room.numBeds}<br>
            Cost: $${room.costPerNight.toFixed(2)}
          </p>
      </section>`;
  });
}

function showGuestPastDetails() {
  guestDetailBox.innerHTML = `<section class="welcome-and-total">
    <div class="guest-welcome">
      <h2 class="personal-welcome">Welcome<br>
      ${singleGuest.guestName}</h2>
    <div>
    <div class="total-spent">
      <h5>Your Total Spent:</h5>
      <h4 class="personal-total">${singleGuest.showAllStaysTotal(
        bookings,
        rooms
      )}</h4>
    </div>
  </section>`;
}

function loadBookingPage() {
  show(bookingPage);
  show(calendar);
  hide(gateImage);
  hide(hidingTitleCard);
  hide(dashboardBtn);
  hide(loginPage);
  hide(bookBtn);
  hide(guestDashboard);
  hide(bookingBox);
  allRoomDetails();
  chooseBookingDate();
}

function allRoomDetails() {
  document.body.style.backgroundImage = `url('./images/cover-forest.png')`;
  return rooms.forEach((room) => {
    roomDetailGrid.innerHTML += `<section room-box>
    <section class="rooms-icon">
    <img class="hotel-room1" src="./images/hotel-room1.png"/>
    <p class="room-font">
    Room Type: ${room.roomType.toUpperCase()}<br>
    Bed Size: ${room.bedSize}<br>
    Number of Beds: ${room.numBeds}<br>
    Cost: $${room.costPerNight.toFixed(2)}
    </p>
    </section>
    </section>`;
  });
}

//connect the date and submit button to the value
//connect the value of the date to the filtered rooms
//return only the filtered rooms
//show only the available rooms on the DOM
function chooseBookingDate() {
  loadCurrentDate();
  //console.log({ rooms });
  // bookings.forEach((booking) => {
  //   console.log(booking);
  // });
  //dateInput.value = "";

  //for each room check the bookings, not for each booking check the room.
  bookings.forEach((booking) => {
    console.log(booking.filterRoomsByDate(bookings, rooms, "2022/04/22"));
  });
  //let chooseDate = dateInput.value.split("-").join("/");
  //let bookingDate = dateInput.value.split("-").join("/");
  // let availBook = bookings.filter((booking) => {
  //   booking.filterRoomsByDate(bookings, rooms, "2022/04/22");
  //   const lookRoom = rooms.filter((room) => {
  //     if (booking.roomNumber === rooms.roomNumber) {
  //       return room;
  //     }
  //   });
  //   console.log("roomLN209", lookRoom);
  //  booking.filterRoomsByDate(bookings, rooms, chooseDate);
  // });
  // console.log({ availBook });
  console.log("bookings2", bookings);
  //console.log(rooms);
}

function loadCurrentDate() {
  //let date = new Date().toJSON().slice(0, 10).split("-").join("/");
  dateInput.value = new Date().toJSON().slice(0, 10);
  // .split("-").join("/");
  console.log(dateInput.value);
}
