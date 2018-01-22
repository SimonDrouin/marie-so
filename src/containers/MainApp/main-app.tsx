import * as React from 'react';
import * as _ from 'lodash';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { RootState } from '../../reducers';
import { Header, Body, Scroller } from '../../components';
import { SectionsEnum } from '../../constants/navigation';
import YouTube from 'react-youtube';
import { StyleConstants } from '../../constants/style';
import * as Actions from '../../actions';

import * as styles from './style.css';
const logo = require('./logo-main.jpg');

export namespace MainApp {
    export interface Props extends RouteComponentProps<void> {
        currentSection: SectionsEnum;
        sections: SectionsEnum[];
        screenHeight: number;
        screenWidth: number;
        offsetY: number;
        showHeaders: boolean;

        actions?: any;
    }

    export interface State {}
}

@connect(mapStateToProps, mapDispatchToProps)
export class MainApp extends React.Component<MainApp.Props, MainApp.State> {
    onScroll() {
        let shouldShowHeaders = window.pageYOffset >= this.props.screenHeight;

        if ((!this.props.showHeaders && shouldShowHeaders) || (this.props.showHeaders && !shouldShowHeaders)) {
            this.props.actions.showHeaders();
        }

        // NOOP
    }

    onResize() {
        this.props.actions.resize();
    }

    componentDidMount() {
        window.addEventListener('scroll', () => {
            this.onScroll();
        });

        window.addEventListener('resize', () => {
            this.onResize();
        });
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', () => {
            this.onScroll();
        });

        window.removeEventListener('resize', () => {
            this.onResize();
        });
    }

    onPlayerReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }

    render() {
        let playerOptions = {
            height: this.props.screenHeight,
            width: this.props.screenWidth,
            playerVars: {
                // https://developers.google.com/youtube/player_parameters
                autoplay: 1
            }
        };

        let SECTIONS = [
            {
                id: SectionsEnum.WelcomeSection,
                component: (
                    <div>
                        <img src={logo} height={this.props.screenHeight} width={this.props.screenWidth} />
                    </div>
                ),
                style: {
                    paddingLeft: '0px',
                    paddingRight: '0px'
                }
            },
            {
                id: SectionsEnum.HighlightSection,
                component: <YouTube videoId="2g811Eo7K8U" opts={playerOptions} onReady={this.onPlayerReady} />,
                style: {
                    paddingLeft: '0px',
                    paddingRight: '0px'
                }
            },
            {
                id: SectionsEnum.AboutCompanySection,
                component: (
                    <div>
                        {' '}
                        Fondée en 2017, Eaux Troubles est une boîte de production basée à Montréal qui se spécialise dans le videoclip, la
                        performance et captations lives de groupes de musique. Issue du domaine cinématographique, l'équipe d'Eaux Troubles
                        propose des vidéoclips uniques possédant une vision artistique.{' '}
                    </div>
                )
            },
            {
                id: SectionsEnum.AboutTeamSection,
                component: <div>Eaux Troubles C'est</div>
            },
            {
                id: SectionsEnum.LibrarySection,
                component: <div>Nos Realisations</div>
            },
            {
                id: SectionsEnum.ContactUsSection,
                component: <div>Nous Contacter</div>
            }
        ];
        const header = <Header sections={SECTIONS.map(({ id }) => id)} image={require('./logo-header.jpg')} />;

        return (
            <div className={styles.wrapper}>
                <Scroller sections={SECTIONS.map(({ id }) => id)} currentSection={this.props.currentSection} />
                {this.props.showHeaders ? header : null}
                <Body sections={SECTIONS} />
            </div>
        );
    }
}

function mapStateToProps(state: RootState) {
    return {
        currentSection: state.navigation.currentSection,
        showHeaders: state.navigation.showHeaders,
        screenHeight: state.window.screenHeight,
        screenWidth: state.window.screenWidth
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions as any, dispatch)
    };
}
