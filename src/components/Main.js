import React from 'react';
import { Switch, Route} from 'react-router-dom';

import About from './About';
import Contact from './Contact';
import Project from './Project';
import Resume from './Resume';
import Django from '../documentation/Django';

const Main = () =>
(
<Switch>
    {/* portfolio */}
    <Route exact path="/" component={Project}/>
    <Route  path="/about" component={About}/>
    <Route  path="/contact" component={Contact}/>
    <Route  path="/portfolio-deploy" component={Project}/>
    <Route  path="/resume" component={Resume}/>
    {/* Documentation */}
    <Route  path="/django" component={Django}/>
</Switch>
)
export default Main;