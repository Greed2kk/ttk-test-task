import React from "react"

const LoadingSpinner = () => (
    <div className="d-flex justify-content-center">
        <div className="spinner-border text-danger" role="status">
            <span className="sr-only">Loading...</span>
        </div>
    </div>
)

export default LoadingSpinner;
