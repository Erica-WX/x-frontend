import React from 'react';

interface Props {
}

interface State {
}

export class Form extends React.Component<Props, State> {

  constructor(props:Props) {
    super(props);
  }

  public render() {

    return (
      <form action="">
        {this.props.children}
      </form>
    );
  }
}