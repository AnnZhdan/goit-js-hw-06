const categoriesList = document.querySelector("#categories");
const categoriesItems = categoriesList.querySelectorAll(".item");

console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItems.forEach(categoryItem => {
  const categoryTitle = categoryItem.querySelector("h2");
  const categoryList = categoryItem.querySelector("ul");
  const categoryElements = categoryList.querySelectorAll("li");

  console.log(`Category: ${categoryTitle.textContent}`);
  console.log(`Elements: ${categoryElements.length}`);
});