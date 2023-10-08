const listCategories = document.querySelectorAll("#categories .item");
console.log("Number of categories", listCategories.length);

listCategories.forEach((item) => {
  const categoryName = item.firstElementChild.textContent;
  console.log("Category", categoryName);
  const numberOfElement = item.lastElementChild.children.length;
  console.log("Elements", numberOfElement);
});
