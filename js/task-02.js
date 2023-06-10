const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector(`#ingredients`);
const liBuilder = [];

ingredients.forEach((ingredients) => {
  const item = document.createElement("li");
  item.className = `item`;
  item.textContent = ingredients;
  liBuilder.push(item);
});
list.append(...liBuilder);
console.log(liBuilder);
