import React from 'react';

import DemoForm from '../../components/DemoForm';

interface ViewProps {}
interface ViewState {
  filled: boolean;
  checked: boolean;
}

class DemoView extends React.Component<ViewProps, ViewState> {
  constructor(props: any) {
    super(props);

    this.state = {
      filled: false,
      checked: false
    };
  }

  fill(e: any): void {
    console.log('e', e);
    let filled = false;
    if (e.target.value && e.target.value !== '') filled = true;

    this.setState({
      filled
    });
  }

  check(): void {
    this.setState({
      checked: !this.state.checked
    });
  }

  submit(e: any): void {
    e.preventDefault();
    alert('Hey there cowboy! Nice seeing you actually filled out this bogus form!');
  }

  render(): any {
    return (
      <DemoForm
        fill={(e: any) => this.fill(e)}
        check={() => this.check()}
        filled={this.state.filled}
        checked={this.state.checked}
        submit={(e: any) => this.submit(e)}
      />
    );
  }
}

export default DemoView;
