import React, {Component} from 'react';
import styles from './fancyButton.scss'

class Button extends Component {

  render() {
    return (
        <button className={styles.button}>{this.props.label}</button>
    );
  }
}

export default Button;