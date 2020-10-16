import React from 'react';

import DemoForm from '../../components/DemoForm';

interface ViewProps {}
interface ViewState {
  filled: boolean;
  checked: boolean;
  value: any;
}

class DemoView extends React.Component<ViewProps, ViewState> {
  constructor(props: ViewProps) {
    super(props);

    this.state = {
      filled: false,
      checked: false,
      value: ''
    };
  }

  fill(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>): void {
    const filled =
      e.target.value && e.target.value !== '' && e.target.value.length >= 3 ? true : false;

    const value = e.target.value;

    console.log('value', value);

    console.log('filled', filled);

    this.setState({
      filled,
      value
    });
  }

  check(): void {
    this.setState({
      checked: !this.state.checked
    });
  }

  submit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    alert('Hey there cowboy! Nice seeing you actually filled out this bogus form!');
  }

  render(): any {
    return (
      <DemoForm
        fill={(e: any) => this.fill(e)}
        check={() => this.check()}
        submit={(e: any) => this.submit(e)}
        value={this.state.value}
        filled={this.state.filled}
        checked={this.state.checked}
      />
    );
  }
}

export default DemoView;
