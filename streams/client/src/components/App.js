import React from "react";
import {Route, Link, BrowserRouter} from "react-router-dom";

const PageOne = ()=>{
  return (
    <div>
      PageOne
      <Link to="/pagetwo"> page two </Link>
    </div>
  );
}

const PageTwo = ()=>{
  return (
    <div>
      PageTwo
      <Link to="/"> page one </Link>
    </div>
  );
}

const App = ()=>{
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={PageOne} />
          <Route path="/pagetwo" component={PageTwo} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;