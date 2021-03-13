import React, { Component } from 'react';
import { IconCheckmark } from '../../components';

const preventDefault = e => {
  e.preventDefault();
};

const hashLink = '#';
class InteractiveButton extends Component {
  constructor(props) {
    super(props);
    this.inProgressTimeoutId = null;
    this.readyTimeoutId = null;
    this.state = { inProgress: false, disabled: false, ready: false };
  }
  componentWillUnmount() {
    window.clearTimeout(this.inProgressTimeoutId);
    window.clearTimeout(this.readyTimeoutId);
  }
  render() {
    const handleClick = () => {
      window.clearTimeout(this.inProgressTimeoutId);
      window.clearTimeout(this.readyTimeoutId);
      this.setState({ inProgress: true, disabled: true });
      this.inProgressTimeoutId = window.setTimeout(() => {
        this.setState({ inProgress: false, disabled: false, ready: true });
        this.readyTimeoutId = window.setTimeout(() => {
          this.setState({ inProgress: false, disabled: false, ready: false });
        }, 2000);
      }, 2000);
    };

    return (
      <button {...this.state} onClick={handleClick}>
        Click me
      </button>
    );
  }
}

const ButtonsComponent = () => {
  return (
    <div>
      <h3>Interactive button:</h3>
      <InteractiveButton />

      <h3>Button with a translation:</h3>
      <button>
        <span>Clique moi</span>
      </button>

      <h3>Button with an icon and a text:</h3>
      <button>
        <IconCheckmark rootClassName={css.customIcon} />
        <span>Custom text</span>
      </button>

      <h3>Default button:</h3>
      <button>Click me</button>

      <h3>Default button disabled:</h3>
      <button disabled>Click me</button>

      <h3>Default button in progress:</h3>
      <button inProgress>Click me</button>

      <h3>Default button ready:</h3>
      <button ready>Click me</button>

      <h3>Default button disabled and in progress:</h3>
      <button disabled inProgress>
        Click me
      </button>

      <h3>Default button disabled and ready:</h3>
      <button disabled ready>
        Click me
      </button>

      <h3>Primary button:</h3>
      <Primarybutton>Click me</Primarybutton>

      <h3>Primary button disabled:</h3>
      <Primarybutton disabled>Click me</Primarybutton>

      <h3>Primary button in progress:</h3>
      <Primarybutton inProgress>Click me</Primarybutton>

      <h3>Primary button ready:</h3>
      <Primarybutton ready>Click me</Primarybutton>

      <h3>Primary button disabled and in progress:</h3>
      <Primarybutton disabled inProgress>
        Click me
      </Primarybutton>

      <h3>Primary button disabled and ready:</h3>
      <Primarybutton disabled ready>
        Click me
      </Primarybutton>

      <h3>Secondary button:</h3>
      <Secondarybutton>Click me</Secondarybutton>

      <h3>Secondary button disabled:</h3>
      <Secondarybutton disabled>Click me</Secondarybutton>

      <h3>Secondary button in progress:</h3>
      <Secondarybutton inProgress>Click me</Secondarybutton>

      <h3>Secondary button ready:</h3>
      <Secondarybutton ready>Click me</Secondarybutton>

      <h3>Secondary button disabled and in progress:</h3>
      <Secondarybutton disabled inProgress>
        Click me
      </Secondarybutton>

      <h3>Secondary button disabled and ready:</h3>
      <Secondarybutton disabled ready>
        Click me
      </Secondarybutton>

      <h3>Inline text button:</h3>
      <p>
        Lorem ipsum <InlineTextbutton>button that looks like link</InlineTextbutton> dolor sit amet
      </p>
      <p>
        Lorem ipsum{' '}
        <a href={hashLink} onClick={preventDefault}>
          a normal link
        </a>{' '}
        dolor sit amet
      </p>

      <h3>Link that looks like a default button:</h3>
      <a href={hashLink} onClick={preventDefault}>
        Click me
      </a>

      <h3>Translated link that looks like a default button:</h3>
      <a href={hashLink} onClick={preventDefault}>
        <span>Clique moi</span>
      </a>

      <h3>Link that looks like a primary button:</h3>
      <a href={hashLink} onClick={preventDefault}>
        Click me
      </a>

      <h3>Link that looks like a secondary button:</h3>
      <a href={hashLink} onClick={preventDefault}>
        Click me
      </a>

      <h3>button with custom styles:</h3>
      <button>Click me</button>
    </div>
  );
};

export const Buttons = {
  component: ButtonsComponent,
  group: 'buttons',
};
