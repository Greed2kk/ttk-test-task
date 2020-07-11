import React, { Component } from "react";

class LoadingSpinner extends Component {
    render() {
        return (
            <div className="d-flex justify-content-center">
                <div className="spinner-border text-danger" role="status">
                     <span className="sr-only">Loading...</span>
                </div>
            </div>   
        );
    }
}

export default LoadingSpinner