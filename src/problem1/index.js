// Uses an iterative approach for clarity
// Advantages: Readable, easy to debug
// Disadvantages: O(n)
var sum_to_n_a = function (n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
};

// Uses a functional approach with Array methods
// Advantages: Functional style, leverages built-in methods
// Disadvantages: Creates an array of size n, O(n) space complexity
var sum_to_n_b = function (n) {
  return Array.from({ length: n }, (_, i) => i + 1).reduce(
    (acc, cur) => acc + cur,
    0
  );
};

// Uses a mathematical formula for optimal performance
// Advantages: O(1) time complexity, no extra space
// Disadvantages: Less intuitive, requires mathematical knowledge
var sum_to_n_c = function (n) {
  return (n * (n + 1)) / 2;
};
