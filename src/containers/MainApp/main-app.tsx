import * as React from 'react';
import * as _ from 'lodash';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { RootState } from '../../reducers';
import { Header, Body, Scroller, Player } from '../../components';
import { SectionsEnumStr } from '../../constants/navigation';
import { StyleConstants } from '../../constants/style';
import * as Actions from '../../actions';

import * as styles from './style.css';
const logo = require('./logo-main.svg');

export namespace MainApp {
    export interface Props extends RouteComponentProps<void> {
        currentSection: SectionsEnumStr;
        sections: SectionsEnumStr[];
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
        this.props.actions.scroll();
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
        const SECTIONS = [
            {
                id: SectionsEnumStr.WelcomeSection,
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
            // {
            //     id: SectionsEnumStr.HighlightSection,
            //     component: <YouTube id="main-player" videoId="2g811Eo7K8U" opts={playerOptions} onReady={this.onPlayerReady} />,
            //     style: {
            //         width: '80%',
            //         height: '80%',
            //         margin: '10%'
            //     }
            // },
            {
                id: SectionsEnumStr.HighlightSection,
                component: <Player> </Player>,
                style: {
                    paddingLeft: '0px',
                    paddingRight: '0px'
                }
            },
            {
                id: SectionsEnumStr.AboutCompanySection,
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
                id: SectionsEnumStr.AboutTeamSection,
                component: (
                    <div>
                        <div>
                            {' '}
                            <h2> Eaux Troubles C'est</h2>{' '}
                        </div>
                        <div className={styles.teamMembersContainer}>
                            <div>
                                <img src={require('./annabelle.svg')} height={120} width={120} /> <div>ANABEL B. BOIVIN</div>{' '}
                            </div>
                            <div>
                                <img src={require('./charles.svg')} height={120} width={120} /> <div>CHARLES TYSON</div>{' '}
                            </div>
                            <div>
                                <img src={require('./guillaume.svg')} height={120} width={120} /> <div>GUILLAUME L.-MERCIER</div>{' '}
                            </div>
                            <div>
                                <img src={require('./juliette.svg')} height={120} width={120} /> <div>JULIETTE BLONDEAU</div>{' '}
                            </div>
                            <div>
                                <img src={require('./marc.svg')} height={120} width={120} /> <div>MARC-ANDRÉ MORISSETTE</div>{' '}
                            </div>
                            <div>
                                <img src={require('./marie-soleil.svg')} height={120} width={120} /> <div>MARIE-SOLEIL CHOQUETTE</div>{' '}
                            </div>
                        </div>
                    </div>
                )
            },
            {
                id: SectionsEnumStr.LibrarySection,
                component: <div>Nos Realisations</div>
            },
            {
                id: SectionsEnumStr.ContactUsSection,
                component: <div>Nous Contacter</div>
            }
        ];
        const header = (
            <Header sections={SECTIONS.map(({ id }) => id)} logo={require('./logo-main.svg')} burger={require('./burger-header.svg')} />
        );

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
