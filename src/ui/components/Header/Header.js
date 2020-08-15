// @flow
import * as React from 'react'
import cx from 'classnames'
import {Link} from 'react-scroll'

type Props = {
    image: string
}

type State = {
    inverse: boolean
}

class Header extends React.Component<Props, State> {
    state = {
        inverse: false
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, false)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    }

    handleScroll = () => {
        window.pageYOffset > 200 ? this.setState({inverse: true}) : this.setState({inverse: false})
    }

    render() {
        const cxClass = cx({
            // eslint-disable-next-line
            'header__navbar': true,
            'header__navbar--inverse': this.state.inverse
        })
        const {image} = this.props
        return (
            <header className="header" style={{backgroundImage: `url(${image})`}}>
                <div className="container">
                    <div className={cxClass}>
                        <div className="header__navbar--inner">
                            <a href="/" className="header__logo" title="Ivan Pozderac">
                                <svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 85 116">
                                    <path
                                        d="M0 0v21h21A21 21 0 0 0 0 0zm0 32v42a21 21 0 0 0 21 21V32zm32
                                        0v84a21 21 0 0 0 21-21V32zm31 0v63a21 21 0 0 0 22-21V32z"/>
                                </svg>
                            </a>
                            <nav className="header__navigation">
                                <Link className="header__navigation__item" activeClass="active" to="aboutMe" spy={true}
                                    smooth={true} duration={500}>About Me</Link>
                                <Link className="header__navigation__item" activeClass="active" to="myToolbox"
                                    spy={true} smooth={true} duration={500}>My Toolbox</Link>
                                <Link className="header__navigation__item" activeClass="active" to="projects" spy={true}
                                    smooth={true} duration={500}>Projects</Link>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="triangle-border triangle-border--bottom triangle-border--large--top"></div>
            </header>
        )
    }
}

export default Header