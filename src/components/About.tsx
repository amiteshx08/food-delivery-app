import User from "./User"
import UserClass from "./UserClass";
const About = () => {
  return (
    <div>
      <h1>Welcome, to our page</h1>
      <h2>React is so fun</h2>
      <User name="Amitesh" location="baroda"/>
      <UserClass name={"Amitesh"} location="vadodara"/>
    </div>
  );
};

export default About;
