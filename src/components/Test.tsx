import * as React from "react"

export interface Props {
  name?: string
  company?: string
}

export class Test extends React.Component<Props, {}> {
  render() {
    return (
      <div>
        Hello, React ~ ~ ~
      </div>
    )
  }
}

