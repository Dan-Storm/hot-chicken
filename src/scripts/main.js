// import API from "./modules/API.js";

{
  /* <div>
  <section>
    <h3>Name:</h3>
    <h4>Spice Level:</h4>
    <p>Purchased</p>
    <p>Color:</p>
    <button>Edit</button>
    <button>Delete</button>
  </section>
</div>; */
}

function populatePage(chickenArray) {
  let newDiv = document.createElement("div");
  newDiv.innerHTML = chickenArray.map(makeGrid).join("");
  document.getElementById("chicken-cards").append(newDiv);
}

const makeGrid = (item, index) => {
    let sold = `<p class="buy">Eat More Chicken</p>`
    if(item.purchased){
        sold = `<p class="buy">All Sold Out</p>`;
    }
  
    let block = `
    <section id="card--${index}" style="border: 2px solid ${item.color}">
    <h3>#${index} Name:${item.name}</h3>
    <h4>Spice Level: ${item.spicelevel}</h4>
    ${sold}
    <p>Color: ${item.color}</p>
    <button data-edit-id = "${item.id}" onClick="handleEdit(this)">Edit</button>
    <button data-delete-id = "${
      item.id
    }" onClick="handleDelete(this)">Delete</button>
    `;
  return block;
};

getAllChickens().then(inventoryFromGetAllChickens => {
  console.log("the chickens", inventoryFromGetAllChickens);
  populatePage(inventoryFromGetAllChickens);
});

function handleEdit(chicken){
    let whichChicken = chicken.getAttribute("data-edit-id");
    console.log("Let's Edit ", whichChicken);
}