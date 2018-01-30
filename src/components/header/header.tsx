import * as React from 'react';
import { StyleConstants } from '../../constants/style';
import { SectionsEnumStr } from '../../constants/navigation';
import { RootState } from '../../reducers/index';
import { bindActionCreators } from 'redux';
import * as NavigationActions from '../../actions/navigation-actions';
import { connect } from 'react-redux';

export namespace Header {
    export interface Props {
        sections: SectionsEnumStr[];
        logo: any;
        burger: any;
        actions?: any;
        menuIsOpen?: boolean;
    }

    export interface State {
        navigation: {
            menuIsOpen: boolean;
        };
    }
}

@connect(mapStateToProps, mapDispatchToProps)
export class Header extends React.Component<Header.Props, Header.State> {
    constructor(props?: Header.Props, context?: any) {
        super(props, context);
    }

    readonly style: any = {
        overflow: 'hidden',
        position: 'fixed',
        width: '100%',
        height: StyleConstants.TOP_MENU_HEIGHT,
        border: '1px solid black',
        top: '0vh'
    };

    readonly logoStyle: any = {
        display: 'inline-block',
        position: 'fixed',
        left: '0vw'
    };

    readonly menuStyle: any = {
        display: 'inline-block',
        width: 100 / (this.props.sections.length + 1) + 'vw'
    };

    readonly burgerStyle: any = {
        display: 'inline-block',
        position: 'fixed',
        right: '0vw'
    };

    render() {
        const logo = (
            <div style={this.logoStyle}>
                <img src={this.props.logo} height={StyleConstants.TOP_MENU_HEIGHT} />
            </div>
        );

        const menu = this.props.sections.map(section => {
            return (
                <div
                    key={`${section}-header-menu-item`}
                    style={this.menuStyle}
                    onClick={() => {
                        this.props.actions.scroll(section);
                    }}
                >
                    {section}
                </div>
            );
        });

        const burger = (
            <div
                style={this.burgerStyle}
                onClick={() => {
                    this.onBurgerClick();
                }}
            >
                <img src={this.props.burger} height={StyleConstants.TOP_MENU_HEIGHT} />
            </div>
        );

        return (
            <div style={this.style}>
                {logo}
                {this.props.menuIsOpen ? menu : null}
                {burger}
            </div>
        );
    }

    onBurgerClick() {
        this.props.actions.headerBurgerClicked();
    }
}

function mapStateToProps(state: Header.State) {
    return {
        menuIsOpen: state.navigation.menuIsOpen
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(NavigationActions as any, dispatch)
    };
}
