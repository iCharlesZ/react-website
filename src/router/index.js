import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import HomePage from '../views/index/Index'
import AboutPage from '../views/about/About'
import NoMatch from '../views/404/404'
import Topic from '../views/topic/Topic'

const Routes = () => {
	return (
		<Router>
			<div>
                <Header />
                <Switch>
                	<Route exact path="/" component={HomePage}/>
                	<Route exact path="/about" component={AboutPage}/>
                    <Route path="/topic/:id" component={Topic} />
                	<Route component={NoMatch}/>
                </Switch>
                <Footer />
            </div>
		</Router>
	)
}

/*const Routes = ({history}) => 
        <Router history = {history}>*/

export default Routes;