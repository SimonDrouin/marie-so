import * as React from 'react';
import YouTube from 'react-youtube';


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
    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };

    const style = {
      "text-align": "center"
    };

    return (
      <div style={style}>
        <YouTube
          videoId="2g811Eo7K8U"
          opts={opts}
          onReady={this._onReady}
        />
      </div>
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}
