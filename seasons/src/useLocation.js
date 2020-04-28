import {useState, useEffect} from "react";

const useLocation = ()=>{
  const [lat, setLat] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  useEffect(()=>{
    window.navigator.geolocation.getCurrentPosition(
      (position) => setLat(position.coords.latitude),
      (failure) => setErrorMessage(failure.message)
    );
  }, []);
  return {lat, errorMessage};
};

export default useLocation;