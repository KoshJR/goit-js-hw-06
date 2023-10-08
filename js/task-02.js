const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listedIngredients = document.querySelector("#ingredients");

const newList = ingredients.map((ingredients) => {
  const item = document.createElement("li");
  item.textContent = ingredients;
  item.classList.add("item");
  console.log(item);
  return item;
});

listedIngredients.append(...newList);
