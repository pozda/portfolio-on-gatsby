// @flow
import * as React from 'react'

type Props = {
    open: boolean,
    title: string,
    text: string,
    image: string,
    link: string,
    linkText: string,
    closeModal: Function
}


class Modal extends React.Component<Props> {
    render() {
        const {title, text, image, link, linkText, closeModal, open} = this.props

        if (!open) {
            return null
        }
        return (
            <React.Fragment>
                <div className="modal-wrapper" onClick={closeModal}>
                    <div className="modal">
                        <h1>{title}</h1>
                        <p>{text}</p>
                        <a href={link}>
                            <img src={image}/>
                        </a>
                        <div className="modal__buttons">
                            <button className="modal__button" onClick={closeModal}>Close</button>
                            <a className="modal__button" href={link}>{linkText}</a>
                        </div>

                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Modal