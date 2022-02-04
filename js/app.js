const checkboxesSeats = document.querySelector(".seats_grid");
const totalOrderPrice = document.querySelector(".total_price");
const leftSector = document.querySelector(".left_tickets");
const centerSector = document.querySelector(".center_tickets");
const rightSector = document.querySelector(".right_tickets");

let ticketPrice = 10;
let totalPrice = 0;


function checkChecked(e) {
  const targetOfSeats = e.target.closest('input');
  ifClickedSeats(targetOfSeats);
}

function ifClickedSeats(target) {
  const valueOfPlace = target.value;
  console.log(valueOfPlace)
  const place = target.value;
  console.log(place)
  if (target.checked) {
    totalPrice += ticketPrice;
    checkSectorOfTickets(place, target, valueOfPlace);
    showTickets(place);
  } 
  if(!target.checked) {
    removePlace(valueOfPlace);
    totalPrice -= ticketPrice;
  }

  totalOrderPrice.innerHTML = `Total: $${totalPrice}`;
}
function checkSectorOfTickets(place, target, value) {
  if (target.id === "left") {
    leftSector.appendChild(showTickets(place, value));
  }
  if (target.id === "center") {
    centerSector.appendChild(showTickets(place, value));
  }
  if (target.id === "right") {
    rightSector.appendChild(showTickets(place, value));
  }
}
function showTickets(place, value) {
  console.log(place);
  const filmSeat = document.createElement("div");
  filmSeat.dataset.value = value;
  filmSeat.classList.add("block_in_tickets");
  filmSeat.innerHTML = `<p class="num_of_place">${place}</p> 
  <hr>`;
  return filmSeat;
}

function removePlace(value) {
  const filmBlockInside = document.querySelectorAll(".block_in_tickets");
  filmBlockInside.forEach((seat) => {
     console.log(seat.dataset.value)
    if(seat.dataset.value === value) {
      seat.remove();
    }
  });
}
checkboxesSeats.addEventListener("click", checkChecked);
