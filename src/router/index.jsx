import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Header from '../components/header/Header.jsx'
import Footer from '../components/footer/Footer.jsx'
import HomePage from '../views/index/Index.jsx'
import AboutPage from '../views/about/About.jsx'
import NoMatch from '../views/404/404.jsx'
import Topic from '../views/topic/Topic.jsx'

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