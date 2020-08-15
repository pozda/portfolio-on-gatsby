// @flow
import * as React from 'react'
import type {Project, Tool} from '../../../models'
import {Icon, ICONS} from '../../components/Icon/Icon'

type Props = {
    project: Project
}

class ProjectComponent extends React.Component<Props> {
    render() {
        const {project} = this.props
        const tools = project.skills_and_tools
        return (
            <React.Fragment>
                <div className="project">
                    <h1>{project.title}</h1>
                    <div dangerouslySetInnerHTML={{__html: project.goal}}/>

                    <h3>My role on this project: {project.role}</h3>
                    <div dangerouslySetInnerHTML={{__html: project.role_description}}/>
                    <div dangerouslySetInnerHTML={{__html: project.learned}}/>
                    {
                        project.link &&
                        <div className="project__link">
                            <a href={project.link}>Checkout {project.title}</a>
                        </div>
                    }
                    <div>
                        <h3>Tools I used on this project:</h3>
                        {
                            tools.map((tool: Tool, index: number) =>
                                <div key={tool.name+index} className={`tool ${tool.slug}`} title={tool.description}>
                                    <Icon d={ICONS[tool.slug]} iconType={'icon--projects'} height={36}/>
                                    <p className="tool__name">{tool.name}</p>
                                </div>
                            )
                        }
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default ProjectComponent