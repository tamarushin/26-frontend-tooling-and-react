import React, {Component, Fragment} from 'react';
import ReactDom from 'react-dom';
import faker from 'faker';
import {DOGE, KISS, KOALA, say} from 'cowsay';
import './style/app.scss';


class App extends Component {

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.updateAnimal = this.updateAnimal.bind(this);

    this.state = {
      content: "",
      cow: "DOGE"
    };
  }

  handleClick() {
    this.setState({
      content: faker.hacker.phrase()
    });
  }

  updateAnimal(event) {
    if (event.target.value === 'giraffe') {
      this.setState({cow: GIRAFFE})
    }

  }

  render() {
    return (
      <Fragment>
        <header>
//         <h1>My </h1>
//       </header>
      
      </Fragment>
    );
  }

}

ReactDom.render(<App />, document.getElementById('root'));
newAnimal(event) {
  if (event.target.value === 'doge') {
    this.setState({ cow: DOGE });
  }
  if (event.target.value === 'kiss') {
    this.setState({ cow: KISS });
  }
  if (event.target.value === 'koala') {
    this.setState({ cow: KOALA });
  };

};

render() {
  return (
    <Fragment>
      <h1>My Animals and a kiss</h1>
      <button onClick={this.handleClick}>Push my BUTTON!</button>
      <select onChange={this.newAnimal}>
        <option value="doge">Get along little doge</option>
        <option value="kiss">K-I-S-S-I-N-G</option>
        <option value="koala">BEAR!</option>
      
      </select>
      <pre>{say({ text: this.state.content, cow: this.state.cow })}</pre>
    </Fragment>
  );
}
