// ES6 imports
import AwesomeComponent from './components/AwesomeComponent.js';

// Setup a global app scope
const app = window.app = global.app = {};

// Expose components to global scope
app.AwesomeComponent = AwesomeComponent;
