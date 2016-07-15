// ES6 imports
import ProfileBox from './components/ProfileBox.jsx'
import PostList from './components/posts/PostList.jsx'
import PostForm from './components/posts/PostForm.jsx'

// Setup a global app scope
const app = window.app = global.app = {}

// Expose components to global scope
app.ProfileBox = ProfileBox
app.PostList = PostList
app.PostForm = PostForm
