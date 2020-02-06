import {useState, useEffect} from 'react';
import axios from 'axios';

const useResources = (resource) => {
    const [resources, setResources] = useState([]); //initilize state on empty array

    useEffect( () => { //lifecycle method
        (async resource => {
            const response = await axios.get (
                `http://jsonplaceholder.typicode.com/${resource}`
            )
            setResources(response.data)
        })(resource)
    }, [resource] )
    return resources
}

export default useResources;