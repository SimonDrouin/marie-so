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

        emailInputValue: string;
        nameInputValue: string;
        subjectInputValue: string;
        emailContentInputValue: string;

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
        const teamMemberIconSize = 120;

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
            //     component: <Player> </Player>,
            //     style: {
            //         paddingLeft: '0px',
            //         paddingRight: '0px'
            //     }
            // },
            {
                id: SectionsEnumStr.AboutCompanySection,
                component: (
                    <div>
                        <div className={styles.sectionHeader}>
                            <h2>À Propos</h2>
                        </div>
                        <div>
                            Fondée en 2017, Eaux Troubles est une boîte de production basée à Montréal qui se spécialise dans le videoclip, la
                            performance et captations lives de groupes de musique. Issue du domaine cinématographique, l'équipe d'Eaux Troubles
                            propose des vidéoclips uniques possédant une vision artistique.
                        </div>
                        <div className={styles.sectionHeader}>
                            <h3>L'Équipe</h3>
                        </div>
                        <div className={`${styles.teamMembersContainer} ${styles.scrollHorizontal} ${styles.scrollItem}`}>
                            <div
                                style={{
                                    paddingLeft: `${
                                        this.props.screenWidth <= 500 ? (this.props.screenWidth - teamMemberIconSize) / 2 : 0
                                    }px`,
                                    paddingRight: `${
                                        this.props.screenWidth <= 500 ? (this.props.screenWidth - teamMemberIconSize) / 2 : 0
                                    }px`
                                }}
                            >
                                <img src={require('./annabelle.svg')} height={120} width={teamMemberIconSize} /> <div>ANABEL B. BOIVIN</div>{' '}
                            </div>
                            <div
                                style={{
                                    paddingRight: `${
                                        this.props.screenWidth <= 500 ? (this.props.screenWidth - teamMemberIconSize) / 2 : 0
                                    }px`
                                }}
                            >
                                <img src={require('./charles.svg')} height={120} width={teamMemberIconSize} /> <div>CHARLES TYSON</div>{' '}
                            </div>
                            <div style={{
                                    paddingRight: `${
                                        this.props.screenWidth <= 500 ? (this.props.screenWidth - teamMemberIconSize) / 2 : 0
                                    }px`
                                }}>
                                <img src={require('./guillaume.svg')} height={120} width={teamMemberIconSize} />{' '}
                                <div>GUILLAUME L.-MERCIER</div>{' '}
                            </div>
                            <div style={{
                                    paddingRight: `${
                                        this.props.screenWidth <= 500 ? (this.props.screenWidth - teamMemberIconSize) / 2 : 0
                                    }px`
                                }}>
                                <img src={require('./juliette.svg')} height={120} width={teamMemberIconSize} /> <div>JULIETTE BLONDEAU</div>{' '}
                            </div>
                            <div style={{
                                    paddingRight: `${
                                        this.props.screenWidth <= 500 ? (this.props.screenWidth - teamMemberIconSize) / 2 : 0
                                    }px`
                                }}>
                                <img src={require('./marc.svg')} height={120} width={teamMemberIconSize} /> <div>MARC-ANDRÉ MORISSETTE</div>{' '}
                            </div>
                            <div style={{
                                    paddingRight: `${
                                        this.props.screenWidth <= 500 ? (this.props.screenWidth - teamMemberIconSize) / 2 : 0
                                    }px`
                                }}>
                                <img src={require('./marie-soleil.svg')} height={120} width={teamMemberIconSize} />{' '}
                                <div>MARIE-SOLEIL CHOQUETTE</div>{' '}
                            </div>
                        </div>
                    </div>
                )
            },
            // {
            //     id: SectionsEnumStr.LibrarySection,
            //     component: <div>Nos Realisations</div>
            // },
            {
                id: SectionsEnumStr.ContactUsSection,
                component: <div className={styles.contactSection}>
                    <div className={styles.sectionHeader}>
                        <h2> Nous Contacter </h2>
                    </div>
                    <div>
                        <div className={styles.contactInfos}>
                            <h3>NOTRE BUREAU</h3>
                            <div>
                                <div>
                                    Marie-Soleil Choquette - Coordonatrice
                                </div>
                                <div>
                                    / 514.475.2140
                                </div>
                                <div>
                                    info@eauxtroubles.ca
                                </div>
                            </div>
                        </div>
                        <div className={styles.formStyle}>
                            <div className={styles.contactFormSection}>
                                <div>
                                    <div>
                                        NOM
                                    </div>
                                    <input type="text" name="name" value={this.props.nameInputValue} onChange={(e) => this.props.actions.contactUsNameInputValueChanged(e.target.value)} />
                                </div>
                                <div className={styles.contactFormField}>
                                    <div>
                                        E-MAIL
                                    </div>
                                    <input type="text" name="email" value={this.props.emailInputValue} onChange={(e) => this.props.actions.contactUsEmailInputValueChanged(e.target.value)} />
                                </div>
                                <div className={styles.contactFormField}>
                                    <div>
                                        SUJET
                                    </div>
                                    <input type="text" name="subject" value={this.props.subjectInputValue} onChange={(e) => this.props.actions.contactUsSubjectInputValueChanged(e.target.value)} />
                                </div>
                            </div>
                            <div className={styles.contactFormSection}>
                                <div>
                                    <div>
                                        TEXTE
                                    </div>
                                    <div>
                                        <textarea name="content" value={this.props.emailContentInputValue} onChange={(e) => this.props.actions.contactUsEmailContentInputValueChanged(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
        screenWidth: state.window.screenWidth,

        emailInputValue: state.contactUsForm.emailInputValue,
        nameInputValue: state.contactUsForm.nameInputValue,
        subjectInputValue: state.contactUsForm.subjectInputValue,
        emailContentInputValue: state.contactUsForm.emailContentInputValue
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions as any, dispatch)
    };
}
