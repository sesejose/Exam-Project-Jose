const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

const url =
  "http://sesejose.com/kea/wp_entremasas/wp-json/wp/v2/article/" +
  id +
  "?_embed";

console.log(url);

fetch(url)
  .then((response) => {
    if (!response.ok) {
    }
    return response.json();
  })
  .then((data) => {
    showArticle(data);
  });

function showArticle(art) {
  console.log(art);
  document.querySelector("title").textContent = art.title.rendered;
  //   copy.querySelector("h3").textContent = art.text;
  document.querySelector(".article_text").textContent = art.excerpt.rendered;
  document.querySelector(".article_image img").src = art.image.guid;
  document.querySelector(".date").textContent = art.date;
  document.querySelector(".author").textContent = art._embedded.author[0].name;
}
