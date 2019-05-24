import React from 'react';
import PropTypes from 'prop-types';
import TypeIt from 'typeit';
import styles from './TypeWriter.module.scss';

class TypeWriter extends React.Component {
    constructor(props) {
        super(props);

        this.spanRef = React.createRef();
    }

    componentDidMount() {
        this.typeInstance = new TypeIt(this.spanRef.current, this.props).go();
    }

    render() {
        const { children } = this.props;

        return (
            <span className={styles.typeWriter} ref={this.spanRef}>
                {children}
            </span>
        );
    }
}

TypeWriter.propTypes = {
    children: PropTypes.node.isRequired,
};

export { TypeWriter };
