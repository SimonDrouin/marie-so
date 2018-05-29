import * as React from 'react';
import * as styles from './style.css';
import { SectionsEnumStr } from '../../constants/navigation';
import { StyleConstants } from '../../constants/style';
import { connect } from 'react-redux';
import { RootState } from '../../reducers';
import { bindActionCreators } from 'redux';
import { NavigationActions } from '../../actions/navigation-actions';

export namespace Scroller {
    export interface Props {
        sections: SectionsEnumStr[];
        currentSection: SectionsEnumStr;
        navigationActions?: typeof NavigationActions;
    }

    export interface State {
        /* empty */
    }
}

@connect(mapStateToProps, mapDispatchToProps)
export class Scroller extends React.Component<Scroller.Props, Scroller.State> {

    constructor(props?: Scroller.Props, context?: any) {
        super(props, context);
    }

    render() {
        return (
            <div className={`${styles.container} ${this.props.currentSection === this.props.sections[0] ? styles.hide : ""}`}>
                {this.props.sections.filter(section => section !== this.props.sections[0]).map(section => {
                    return (
                        <div key={section} onClick={() => this.props.navigationActions.scrollerItemClicked(section)}>
                            <div className={`${styles.icon} ${this.props.currentSection === section ? styles.selected : ''}`}></div>
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
        navigationActions: bindActionCreators(NavigationActions, dispatch)
    };
}
