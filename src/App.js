import React,{Component} from 'react';
import {BrowserRouter as Router,Switch,Link,Route} from 'react-router-dom';
import About from './About'
import People from './People'
import Contact from './Contact'
import ToDo from './ToDo';

class App extends Component{
  constructor(props){
    super(props)
  }

  render(){

    return(
      
      <div> 
        <Router>
          <table>
            <thead>
              <tr>
                <th> <Link to="/">ToDo</Link> </th>
                <th> <Link to="/about">About</Link> </th>
                <th> <Link to="/contact">Contact</Link> </th>
                <th> <Link to="/people/1">Team</Link> </th>
                </tr>
            </thead>
          </table>
        
        
        
        

        <Switch>
        <Route exact path="/">
            <ToDo/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
          <Route path="/People/:id">
            <People/>
          </Route>

        </Switch>
        </Router>


      </div>
    )
  }

}

export default App;