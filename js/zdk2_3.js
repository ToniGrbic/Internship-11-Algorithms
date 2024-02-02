function zdk2_3(zdk) {
  if (zdk === 2) zdk2();
  else if (zdk === 3) zdk3();
  else console.log("Invalid zdk number");
}

const input_employees = () => {
  const employees = [];

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
  return employees;
};

const print_employee = (employee) => {
  console.log("Name: ", employee.name);
  console.log("Surname: ", employee.surname);
  console.log("Work: ", employee.work);
  console.log("Salary: ", employee.salary);
};

const group_employees_by_work = (employees) => {
  const group_by_work = {};

  for (const employee of employees) {
    if (!group_by_work[employee.work]) {
      group_by_work[employee.work] = [];
    }
    group_by_work[employee.work].push(employee);
  }
  const group_by_work_array = Object.values(group_by_work);
  return group_by_work_array;
};

function zdk2() {
  const employees = input_employees();
  const group_by_work_array = group_employees_by_work(employees);
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

  console.log(
    average_salaries_by_work.sort((a, b) => b.average_salary - a.average_salary)
  );
}

function zdk3() {
  const employees = input_employees();
  const total_salary = employees.reduce(
    (sum, employee) => sum + employee.salary,
    0
  );
  const group_by_work_array = group_employees_by_work(employees);

  const percenteges_of_total_salary = group_by_work_array.map((employees) => {
    const total_salary_by_work = employees.reduce(
      (sum, employee) => sum + employee.salary,
      0
    );
    const percent_of_total_by_employees = employees.map((employee) => ({
      name: employee.name,
      percent_of_total_by_work: Math.round(
        (employee.salary / total_salary_by_work) * 100
      ),
    }));

    return {
      work: employees[0].work,
      percent_of_total: Math.round((total_salary_by_work / total_salary) * 100),
      percent_of_total_by_employees,
    };
  });

  console.log(percenteges_of_total_salary);
}
