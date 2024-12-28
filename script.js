document.addEventListener("DOMContentLoaded", () => {
  const url = "/data.json"; // Path to the JSON file

  // Check if we're on the details page
  const isDetailsPage = window.location.pathname.includes("details.html");

  if (isDetailsPage) {
    // Get the ID from the URL query string
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");

    if (id) {
      // Fetch the data.json file
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          // Find the item with the matching ID
          const item = data.find((entry) => entry.id === id);
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
