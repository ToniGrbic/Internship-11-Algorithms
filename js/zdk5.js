function zdk5() {
  let athletes = [];

  while (true) {
    let name = prompt("Enter athlete's first name:");
    let surname = prompt("Enter athlete's last name:");
    let points = Number(prompt("Enter athlete's points:"));

    if (isNaN(points) || points <= 0) {
      alert("Invalid points input, try again!");
      continue;
    }

    athletes.push({ name, surname, points });

    if (!confirm("Do you want to continue input?")) break;
  }

  let max_points = Math.max(...athletes.map((athlete) => athlete.points));

  let categories = [
    { name: "0-25%", range: [0, Math.round(0.25 * max_points)] },
    {
      name: "25-50%",
      range: [Math.round(0.25 * max_points), Math.round(0.5 * max_points)],
    },
    {
      name: "50-75%",
      range: [Math.round(0.5 * max_points), Math.round(0.75 * max_points)],
    },
    { name: "75-100%", range: [Math.round(0.75 * max_points), max_points] },
  ];

  for (const category of categories) {
    let athletes_by_category = athletes.filter((athlete) => {
      return (
        athlete.points >= category.range[0] &&
        athlete.points <= category.range[1]
      );
    });

    athletes_by_category.sort((a, b) => a.surname.localeCompare(b.surname));
    console.log(`Category: ${category.name}`);

    for (const athlete of athletes_by_category) {
      console.log(`${athlete.surname} ${athlete.name}`);
    }
  }
}
