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
  const fruits = input_fruits();
  const group_by_color_array = group_fruits_by_color(fruits);

  console.log(group_by_color_array);

  const min_cost_of_each_fruit_color = group_by_color_array
    .map((fruits_group) => {
      const min_cost = Math.min(...fruits_group.map((fruit) => fruit.cost));
      return min_cost;
    })
    .reduce((sum, min_cost) => sum + min_cost, 0);
  console.log(min_cost_of_each_fruit_color);
}
