import { Component } from "react";

type myState = {
  name: string;
  location: string;
  avatar_url: string;
  login: string;
};
class UserClass extends Component<{}, myState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      login: "",
      name: "",
      location: "",
      avatar_url: "",
    };
  }

  async componentDidMount(): Promise<void> {
    const data = await fetch("https://api.github.com/users/amiteshx08");
    const json = await data.json();

    this.setState({
      name: json.name,
      location: json.location,
      login: json.login,
      avatar_url: json.avatar_url,
    });
  }
  render(): React.ReactNode {
    if (!this.state.avatar_url) return <h2>Loading...</h2>;
    return (
      <div className="user-details">
        <img src={this.state.avatar_url} />
        <h1>Name: {this.state.name}(class)</h1>
        <h2>Location: {this.state.location} (class)</h2>
        <h2>Username: {this.state.login}</h2>
      </div>
    );
  }
}

export default UserClass;
