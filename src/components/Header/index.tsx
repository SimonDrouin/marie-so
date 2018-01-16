import * as React from 'react';
import { StyleConstants } from '../../constants/style';


export namespace Header {
  export interface Props {
  }

  export interface State {
    /* empty */
  }
}

export class Header extends React.Component<Header.Props, Header.State> {

  constructor(props?: Header.Props, context?: any) {
    super(props, context);
  }

  readonly style: any = {
    overflow: 'hidden',
    position: 'fixed',
    width: '100%',
    height: StyleConstants.TOP_MENU_HEIGHT,
    border: '1px solid black'
  }

  render() {
    return (
        <div style={this.style}>
            HEADER
        </div>
    );
  }
}
