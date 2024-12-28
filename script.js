document.addEventListener("DOMContentLoaded", () => {
  const url = "/data.json"; // Path to the JSON file

  // Check if we are on the details page
  const isDetailsPage = window.location.pathname.includes("details.html");

  if (isDetailsPage) {
    // Get the ID from the URL (e.g., /details.html?id=1d88f8f1-df3c-4c22-8269-9008c072d1e4)
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");

    if (id) {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          const item = data.find((entry) => entry.id === id); // Find item by ID
          const container = document.getElementById("data-container");

          if (item) {
            container.innerHTML = `<pre>${JSON.stringify(item, null, 2)}</pre>`;
          } else {
            container.innerHTML = "<p>Item not found</p>";
          }
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    } else {
      const container = document.getElementById("data-container");
      container.innerHTML = "<p>No ID provided in URL</p>";
    }
  } else {
    // Home Page: Fetch and display all data
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const container = document.getElementById("data-container");
        container.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }
});
