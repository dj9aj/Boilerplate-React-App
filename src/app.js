import React, {Component, Fragment} from 'react';
import Button from "./Button/Button";
import styles from './styles/main.scss';
import FancyButton from "./fancyButton/fancyButton";

const content = 'Hello world!';

class App extends Component {
  render() {
    return (
      <Fragment>
        <div>{content}</div>
        <Button label="Regular Button"/>
        <FancyButton label="Fancy Button"/>
      </Fragment>
    );
  }
}

export default App;