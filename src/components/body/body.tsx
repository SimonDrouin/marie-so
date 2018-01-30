import * as React from 'react';
import * as styles from './style.css';
import { StyleConstants } from '../../constants/style';
import { SectionsEnumStr } from '../../constants/navigation';

export namespace Body {
    export interface Props {
        sections: { id: SectionsEnumStr; component: JSX.Element; style?: any }[];
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
