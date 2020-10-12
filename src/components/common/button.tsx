import React from 'react';
import { Colors } from '../../theme/theme';
import { classnames } from '../../util/classname';
import './button.scss'

interface Props {
  onClick:() => void,
  disabled?:boolean,
  color?:Colors,
  size?:'small',
  inline?:boolean
}

interface State {

}

export class Button extends React.Component<Props, State> {
  constructor(props:Props) {
    super(props);
  }

  public render() {
    console.log(this.props.disabled);
    return (
      <div className={classnames('button-container', {'inline': this.props.inline})}>
        <div 
          className={
            classnames('button',
            this.props.color,
            this.props.size,
            {'disabled': this.props.disabled}
            )
          }
          onClick={()=>{ !this.props.disabled && this.props.onClick() }}
        >
          {this.props.children}
        </div>
      </div>
    )
  }

}