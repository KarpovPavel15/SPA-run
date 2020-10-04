import { Route, Switch } from 'react-router-dom';
import React from 'react';
import { RootPage } from '../modules/rootPage';
import { AchievementsPage } from '../modules/achievements-page';
import { Info } from '../modules/info';

export const Routes = ({isAuthorized, routes,newRoutes}) => {
    if (isAuthorized) {
        return (
            <Switch>
                {
                    (routes || newRoutes) &&
                    <Route path="/jobs" exact>
                        <AchievementsPage routes={routes} newRoutes={newRoutes}/>
                    </Route>
                }

                <Route path="/info" exact>
                    <Info/>
                </Route>
            </Switch>
        )
    } else
        return (
            <Switch>
                <Route path="/">
                    <RootPage/>
                </Route>
            </Switch>
        )
};
