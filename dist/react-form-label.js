import React from 'react';

import './scss/react-form-label.scss';

export default class ReactFormLabel extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var match = typeof this.props.value !== 'string' || 
                    this.props.value === "" || 
                    this.props.value.match(this.props.pattern) !== null;

        var required = this.props.required && 
                      (this.props.value === null || this.props.value === "" || 
                      (Array.isArray(this.props.value) && this.props.value.length === 0));
        
        return(
            <div className="ReactFormLabel">
                <div className="error-container">
                    <label className="form-label">{this.props.label}</label>
                    {(required && match) && (
                        <div className="error-message">{this.props.requiredMessage}</div>
                    )}
                    {(!required && !match) && (
                        <div className="error-message">{"*" + this.props.patternMessage}</div>
                    )}
                </div>
                <div className="form-label-children">{this.props.children}</div>
            </div>
        )
    }
}

ReactFormLabel.defaultProps = {
    label: "",
    message: "",
    patternMessage: /./,
    required: false,
    requiredMessage: "*",
    value: ""
}