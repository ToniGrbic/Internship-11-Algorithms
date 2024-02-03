function zdk9() {
  const names = [];
  while (true) {
    const name = prompt("Enter person first name:");
    names.push(name);
    if (!confirm("Do you want to continue input?")) break;
  }

  const names_with_more_than_five_chars = names.filter(
    (name) => name.length > 5
  );
  names_with_more_than_five_chars.sort();
  console.log(
    "Names with more than 5 chars: ",
    names_with_more_than_five_chars
  );
  const csv_format = names_with_more_than_five_chars.join(", ");
  console.log("CSV format: ", csv_format);
}
