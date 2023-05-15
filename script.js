document.addEventListener("DOMContentLoaded", function() {
  var countdownElement = document.getElementById("countdown");
  var targetDate = new Date("2024-01-01"); // Set your target date here

  function updateCountdown() {
    var currentDate = new Date();
    var timeDifference = targetDate.getTime() - currentDate.getTime();

    // Calculate hours, minutes, and seconds
    var hours = Math.floor(timeDifference / (1000 * 60 * 60));
    var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Format the time values with leading zeros
    var formattedHours = ("0" + hours).slice(-2);
    var formattedMinutes = ("0" + minutes).slice(-2);
    var formattedSeconds = ("0" + seconds).slice(-2);

    // Update the countdown element
    countdownElement.innerHTML = formattedHours + ":" + formattedMinutes + ":" + formattedSeconds;

    // Stop the countdown when the target date is reached
    if (timeDifference <= 0) {
      clearInterval(countdownInterval);
      countdownElement.innerHTML = "Countdown finished!";
    }
  }

  // Update the countdown every second
  var countdownInterval = setInterval(updateCountdown, 1000);
});
