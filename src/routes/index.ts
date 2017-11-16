import { Route } from '../../types';
import { MainSection } from '../components/Todos/MainSection';
import { MainApp } from '../containers/MainApp';
import { TodoApp } from '../containers/TodoApp';

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

const Todos: Route = {
    name: 'Todos',
    path: '/Todos',
    component: TodoApp as any
}

export default [
    Base,
    Home,
    Todos,
]