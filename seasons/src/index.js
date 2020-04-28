import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

const App = ()=>{
  const [lat, setLat] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  useEffect(()=>{
    window.navigator.geolocation.getCurrentPosition(
      (position) => setLat(position.coords.latitude),
      (failure) => setErrorMessage(failure.message)
    );
  }, []);
  let content;
  if (errorMessage) {
    content = <div>Error: {errorMessage}</div>;
  } else if(lat){
    content = <SeasonDisplay lat={lat} />;
  } else{
    content = <Spinner message="Please allow location request."/>;
  }
  return(
    <div>
      {content}
    </div>
  )
};

ReactDOM.render(
  <App/>,
  document.querySelector("#root")
);