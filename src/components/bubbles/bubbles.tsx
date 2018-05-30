import * as React from 'react';
import { StyleConstants } from '../../constants/style';
import { RootState } from '../../reducers/index';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as styles from './style.css';

export namespace Bubbles {
    export interface Props {}

    export interface State {}
}

@connect(mapStateToProps, mapDispatchToProps)
export class Bubbles extends React.Component<Bubbles.Props, Bubbles.State> {
    constructor(props?: Bubbles.Props, context?: any) {
        super(props, context);
    }

    render() {
        return (
            <div className={styles.container}>
                <svg className={`${styles.bubbles}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 701 1024" style={{overflow: 'visible'}}>

                <g className={`${styles.bubblesLarge}`}  strokeWidth="7">
                    <g>
                        <g transform="translate(10 940)">
                            <circle cx="35" cy="35" r="35" />
                        </g>
                    </g>
                    <g>
                        <g transform="translate(373 940)">
                            <circle cx="35" cy="35" r="35" />
                        </g>
                    </g>
                    <g>
                        <g transform="translate(408 940)">
                            <circle cx="35" cy="35" r="35" />
                        </g>
                    </g>
                    <g>
                        <g transform="translate(621 940)">
                            <circle cx="35" cy="35" r="35" />
                        </g>
                    </g>
                    <g>
                        <g transform="translate(179 940)">
                            <circle cx="35" cy="35" r="35" />
                        </g>
                    </g>
                </g>

                <g className={`${styles.bubblesSmall}`} strokeWidth="4">
                    <g>
                        <g transform="translate(147 984)">
                            <circle cx="15" cy="15" r="15" />
                        </g>
                    </g>
                    <g>
                        <g transform="translate(255 984)">
                            <circle cx="15" cy="15" r="15" />
                        </g>
                    </g>
                    <g>
                        <g transform="translate(573 984)">
                            <circle cx="15" cy="15" r="15" />
                        </g>
                    </g>
                    <g>
                        <g transform="translate(429 984)">
                            <circle cx="15" cy="15" r="15" />
                        </g>
                    </g>
                    <g>
                        <g transform="translate(91 984)">
                            <circle cx="15" cy="15" r="15" />
                        </g>
                    </g>
                    <g>
                        <g transform="translate(640 984)">
                            <circle cx="15" cy="15" r="15" />
                        </g>
                    </g>
                    <g>
                        <g transform="translate(321 984)">
                            <circle cx="15" cy="15" r="15" />
                        </g>
                    </g>
                    <g>
                        <g transform="translate(376 984)">
                            <circle cx="15" cy="15" r="15" />
                        </g>
                    </g>
                    <g>
                        <g transform="translate(376 984)">
                            <circle cx="15" cy="15" r="15" />
                        </g>
                    </g>
                    <g>
                        <g transform="translate(497 984)">
                            <circle cx="15" cy="15" r="15" />
                        </g>
                    </g>
                </g>

                </svg>
            </div>
        );
    }
}

function mapStateToProps(state: Bubbles.State) { return {} }

function mapDispatchToProps(dispatch) { return {} }
