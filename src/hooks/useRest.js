import axios from "axios";
import { useEffect, useState } from "react"


const useRest = (url, state=null) => {

  const [values, setValues] = useState();

  useEffect(() => {
    axios.get(url)
    .then(res => setValues(res.data)) 
    .catch(err => console.log(err));
  }, [state])
  
  return values;
}

export default useRest