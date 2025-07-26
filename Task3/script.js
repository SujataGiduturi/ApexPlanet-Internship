const images = [
  "https://picsum.photos/id/237/300/200",
  "https://picsum.photos/id/238/300/200",
  "https://picsum.photos/id/239/300/200"
];
let currentIndex = 0;

function showImage(index) {
  document.getElementById("carouselImage").src = images[index];
}
function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}
function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}
window.onload = () => showImage(currentIndex);

function checkAnswer(answer) {
  const res = document.getElementById("quizResult");
  if (answer === "Paris") {
    res.textContent = "Correct ✅"; res.style.color = "green";
  } else {
    res.textContent = "Wrong ❌"; res.style.color = "red";
  }
}

function getWeather() {
  const city = document.getElementById("cityInput").value;
  const output = document.getElementById("weatherResult");
  if (!city) {
    output.textContent = "Please enter city name.";
    return;
  }
  const apiKey = "demo"; // Replace with your OpenWeatherMap key
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(r=>r.json())
    .then(data => {
      if (data.main) {
        output.textContent = `${data.name}: ${data.main.temp}°C, ${data.weather[0].main}`;
      } else {
        output.textContent = "City not found.";
      }
    })
    .catch(err => output.textContent = "Error fetching data.");
}
