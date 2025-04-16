// js-auto.js
function add(a, b) {
  // Check if both arguments are numbers
  if (typeof a !== 'number' || typeof b !== 'number') {
    return NaN; // Return NaN if either argument is not a number
  }
  return a + b; // Perform addition if both arguments are numbers
}

module.exports = { add }; // Export the function
