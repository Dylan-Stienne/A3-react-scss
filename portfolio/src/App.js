import HomePage from "./pages/Home"
import ProjectsPage from "./pages/Projects"
import CvPage from "./pages/Cv"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/portfolio" component={ProjectsPage} />
        <Route exact path="/cv" component={CvPage} />
        <Route path="*"><Redirect to="/" /></Route>
      </Switch>
    </Router>
  )
}

export default App;
