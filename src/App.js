import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import IncubatorPage from "./components/IncubatorPage/IncubatorPage";
import FundStartup from "./components/FundStartup/FundStartup";
import LearnPage from './components/LearnPage/LearnPage';
import Navbar from './components/shared/Navbar/Navbar';
import Course from './components/Dashboard/Course/Course';
import WeeklyActivities from './components/Dashboard/WeeklyActivities/WeeklyActivities';
import ActivityDetails from './components/Dashboard/ActivityDetails/ActivityDetails';
import ScrollToTop from './components/shared/ScrollToTop/ScrollToTop';
import Home from './components/Home/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/incubator">
          <IncubatorPage />
        </Route>
        <Route path="/startup/:startupID">
          <Navbar />
          <FundStartup />
        </Route>
        <Route path="/startup/:startupID">
          <IncubatorPage />
        </Route>
        <Route path="/course/:courseID">
          <Course />
        </Route>
        <Route path="/week/:weekID">
          <WeeklyActivities />
        </Route>
        <Route path="/activity/:activityID">
          <ActivityDetails />
        </Route>
        <Route path="/learn">
          <LearnPage />
        </Route>
      </Switch>
      <ScrollToTop />
    </Router>
  );
}

export default App;
