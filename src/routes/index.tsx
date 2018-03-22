import { Route } from '../../types';
import { MainApp } from '../containers/MainApp';

const Base: Route = {
    name: 'Base',
    path: '/',
    component: MainApp as any
};

const Home: Route = {
    name: 'Home',
    path: '/Home',
    component: MainApp as any
};

export default [Base, Home];
