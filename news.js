const newsApiKey = "db8a64e4c9c54a189e1ea90f97e92d55"; // Replace with your actual API key
const newsContainer = document.getElementById("news-headlines");

async function loadNews() {
  try {
    // Example: top headlines for the Philippines (country code: 'ph')
    const url = `https://newsapi.org/v2/top-headlines?country=ph&apiKey=${newsApiKey}`;
    const response = await fetch(url);
    const data = await response.json();

    if (data.status === "ok" && data.articles.length > 0) {
      // Get first 3 headlines for example
      const headlines = data.articles.slice(0, 3);
      newsContainer.innerHTML = headlines
        .map((article) => {
          return `<a href="${article.url}" target="_blank" rel="noopener noreferrer">${article.title}</a>`;
        })
        .join(" | ");
    } else {
      newsContainer.innerHTML = "No News Available.";
    }
  } catch (error) {
    console.error("Error fetching news:", error);
    newsContainer.innerHTML = "News unavailable";
  }
}

loadNews();
