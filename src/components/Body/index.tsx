import * as React from 'react';


export namespace Body {
  export interface Props {
  }

  export interface State {
    /* empty */
  }
}

export class Body extends React.Component<Body.Props, Body.State> {

  constructor(props?: Body.Props, context?: any) {
    super(props, context);
  }

  render() {
    return (
        <h1> TEST </h1>
    );
  }
}
