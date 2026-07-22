/**
 * JavaScript Utility Functions
 * Common utility functions for the application
 */

/**
 * Capitalize a string
 * @param {string} str - The string to capitalize
 * @returns {string} - Capitalized string
 */
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Multiply two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} - Product of a and b
 */
function multiply(a, b) {
  return a * b;
}

/**
 * Sum an array of numbers
 * @param {array} numbers - Array of numbers
 * @returns {number} - Sum of all numbers
 */
function sumArray(numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}

/**
 * Calculate average of array
 * @param {array} numbers - Array of numbers
 * @returns {number} - Average value
 */
function average(numbers) {
  if (numbers.length === 0) return 0;
  return sumArray(numbers) / numbers.length;
}

/**
 * Format currency
 * @param {number} amount - Amount to format
 * @returns {string} - Formatted currency string
 */
function formatCurrency(amount) {
  return `$${amount.toFixed(2)}`;
}

/**
 * Validate email
 * @param {string} email - Email to validate
 * @returns {boolean} - True if valid email
 */
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

module.exports = {
  capitalize,
  multiply,
  sumArray,
  average,
  formatCurrency,
  isValidEmail
};
