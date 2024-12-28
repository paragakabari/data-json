document.addEventListener("DOMContentLoaded", () => {
  fetch("/data.json")
    .then((response) => response.json())
    .then((data) => {
      const container = document.getElementById("data-container");
      container.innerHTML = JSON.stringify(data, null, 2); // Display the data
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
});
