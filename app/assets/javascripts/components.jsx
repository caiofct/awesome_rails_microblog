// ES6 imports
import AwesomeComponent from './components/AwesomeComponent.jsx';

// Setup a global app scope
const app = window.app = global.app = {};

// Expose components to global scope
app.AwesomeComponent = AwesomeComponent;
