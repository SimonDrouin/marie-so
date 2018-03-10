import * as React from 'react';
import { SectionsEnumStr } from '../../../constants/navigation';
import { StyleConstants } from '../../../constants/style';
import { connect } from 'react-redux';
import { RootState } from '../../../reducers';
import { bindActionCreators } from 'redux';
import * as NavigationActions from '../../../actions/navigation-actions';
import YouTube from 'react-youtube';
import * as styles from './style.css';


export namespace Player {
    export interface Props {
        actions?: any;
    }

    export interface State {
        /* empty */
    }
}

@connect(mapStateToProps, mapDispatchToProps)
export class Player extends React.Component<Player.Props, Player.State> {

    constructor(props?: Player.Props, context?: any) {
        super(props, context);
    }

    onPlayerReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }

    render() {
        const playerOptions = {
            // height: this.props.screenHeight,
            // width: this.props.screenWidth,
            playerVars: {
                // https://developers.google.com/youtube/player_parameters
                autoplay: 1
            }
        };

        return (
            <YouTube className={styles.mediaPlayer} id="main-player" videoId="2g811Eo7K8U" opts={playerOptions} onReady={this.onPlayerReady} />
        );
    }
}

function mapStateToProps(state: RootState) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(NavigationActions as any, dispatch)
    };
}
