import '../theme/common.scss';
import '../theme/index.scss';

import { action } from '@storybook/addon-actions';
import { withConsole } from '@storybook/addon-console';
import { boolean, number, select, text, withKnobs } from '@storybook/addon-knobs';
import { withViewport } from '@storybook/addon-viewport';
import { addDecorator, storiesOf } from '@storybook/react';
import React, { Component } from 'react';
import { Button } from '../components/common/button'; // 这里引入你想展示的组件

addDecorator((storyFn, context) => withConsole()(storyFn)(context));
addDecorator(withViewport());
addDecorator(withKnobs);
addDecorator((storyFn) => <div id="app">{storyFn()}</div>); //todo: add theme switcher

storiesOf('Common Components', module)
  .add('Button', () =>   // 一个 add 表示添加一个 story
    <Button
      onClick={() => console.log('Button!') }
      size="small"
      disabled={boolean('disabled', false)}
    >Button</Button>,
  );