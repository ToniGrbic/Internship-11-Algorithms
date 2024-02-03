function zdk8() {
  const first_hundred_numbers = Array.from({ length: 100 }, (_, i) => i + 1);
  console.log(first_hundred_numbers);
  const gauss_sum = first_hundred_numbers.reduce(
    (sum, number) => sum + number,
    0
  );
  console.log("Sum of first 100 natural numbers: ", gauss_sum);
}
