import * as React from 'react';
import { StyleConstants } from '../../constants/style';
import { SectionsEnumStr } from '../../constants/navigation';
import { RootState } from '../../reducers/index';
import { bindActionCreators } from 'redux';
import * as NavigationActions from '../../actions/navigation-actions';
import { connect } from 'react-redux';
import * as styles from './style.css';
import * as Actions from '../../actions';

export namespace Header {
    export interface Props {
        sections: SectionsEnumStr[];
        logo: any;
        burger: any;
        currentSection?: SectionsEnumStr;
        menuIsOpen?: boolean;

        navigationActions?: typeof Actions.NavigationActions;
    }

    export interface State {
        navigation: {
            currentSection: SectionsEnumStr;
            menuIsOpen: boolean;
        };
    }
}

@connect(mapStateToProps, mapDispatchToProps)
export class Header extends React.Component<Header.Props, Header.State> {
    constructor(props?: Header.Props, context?: any) {
        super(props, context);
    }

    readonly logoStyle: any = {
        position: 'fixed',
        left: '0px',
        top: '0px',
        paddingLeft: StyleConstants.TOP_MENU_ITEM_PADDING
    };

    readonly burgerStyle: any = {
        height: '40px',
        width: '40px',
        position: 'fixed',
        right: '0px',
        top: '0px',
        padding: StyleConstants.TOP_MENU_BURGER_PADDING
    };

    render() {
        const logo = (
            <div className={`${styles.logo}`} style={this.logoStyle}>
                <img src={this.props.logo} width='100px'/>
            </div>
        );

        // todo
        const sectionToNameMapping = {}
        sectionToNameMapping[SectionsEnumStr.AboutCompanySection] = "À propos"
        sectionToNameMapping[SectionsEnumStr.ContactUsSection] = "Nous contacter"
        sectionToNameMapping[SectionsEnumStr.LibrarySection] = "Nos Réalisations"

        const menu = <div className={styles.menuContainer}>
            {this.props.sections.filter(section => section !== this.props.sections[0]).map(section => {
                return (
                    <div key={`${section}-header-menu-item`}
                        className={styles.item}
                        onClick={() => {
                            this.props.navigationActions.scrollerItemClicked(section);
                        }}
                    >
                        {sectionToNameMapping[section]}
                    </div>
                );
            })}
        </div>

        const burger = (
            <div
                style={this.burgerStyle}
                onClick={() => {
                    this.onBurgerClick();
                }}
            >
                <img src={this.props.burger} />
            </div>
        );

        return (
            <div className={`${styles.container} ${this.props.currentSection === this.props.sections[0] ? styles.hide : ""}`} >
                {this.props.menuIsOpen ? menu : null}
                {burger} {/* TODO: on menu open replace with close icon */}
            </div>
        );
    }

    onBurgerClick() {
        this.props.navigationActions.headerBurgerClicked();
    }
}

function mapStateToProps(state: Header.State) {
    return {
        menuIsOpen: state.navigation.menuIsOpen,
        currentSection: state.navigation.currentSection
    };
}

function mapDispatchToProps(dispatch) {
    return {
        navigationActions: bindActionCreators(Actions.NavigationActions, dispatch)
    };
}
