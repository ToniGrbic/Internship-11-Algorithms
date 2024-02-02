function zdk4() {
  const fruits = [];
  while (true) {
    let name = prompt("Enter product name:");
    let color = prompt("Enter product color:");
    let calories = Number(prompt("Enter product calories:"));

    if (isNaN(calories) || calories <= 0) {
      alert("Invalid calories input, try again!");
      continue;
    }

    fruits.push({ name, color, calories });

    if (!confirm("Do you want to continue input new product?")) break;
  }
  const group_by_color = {};
  for (const fruit of fruits) {
    if (!group_by_color[fruit.color]) {
      group_by_color[fruit.color] = [];
    }
    group_by_color[fruit.color].push(fruit);
  }

  const group_by_color_array = Object.values(group_by_color);
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
