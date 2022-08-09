// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import "./css/styles.css";

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import "./images/turing-logo.png";
import "./images/light-leaves.png";
import "./images/hotel-room1.png";
import { getCustomersData, getRoomsData, getBookingsData } from "./apiCalls";
import Guest from "../src/classes/guest";
import Booking from "../src/classes/booking";
import Room from "../src/classes/room";

let customers;
let rooms;
let bookings;

//FETCH CALLS
function initializeCustomerData() {
  getCustomersData.then((data) => console.log(data));
}

function initializeRoomData() {
  getRoomsData.then((data) => console.log(data));
  loadBookingPage();
}

function initializeBookingData() {
  getBookingsData.then((data) => console.log(data));
}

//SELECTORS HOME PAGE
const dashboardBtn = document.querySelector(".enter-dash");
const gateImage = document.querySelector(".gate");
const hidingTitleCard = document.querySelector(".title-card");
//SELECTORS LOGIN PAGE
const loginPage = document.querySelector(".login-page");
//SELECTORS BOOKING PAGE
const bookBtn = document.querySelector(".booking-button");
const bookingPage = document.querySelector(".booking-page");
const calendarInput = document.querySelector(".calendar");
const roomDetailGrid = document.querySelector(".rooms-and-details");

//EVENT LISTENERS
//window.addEventListener("load", initializeRoomData);
window.addEventListener("load", homePage);
dashboardBtn.addEventListener("click", loadLoginPage);
bookBtn.addEventListener("click", () => {
  loadBookingPage();
  initializeRoomData();
});

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
}

function loadLoginPage() {
  hide(gateImage);
  hide(hidingTitleCard);
  show(loginPage);
  hide(dashboardBtn);
  hide(bookingPage);
}

function loadBookingPage() {
  hide(gateImage);
  hide(hidingTitleCard);
  hide(dashboardBtn);
  hide(loginPage);
  hide(bookBtn);
  show(bookingPage);
  show(calendarInput);
  allRoomDetails();
}

function allRoomDetails() {
  document.body.style.background = `url('./images/light-leaves.png')`;
  roomDetailGrid.innerHTML += `<section class="rooms-and-details"><img class="hotel-room1" src="./images/hotel-room1.png"/></section>`;
}
