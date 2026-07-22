/**
 * API Client Module
 * Handles API interactions and requests
 */

/**
 * Mock user database
 */
const mockUsers = [
  { id: 1, name: 'Alice Johnson', email: 'alice@example.com', status: 'active' },
  { id: 2, name: 'Bob Smith', email: 'bob@example.com', status: 'active' },
  { id: 3, name: 'Charlie Brown', email: 'charlie@example.com', status: 'inactive' }
];

/**
 * Mock products database
 */
const mockProducts = [
  { id: 101, name: 'Laptop', price: 999.99, stock: 5 },
  { id: 102, name: 'Mouse', price: 29.99, stock: 50 },
  { id: 103, name: 'Keyboard', price: 79.99, stock: 25 }
];

/**
 * Get user by ID
 * @param {number} userId - User ID
 * @returns {object} - User object or null
 */
function getUser(userId) {
  return mockUsers.find(user => user.id === userId) || null;
}

/**
 * Get all users
 * @returns {array} - Array of all users
 */
function getAllUsers() {
  return mockUsers;
}

/**
 * Get product by ID
 * @param {number} productId - Product ID
 * @returns {object} - Product object or null
 */
function getProduct(productId) {
  return mockProducts.find(product => product.id === productId) || null;
}

/**
 * Get all products
 * @returns {array} - Array of all products
 */
function getAllProducts() {
  return mockProducts;
}

/**
 * Create new user
 * @param {object} userData - User data
 * @returns {object} - Created user object
 */
function createUser(userData) {
  const newUser = {
    id: mockUsers.length + 1,
    ...userData,
    created_at: new Date().toISOString()
  };
  mockUsers.push(newUser);
  return newUser;
}

module.exports = {
  getUser,
  getAllUsers,
  getProduct,
  getAllProducts,
  createUser
};
