// @flow
import * as React from 'react'
import type {SocialLink} from '../../../models/SocialLink'
import {Icon, ICONS} from '../Icon/Icon'

type Props = {
    socialLink: SocialLink
}

class SocialLinkComponent extends React.Component<Props> {
    render() {
        const {socialLink} = this.props

        return (
            <React.Fragment>
                <a
                    href={socialLink.link}
                    className={socialLink.network}
                    target="_blank"
                    rel='noopener noreferrer'
                    alt={socialLink.network}
                    title={socialLink.network}>
                    <Icon d={ICONS[socialLink.network]} height={24} iconClass={socialLink.network} />
                </a>
            </React.Fragment>
        )
    }
}

export default SocialLinkComponent