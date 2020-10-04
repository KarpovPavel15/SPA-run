import { Route, Switch } from 'react-router-dom';
import React from 'react';
import { RootPage } from '../modules/rootPage';
import { AchievementsPage } from '../modules/achievements-page';
import { Info } from '../modules/info';

export const Routes = ({isAuthorized, routes}) => {
    if (isAuthorized) {
        return (
            <Switch>
                {
                    routes &&
                    <Route path="/jobs" exact>
                        <AchievementsPage routes={routes}/>
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
