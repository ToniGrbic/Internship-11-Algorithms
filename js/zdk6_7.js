function zdk6_7(zdk) {
  if (zdk === 6) zdk6();
  else if (zdk === 7) zdk7();
  else console.log("Invalid zdk number");
}

const input_fruits = () => {
  const fruits = [];
  while (true) {
    const name = prompt("Enter fruit name:");
    const price = Number(prompt("Enter fruit price:"));

    if (isNaN(price) || price <= 0) {
      alert("Invalid price input, try again!");
      continue;
    }

    const is_avalible = confirm("Is fruit avalible?");
    const new_fruit = { name, price, is_avalible };
    console.log(new_fruit);
    fruits.push(new_fruit);

    if (!confirm("Do you want to continue input new fruit?")) break;
  }
  return fruits;
};

function zdk6() {
  const fruits = input_fruits();
  console.log("All Fruits: ", fruits);
  console.log("Unabalible fruits and their indexes: ");
  fruits.forEach((fruit, index) => {
    if (!fruit.is_avalible) {
      console.log(fruit.name + " " + index);
    }
  });

  const total_fruits_price = fruits.reduce(
    (sum, fruit) => sum + fruit.price,
    0
  );

  const list_of_sorted_unavalible_fruits = fruits
    .filter((fruit) => !fruit.is_avalible)
    .sort((a, b) => a.name.localeCompare(b.name))
    .sort((a, b) => {
      if (a.price === b.price) return 0;
      return a.price - b.price;
    });

  const unavalible_fruits_price = list_of_sorted_unavalible_fruits.reduce(
    (sum, fruit) => sum + fruit.price,
    0
  );
  console.log(
    "List of sorted unavalible fruits: ",
    list_of_sorted_unavalible_fruits
  );
  console.log(
    "Percenatage of unavalible fruits price: ",
    Math.round((unavalible_fruits_price / total_fruits_price) * 100) + "%"
  );
}

function zdk7() {}
