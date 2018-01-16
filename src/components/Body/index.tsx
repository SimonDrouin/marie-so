import * as React from 'react';
import * as styles from './style.css';
import YouTube from 'react-youtube';
import { StyleConstants } from '../../constants/style';


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
    const playerOptions = {
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };

    return (
      <div className={styles.main}>
        <div className={styles.section}> Bigass Fish </div>
        <div className={styles.section}>
          <YouTube
            videoId="2g811Eo7K8U"
            opts={playerOptions}
            onReady={this._onReady}
          />
        </div>
        <div className={styles.section}>
          <div> <h1> A propos </h1> </div>
          <div> Fondée en 2017, Eaux Troubles est une boîte de production basée à Montréal qui se spécialise dans le videoclip, la performance et captations lives de groupes de musique. Issue du domaine cinématographique, l'équipe d'Eaux Troubles propose des vidéoclips uniques possédant une vision artistique. </div>
        </div>
        <div className={styles.section}> Eaux Troubles C'est </div>
        <div className={styles.section}> Nos Realisations </div>
        <div className={styles.section}>  Nous Contacter </div>
      </div>
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}
