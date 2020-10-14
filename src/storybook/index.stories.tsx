import '../theme/common.scss';
import '../theme/index.scss';

import { action } from '@storybook/addon-actions';
import { withConsole } from '@storybook/addon-console';
import { boolean, number, select, text, withKnobs } from '@storybook/addon-knobs';
import { withViewport } from '@storybook/addon-viewport';
import { addDecorator, storiesOf } from '@storybook/react';
import React, { Component } from 'react';
// import { Button } from '../components/common/button'; // 这里引入你想展示的组件
import { InputText } from '../components/common/input/text';

import { Button } from 'antd';

addDecorator((storyFn, context) => withConsole()(storyFn)(context));
addDecorator(withViewport());
addDecorator(withKnobs);
addDecorator((storyFn) => <div id="app">{storyFn()}</div>); //todo: add theme switcher

storiesOf('Common Components', module)
  // .add('Button', () =>   // 一个 add 表示添加一个 story
  //   <Button
  //     onClick={() => console.log('Button!') }
  //     size="small"
  //     disabled={boolean('disabled', false)}
  //   >Button</Button>,
  // )
  .add('Button', () =>
    <Button type="primary">Primary</Button>,
  )
  .add('InputText', () =>
  (React.createElement(class extends React.Component<{}, { value:string, value2:string }> {
    public state = {
      value: '',
      value2: '',
    };
    public render() {
      const placeholderCentered = boolean('placeholderCentered', true);
      const withLabel = boolean('withLabel', true);
      return (
        <div>
          <p>type: default</p>
          <InputText
            label={withLabel ? <i className="fa fa-search" /> : null}
            value={this.state.value}
            placeholder="placeholder"
            placeholderCentered={placeholderCentered}
            style={{
              height: '30px',
            }}
            onChange={(value) => {
              this.setState({
                value,
              });
            }}
            onConfirm={() =>
              console.log('onConfirm')
            }
            onClick={() =>
              console.log('onClick')
            }
            onKeyDown={() =>
              console.log('onKeyDown')
            }
          />
          <br/>
          <p>type: wide</p>
          <InputText
            value={this.state.value2}
            placeholder="placeholder"
            styleType="wide"
            info="here goes some info msg"
            warning="here goes some warnings"
            onChange={(value2) => {
              this.setState({
                value2,
              });
            }}
            onConfirm={() =>
              console.log('onConfirm')
            }
            onClick={() =>
              console.log('onClick')
            }
            onKeyDown={() =>
              console.log('onKeyDown')
            }
          />
        </div>);
    }
  })),
  )
  ;