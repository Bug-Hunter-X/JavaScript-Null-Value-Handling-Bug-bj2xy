# JavaScript Null Value Handling Bug

This repository demonstrates a common bug in JavaScript related to handling null values in a function. The `bug.js` file contains a function that adds two numbers.  However, it does not explicitly handle null values, which can lead to unexpected behavior or errors.

The `bugSolution.js` file provides a solution that improves the function by adding proper null checks and using the nullish coalescing operator for concise handling of nullish values.  This ensures the function operates reliably, even when null values are passed as inputs.