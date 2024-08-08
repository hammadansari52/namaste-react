import { useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import Offline from "./Offline";
const Contact = () => {
  const onlineStatus = useOnlineStatus();
  const [count, setCount] = useState(0);
  return (<div>
    <h1>{count}</h1>
    <button onClick={()=>{
      setCount(count+1);
    }}>Increase</button>
    <button onClick={()=>{
      setCount(count-1);
    }}>Decrease</button>
  </div>)

};

export default Contact;