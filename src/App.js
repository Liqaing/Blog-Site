import Navbar from './components/navbar';
import Home from './components/home';
import CreateBlog from './components/createBlog';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BlogDetails from './components/blogs-detail';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>

            <Route path='/create'>
              <CreateBlog />
            </Route>

            <Route path='/blogs/:id'>
              <BlogDetails/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
