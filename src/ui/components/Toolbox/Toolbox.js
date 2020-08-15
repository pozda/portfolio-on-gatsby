// @flow
import * as React from 'react'
import type {Tool} from '../../../models'
import {Icon, ICONS} from '../Icon/Icon'

type Props = {
    tool: Tool
}

class ToolboxComponent extends React.Component<Props> {
    render() {
        const {tool} = this.props
        return (
            <React.Fragment>
                <div className={`tool ${tool.slug}`} title={tool.description}>
                    <Icon d={ICONS[tool.slug]} height={36}/>
                    <p className="tool__name">{tool.name}</p>
                </div>
            </React.Fragment>
        )
    }
}

export default ToolboxComponent