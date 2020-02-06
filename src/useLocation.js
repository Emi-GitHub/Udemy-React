import {useState, useEffect} from 'react';

export default () => {
    const [lat, setLat] = useState(null); //the first element (lat) is the value od state property, and the second is a function that we can use to change that value
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => { //componentDidMount
    window.navigator.geolocation.getCurrentPosition(
      position => setLat(position.coords.latitude),
      err => setErrorMessage(err.message)
    );
  }, []);

  return [lat, errorMessage];
}