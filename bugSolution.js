function foo(a, b) {
  // Use nullish coalescing operator (??) to handle null or undefined values
  a ??= 0; 
  b ??= 0; 
  return a + b; 
}

console.log(foo(null, 5)); // Output: 5
console.log(foo(5, null)); // Output: 5
console.log(foo(5, 5)); // Output: 10
console.log(foo(null, null)); //Output: 0