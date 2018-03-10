import * as React from 'react';
import * as styles from './navbar-style.css';
import { SectionsEnumStr } from '../../constants/navigation';
import { StyleConstants } from '../../constants/style';
import { connect } from 'react-redux';
import { RootState } from '../../reducers';
import { bindActionCreators } from 'redux';
import * as NavigationActions from '../../actions/navigation-actions';

export namespace Scroller {
    export interface Props {
        sections: SectionsEnumStr[];
        currentSection: SectionsEnumStr;
        actions?: any;
    }

    export interface State {
        /* empty */
    }
}

@connect(mapStateToProps, mapDispatchToProps)
export class Scroller extends React.Component<Scroller.Props, Scroller.State> {
    readonly style: any = {
        padding: '20px',
        overflow: 'hidden',
        position: 'fixed',
        right: '0vw',
        top: '50vh',
        border: '1px solid black',
        zIndex: '1000'
    };

    constructor(props?: Scroller.Props, context?: any) {
        super(props, context);
    }

    render() {
        return (
            <div style={this.style}>
                {this.props.sections.map(section => {
                    return (
                        <div key={section} onClick={() => this.props.actions.scrollerItemClicked(section)}>
                            <div>{this.props.currentSection === section ? 'O' : 'o'}</div>
                        </div>
                    );
                })}
            </div>
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
