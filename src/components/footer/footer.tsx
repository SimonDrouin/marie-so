import * as React from 'react';
import { StyleConstants } from '../../constants/style';
import { RootState } from '../../reducers/index';
import { bindActionCreators } from 'redux';
import * as NavigationActions from '../../actions/navigation-actions';
import { connect } from 'react-redux';
import * as styles from './style.css';

export namespace Footer {
    export interface Props {}

    export interface State {}
}

@connect(mapStateToProps, mapDispatchToProps)
export class Footer extends React.Component<Footer.Props, Footer.State> {
    constructor(props?: Footer.Props, context?: any) {
        super(props, context);
    }

    render() {
        return (
            <div style={styles.footer}></div>
        );
    }
}

function mapStateToProps(state: Footer.State) {
    return {
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(NavigationActions as any, dispatch)
    };
}
