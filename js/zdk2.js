function zdk2() {
  const employees = [];

  const print_employee = (employee) => {
    console.log("Name: ", employee.name);
    console.log("Surname: ", employee.surname);
    console.log("Work: ", employee.work);
    console.log("Salary: ", employee.salary);
  };

  while (true) {
    const name = prompt("Enter employee name:");
    const surname = prompt("Enter employee surname:");
    const work = prompt("Enter employee work:");
    const salary = Number(prompt("Enter employee salary:"));
    console.log(salary);

    if (isNaN(salary) || salary <= 0) {
      alert("Invalid salary input, try again!");
      continue;
    }
    const new_employee = { name, surname, work, salary };
    print_employee(new_employee);
    employees.push(new_employee);

    if (!confirm("Do you want to continue input new employee?")) break;
  }

  const group_by_work = {};

  for (const employee of employees) {
    if (!group_by_work[employee.work]) {
      group_by_work[employee.work] = [];
    }
    group_by_work[employee.work].push(employee);
  }

  const group_by_work_array = Object.values(group_by_work);
  console.log(group_by_work_array);

  const average_salaries_by_work = group_by_work_array.map((employees) => {
    const total_salary = employees.reduce(
      (sum, employee) => sum + employee.salary,
      0
    );
    const average_salary = total_salary / employees.length;
    return {
      work: employees[0].work,
      average_salary,
      employees_count: employees.length,
    };
  });

  console.log(average_salaries_by_work);
}
