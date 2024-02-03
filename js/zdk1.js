function zdk1() {
  const products = [];

  while (true) {
    const name = prompt("Enter product name:");
    const price = Number(prompt("Enter product price:"));
    console.log(price);
    if (isNaN(price) || price <= 0) {
      alert("Invalid price input, try again!");
      continue;
    }

    const color = prompt("Enter product color:");
    products.push({ name, price, color });

    if (!confirm("Do you want to continue input new product?")) break;
  }

  const total_price = products.reduce((sum, product) => sum + product.price, 0);
  const average_price = total_price / products.length;

  const deviations = products.map((product) => ({
    name: product.name,
    deviation: Math.round(Math.abs(product.price - average_price) * 100) / 100,
  }));

  const productWithMaxDeviation = deviations.reduce((prev, current) =>
    prev.deviation > current.deviation ? prev : current
  );

  console.log("Products: ", products);
  console.log("Average price:", average_price.toFixed(2));
  console.log("Deviations: ", deviations);
  console.log("Product with max deviation: ", productWithMaxDeviation);
}
