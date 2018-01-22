import * as React from 'react';
import * as styles from './style.css';
import { StyleConstants } from '../../constants/style';
import { SectionsEnum } from '../../constants/navigation';
import { SCROLL_TO_SECTION } from '../../actions/constants/navigation-action-constants';

export namespace Body {
    export interface Props {
        sections: { id: SectionsEnum; component: JSX.Element; style?: any }[];
    }

    export interface State {}
}

export class Body extends React.Component<Body.Props, Body.State> {
    constructor(props?: Body.Props, context?: any) {
        super(props, context);
    }

    render() {
        return (
            <div>
                {this.props.sections.map(section => {
                    return (
                        <div id={section.id} key={section.id} className={styles.section} style={section.style}>
                            {section.component}
                        </div>
                    );
                })}
            </div>
        );
    }
}
