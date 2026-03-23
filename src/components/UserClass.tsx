import { Component } from "react";
type details = {
    name: string,
    location: string
}

class UserClass extends Component<details>{
    constructor(props: details) {
        super(props)
    }
  render(): React.ReactNode {
    return (
      <div className="user-details">
        <h1>{this.props.name}(class)</h1>
        <h2>Location: {this.props.location} (class)</h2>
        <h2>Languages: Hindi, English, Gujarati (class)</h2>
      </div>
    );
  }
}

export default UserClass