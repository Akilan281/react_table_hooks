import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { SCREENS } from '../common/Constants'
import HomeComponent from './screens/home/HomeComponent'
import NavBarComponent from './screens/navbar/NavBarComponent'
import { Provider } from 'react-redux'
import Store from '../redux/store/Store'
import FooterComponent from './screens/footer/Footer'
import LoaderComponent from '../components/LoaderComponent'

function AppRouter() {
    return (
        <Provider store={Store}>
            <Router>
                <NavBarComponent />
                <div className="main-wrap">
                    <LoaderComponent />
                    <Switch>
                        <Route exact path={SCREENS.HOME} component={HomeComponent}></Route>
                    </Switch>
                </div>
                <FooterComponent />

            </Router>
        </Provider>
    )
}

export default AppRouter
