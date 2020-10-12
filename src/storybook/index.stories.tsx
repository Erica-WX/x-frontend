import '../theme/common.scss';
import '../theme/index.scss';

import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '../components/common/button'; // 这里引入你想展示的组件

storiesOf('Common Components', module)
  .add('Button', () =>   // 一个 add 表示添加一个 story
    <Button
      onClick={() => console.log('Button!') }
      size="small"
      disabled
    >Button</Button>,
  );