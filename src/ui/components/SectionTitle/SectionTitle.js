// @flow
import * as React from 'react'
type Props = {
    title: string,
    image: string,
    id: string
}

class SectionTitle extends React.Component<Props> {
    render() {
        const {title, image, id} = this.props
        return (
            <div id={id} className="section-main-title__wrapper" style={{backgroundImage: `url(${image})`}}>
                <div className="triangle-border triangle-border--top triangle-border--small"></div>
                <h1 className="section-main-title">{title}</h1>
                <div className="section-main-title__underline"></div>
                <div className="section-main-title__overlay"></div>
                <div className="triangle-border triangle-border--bottom triangle-border--small"></div>
            </div>
        )
    }
}
export default SectionTitle