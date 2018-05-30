import * as React from 'react';
import * as _ from 'lodash';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { RootState } from '../../reducers';
import { Header, Body, Scroller, Player, Footer } from '../../components';
import { SectionsEnumStr, StyleConstants } from '../../constants';
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

        actions: typeof Actions;
    }

    export interface State {}
}

@connect(mapStateToProps, mapDispatchToProps)
export class MainApp extends React.Component<MainApp.Props, MainApp.State> {
    onScroll() {
        this.props.actions.NavigationActions.scroll();
    }

    onResize() {
        this.props.actions.WindowActions.resize();
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

    formIsValid(name, email, subject, content) {
        return name !== '' && email !== '' && subject !== '' && content !== '';
    }

    onSubmitContactInfos(name, email, subject, content) {
        if (!this.formIsValid(name, email, subject, content)) {
            console.warn('Invalid form');
            return;
        }

        fetch('https://eaux-troubles.firebaseapp.com/api/sendEmail', {
            method: 'POST',
            body: JSON.stringify({
                name: name,
                email: email,
                subject: subject,
                content: content
            }),
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'same-origin'
        });
    }

    render() {
        const teamMemberIconSize = 120;
        const teamMemberIcon = {
            width: '200px',
            paddingLeft: `${this.props.screenWidth <= 500 ? (this.props.screenWidth - 200) / 2 : '20'}px`,
            paddingRight: `${this.props.screenWidth <= 500 ? (this.props.screenWidth - 200) / 2 : '20'}px`
        };

        const SECTIONS = [
            {
                id: SectionsEnumStr.WelcomeSection,
                component: <img className={styles.mainLogo} src={logo} />,
                style: {
                    padding: '0px'
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
                            <h2>À PROPOS</h2>
                        </div>
                        <div>
                            Fondée en 2017, Eaux Troubles est une boîte de production basée à Montréal qui se spécialise dans le videoclip,
                            la performance et captations lives de groupes de musique. Issue du domaine cinématographique, l'équipe d'Eaux
                            Troubles propose des vidéoclips uniques possédant une vision artistique.
                        </div>
                        <div className={styles.sectionHeader}>
                            <h3>L'ÉQUIPE</h3>
                        </div>
                        <div className={`${styles.teamMembersContainer} ${styles.scrollHorizontal} ${styles.scrollItem}`}>
                            <div style={teamMemberIcon}>
                                <img src={require('./annabelle.svg')} height={120} width="200" /> <div>ANABEL B. BOIVIN</div>{' '}
                            </div>
                            <div style={teamMemberIcon}>
                                <img src={require('./juliette.svg')} height={120} width="200" /> <div>JULIETTE BLONDEAU</div>{' '}
                            </div>
                            <div style={teamMemberIcon}>
                                <img src={require('./marie-soleil.svg')} height={120} width="200" /> <div>MARIE-SOLEIL CHOQUETTE</div>{' '}
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
                component: (
                    <div className={styles.contactSection}>
                        <div className={styles.sectionHeader}>
                            <h2> Nous Contacter </h2>
                        </div>
                        <div>
                            <div>
                                <h3>NOTRE BUREAU</h3>
                                <div>
                                    <div>Marie-Soleil Choquette - Coordonnatrice</div>
                                    <div>/ 514.475.2140</div>
                                    <div>info@eauxtroubles.ca</div>
                                </div>
                            </div>
                            <div className={`${styles.formStyle}`}>
                                <div className={`${styles.contactFormSection} ${styles.flexContainer} ${styles.wrap}`}>
                                    <div>
                                        <div>NOM</div>
                                        <input
                                            type="text"
                                            name="name"
                                            value={this.props.nameInputValue}
                                            onChange={e => this.props.actions.FormActions.contactUsNameInputValueChanged(e.target.value)}
                                        />
                                    </div>
                                    <div className={styles.contactFormField}>
                                        <div>E-MAIL</div>
                                        <input
                                            type="text"
                                            name="email"
                                            value={this.props.emailInputValue}
                                            onChange={e => this.props.actions.FormActions.contactUsEmailInputValueChanged(e.target.value)}
                                        />
                                    </div>
                                    <div className={styles.contactFormField}>
                                        <div>SUJET</div>
                                        <input
                                            type="text"
                                            name="subject"
                                            value={this.props.subjectInputValue}
                                            onChange={e => this.props.actions.FormActions.contactUsSubjectInputValueChanged(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className={`${styles.contactFormSection}`}>
                                    <div>
                                        <div>TEXTE</div>
                                        <div>
                                            <textarea
                                                name="content"
                                                value={this.props.emailContentInputValue}
                                                onChange={e => this.props.actions.FormActions.contactUsEmailContentInputValueChanged(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className={`${styles.contactFormSection} ${styles.alignRight}`}>
                                    <a
                                        className={`${styles.buttonLarge} ${styles.showHideAnimation} ${styles.submit}
                                            ${
                                                this.formIsValid(
                                                    this.props.nameInputValue,
                                                    this.props.emailInputValue,
                                                    this.props.subjectInputValue,
                                                    this.props.emailContentInputValue
                                                )
                                                    ? ''
                                                    : styles.hide
                                            }`}
                                        onClick={() =>
                                            this.onSubmitContactInfos(
                                                this.props.nameInputValue,
                                                this.props.emailInputValue,
                                                this.props.subjectInputValue,
                                                this.props.emailContentInputValue
                                            )
                                        }
                                    >
                                        ENVOYER
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        ];

        // todo
        const footerStyle = {
            height: '10vh'
        };
        return (
            <div className={styles.wrapper}>
                <Scroller sections={SECTIONS.map(({ id }) => id)} currentSection={this.props.currentSection} />
                <Header sections={SECTIONS.map(({ id }) => id)} logo={require('./logo-main.svg')} burger={require('./burger-header.svg')} />
                <Body sections={SECTIONS} />
                <div style={footerStyle}>
                </div>
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
        actions: {
            WindowActions: bindActionCreators(Actions.WindowActions, dispatch),
            NavigationActions: bindActionCreators(Actions.NavigationActions, dispatch),
            FormActions: bindActionCreators(Actions.FormActions, dispatch)
        }
    };
}
