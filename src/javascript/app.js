/**
 * Main JavaScript Application
 * Sample application for testing purposes
 */

const utils = require('./utils');
const api = require('./api');

/**
 * Application initialization
 */
class Application {
  constructor() {
    this.name = 'TEST Repository App';
    this.version = '1.0.0';
    this.initialized = false;
  }

  /**
   * Initialize the application
   */
  init() {
    console.log(`Initializing ${this.name} v${this.version}...`);
    this.initialized = true;
    this.printWelcomeMessage();
  }

  /**
   * Print welcome message
   */
  printWelcomeMessage() {
    console.log('=' .repeat(50));
    console.log('Welcome to TEST Repository - JavaScript Application');
    console.log('=' .repeat(50));
  }

  /**
   * Run sample operations
   */
  runSamples() {
    if (!this.initialized) {
      console.error('Application not initialized!');
      return;
    }

    console.log('\n--- Running Sample Operations ---\n');

    // Test string utilities
    const greeting = utils.capitalize('hello world');
    console.log(`Capitalized: ${greeting}`);

    // Test calculation
    const result = utils.multiply(5, 6);
    console.log(`5 * 6 = ${result}`);

    // Test array utilities
    const numbers = [1, 2, 3, 4, 5];
    const sum = utils.sumArray(numbers);
    console.log(`Sum of ${JSON.stringify(numbers)} = ${sum}`);

    // Test API
    console.log('\n--- API Calls ---');
    this.testAPI();
  }

  /**
   * Test API functions
   */
  testAPI() {
    const userData = {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com'
    };

    console.log('Fetching user data...');
    const user = api.getUser(userData.id);
    console.log(`User: ${JSON.stringify(user, null, 2)}`);
  }

  /**
   * Shutdown application
   */
  shutdown() {
    console.log('\n' + '='.repeat(50));
    console.log('Application shutting down...');
    console.log('='.repeat(50));
    this.initialized = false;
  }
}

// Main execution
if (require.main === module) {
  const app = new Application();
  app.init();
  app.runSamples();
  app.shutdown();
}

module.exports = Application;
