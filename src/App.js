import HomePage from "./pages/Home"
import PortfolioPage from "./pages/Portfolio"
import CvPage from "./pages/Cv"
import QuizzsPage from "./pages/Quizzs"
import QuizzPage from "./pages/Quizz"

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
        <Route exact path="/portfolio" component={PortfolioPage} />
        <Route exact path="/cv" component={CvPage} />
        <Route exact path="/quizzs" component={QuizzsPage} />
        <Route exact path="/quizz/:slug" component={QuizzPage} />
        <Route path="*"><Redirect to="/" /></Route>
      </Switch>
    </Router>
  )
}

export default App;
