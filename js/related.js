const url2 =
  "http://sesejose.com/kea/wp_entremasas/wp-json/wp/v2/article?_embed";

fetch(url2)
  .then((response) => {
    if (!response.ok) {
    }
    return response.json();
  })
  .then((data) => {
    handleRelated(data);
  });

function handleRelated(data) {
  data.forEach(showRelated);
  console.log("jose");
}

const template = document.querySelector("#relatedTemplate").content;

function showRelated(art) {
  console.log(art);
  const copy = template.cloneNode(true);
  copy.querySelector(".title-excerpt-article-block h4").textContent =
    art.title.rendered;
  //   copy.querySelector(".subtitle").textContent = art.description;
  copy.querySelector(".title-excerpt-article-block p").textContent =
    art.excerpt.rendered;
  copy.querySelector(".cover-article-related img").src = art.image.guid;

  copy
    .querySelector(".cover-article-related a")
    .setAttribute("href", `article.html?id=${art.id}`);

  const parent = document.querySelector("#related-articles");
  parent.appendChild(copy);
}
