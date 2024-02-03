function zdk4_10(zdk) {
  if (zdk === 4) zdk4();
  else if (zdk === 10) zdk10();
  else alert("Invalid zdk number");
}

const input_fruits = () => {
  const fruits = [];
  while (true) {
    let name = prompt("Enter fruit name:");
    let color = prompt("Enter fruit color:");
    let calories = Number(prompt("Enter fruit calories:"));

    if (isNaN(calories) || calories <= 0) {
      alert("Invalid calories input, try again!");
      continue;
    }

    fruits.push({ name, color, calories });

    if (!confirm("Do you want to continue input new fruit?")) break;
  }
  return fruits;
};

const input_fruits_with_cost = () => {
  const fruits = [];
  while (true) {
    let name = prompt("Enter fruit name:");
    let color = prompt("Enter fruit color:");

    /* let calories = Number(prompt("Enter fruit calories:"));
    if (isNaN(calories) || calories <= 0) {
      alert("Invalid calories input, try again!");
      continue;
    } */

    let cost = Number(prompt("Enter fruit cost:"));
    if (isNaN(cost) || cost <= 0) {
      alert("Invalid cost input, try again!");
      continue;
    }

    fruits.push({ name, color, cost });

    if (!confirm("Do you want to continue input new fruit?")) break;
  }
  return fruits;
};

const group_fruits_by_color = (fruits) => {
  const group_by_color = {};

  for (const fruit of fruits) {
    if (!group_by_color[fruit.color]) {
      group_by_color[fruit.color] = [];
    }
    group_by_color[fruit.color].push(fruit);
  }

  const group_by_color_array = Object.values(group_by_color);
  return group_by_color_array;
};

function zdk4() {
  const fruits = input_fruits();
  const group_by_color_array = group_fruits_by_color(fruits);

  const group_by_color_with_max_calories = group_by_color_array.map(
    (fruits_group) => {
      const total_calories = fruits_group.reduce(
        (sum, fruit) => sum + fruit.calories,
        0
      );
      return {
        color: fruits_group[0].color,
        total_calories,
        fruits_group,
      };
    }
  );
  console.log(group_by_color_with_max_calories);
}

function zdk10() {
  const fruits = input_fruits_with_cost();
  const group_by_color_array = group_fruits_by_color(fruits);

  console.log(group_by_color_array);

  const min_cost_fruits_of_each_color = group_by_color_array
    .map((fruits_group) => {
      const min_cost = Math.min(...fruits_group.map((fruit) => fruit.cost));
      const least_expensive = fruits_group.find(
        (fruit) => fruit.cost === min_cost
      );

      return { ...least_expensive };
    })
    .sort((a, b) => a.name.length - b.name.length);

  const min_cost = min_cost_fruits_of_each_color.reduce(
    (sum, fruit) => sum + fruit.cost,
    0
  );
  console.log(
    "Min cost of fruits from each color: ",
    Math.round(min_cost * 100) / 100
  );
  console.log("Bought fruits: ", min_cost_fruits_of_each_color);
}
