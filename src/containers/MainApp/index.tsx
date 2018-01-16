import * as React from 'react';
import * as TodoActions from '../../actions/todos';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { RootState } from '../../reducers';
import { Header, Body, TodoHeader, TodoMainSection } from '../../components';

import * as styles from './style.css';


export namespace MainApp {
  export interface Props extends RouteComponentProps<void> {
  }

  export interface State {
    /* empty */
  }
}

@connect(mapStateToProps, mapDispatchToProps)
export class MainApp extends React.Component<MainApp.Props, MainApp.State> {

  render() {

    return (
      <div className={styles.wrapper}>
        <Header />
        <Body />
      </div>
    );
  }
}

function mapStateToProps(state: RootState) {
  return {

  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions as any, dispatch)
  };
}
