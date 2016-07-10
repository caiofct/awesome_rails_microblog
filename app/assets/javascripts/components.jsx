// ES6 imports
import ProfileBox from './components/ProfileBox.jsx';

// Setup a global app scope
const app = window.app = global.app = {};

// Expose components to global scope
app.ProfileBox = ProfileBox;
