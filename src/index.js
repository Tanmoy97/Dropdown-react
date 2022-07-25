import React from "react";
import ReactDOM from "react-dom";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "Select" };

  }

  handleSubmit(event) {
    event.preventDefault();
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (

      <form style={{ color: "red", padding: '20px', marginLeft: '35%', marginTop: '10%', fontSize: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', backgroundColor: '#ccc', width: '450px' }} onSubmit={this.handleSubmit}>
        <label style={{ margin: '20px' }}>
          Should you use a Dropdown
        </label>
        <select defaultValue={"Select"} style={{ width: '200px', marginLeft: '25%', height: '30px', borderRadius: '20px', marginBottom: '30px', textAlign: 'center' }} value={this.state.value} onChange={this.handleChange}>
          <option value="Select">Select</option>
          <option value="YES">YES</option>
          <option value="NO">NO</option>
          <option value="Probably not">Probably not</option>

        </select>
        <input style={{ width: '100px', marginLeft: '35%', height: '30px', borderRadius: '20px', marginBottom: '30px' }} type="submit" value="Submit" />
      </form>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));