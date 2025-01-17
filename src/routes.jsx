import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import AllLaunchesView from './views/AllLaunches';
import Layout from "./views/Layout";
import UpcomingLaunchesView from "./views/UpcoingLaunches";
import PastLaunches from"./views/PastLaunches";

const Routes = () => (
        <Router>
            <div>
                <Layout>
                    <Route exact path="/" component={AllLaunchesView}/>
                    <Route path="/past" component={PastLaunches}/>
                    <Route path="/upcoming" component={UpcomingLaunchesView}/>
                </Layout>
            </div>
        </Router>
    )

export default Routes;
