import Card from "./Card.js";
const cardListItem = (imgData) => {
  return `
  <li class="cardlist_item>
${card(imgData)}
  </li>
  `;
};
const Cardlist = (data) => {
  return `
  <section class="cardlist">
<ul class="cardlist_list">
${data.map((imgData) => cardListItem(imgData).join(""))}
</ul>


  </section>
  `;
};

export default Cardlist;
