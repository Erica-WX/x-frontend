import * as React from 'react';
import { Button } from './common/button';
import '../theme/common.scss';
import '../theme/index.scss';

export interface Props {
  name?:string;
  company?:string;
}

export class App extends React.Component<Props, {}> {

  public show() {
    console.log('show');
  }

  public render() {
    return (
      <div data-theme="light">
        <h1>
          Hello, React ~ ~ ~
        </h1>
        <Button onClick={() => this.show()}>Test</Button>
      </div>
    );
  }
}
