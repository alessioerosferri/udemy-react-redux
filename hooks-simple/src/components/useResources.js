import {useEffect, useState} from "react";
import axios from "axios";

export default resource => {
  const [resources, setResources] = useState([]);
  const fetchResource = async () => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
    setResources(response.data);
  };

  useEffect(() => {
    fetchResource(resource);
  }, [resource]);

  return resources;
};