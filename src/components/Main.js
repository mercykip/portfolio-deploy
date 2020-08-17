import React from 'react';
import { Switch, Route} from 'react-router-dom';

import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import Resume from './Resume';
import Django from '../documentation/Django';

const Main = () =>
(
<Switch>
    {/* portfolio */}
    <Route exact path="/" component={Projects}/>
    <Route  path="/about" component={About}/>
    <Route  path="/contact" component={Contact}/>
    <Route  path="/portfolio-deploy" component={Projects}/>
    <Route  path="/resume" component={Resume}/>
    {/* Documentation */}
    <Route  path="/django" component={Django}/>
</Switch>
)
export default Main;