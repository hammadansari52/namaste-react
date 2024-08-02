import useOnlineStatus from "../utils/useOnlineStatus";
import Offline from "./Offline";
const Contact = () => {
  const onlineStatus = useOnlineStatus();
  return onlineStatus === false ? <Offline /> : <h1>Contact Us Page</h1>;
};

export default Contact;