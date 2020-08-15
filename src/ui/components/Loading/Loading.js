// @flow
import * as React from 'react'

const LoadingComponent = () => (
    <React.Fragment>
        <div className="loader__wrapper">
            <div className="loader">
                <div className="loader__item"></div>
                <div className="loader__item"></div>
                <div className="loader__item"></div>
                <div className="loader__item"></div>
                <div className="loader__item"></div>
            </div>
            <div>LOADING</div>
        </div>
    </React.Fragment>
)
export default LoadingComponent