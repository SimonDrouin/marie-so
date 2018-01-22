import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router';
import { createBrowserHistory } from 'history';
import { configureStore } from './store';
import Routes from './routes';

const store = configureStore();
const history = createBrowserHistory();
// const scroller = createScrollMiddleware();

const _appRoutes = Routes.map(route => <Route path={route.path} component={route.component as any} key={route.path} />);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Switch>{_appRoutes}</Switch>
        </Router>
    </Provider>,
    document.getElementById('root')
);
