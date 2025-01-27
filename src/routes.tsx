import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from './views/Home';
import { Work } from './views/Work';
import { Projects } from './views/Projects';
import { Contact } from './views/Contact';
import { Container } from 'react-bootstrap';
import { NoMatch } from './views/NoMatch';

const Routes = () => {
    return (
        <div className="main">
            <Container>
            <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/about" component={Home}/>
                    <Route exact path="/work" component={Work}/>
                    <Route exact path="/projects" component={Projects}/>
                    <Route exact path="/contact" component={Contact}/>
                    <Route component={NoMatch}/>
            </Switch>
            </Container>

        </div>
    );
}

export default Routes;