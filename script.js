var result = document.getElementById("result");
var rating = document.getElementById("rating");
var thankYou = document.getElementById("thank-you");
var alertMsg = document.getElementById("alert");

var rateScore = 0;

function setRate(value) {
  console.log(value);
  rateScore = value;
}

function handleClick() {
  if (rateScore == 0) {
    alertMsg.style.display = "flex";
    return;
  } else {
    alertMsg.style.display = "none";
  }
  result.innerHTML = `You selected ${rateScore} out of 5`;
  rating.style.display = "none";
  thankYou.style.display = "block";
}
