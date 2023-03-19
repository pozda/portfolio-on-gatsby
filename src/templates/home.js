// @flow
import React from 'react'
import {Element} from 'react-scroll'
import type {AboutMe, Project, Tool} from '../models'
import {
    AboutMeComponent, 
    ToolboxComponent, 
    ProjectComponent, 
    HeaderComponent, 
    FooterComponent,
    SectionTitleComponent,
    SEOComponent
} from '../ui/components/'
import images from '../utils/images'
import appConstants from '../utils/appConstants'
import '../ui/styles/Main.scss'

const HomePage = ({pageContext: {data}}) => {
  const {aboutMe, projects, socialLinks, toolbox} = data
  return (
    <>
        <SEOComponent />
        <HeaderComponent image={images.headerImg}/>
        <Element name="aboutMe">
            <div className="container" id="aboutMe">
                <section className="section section--about-me">
                    {aboutMe.map((about: AboutMe) => (
                        <AboutMeComponent
                            about={about}
                            key={about.title}
                            image={about.image}
                            social={socialLinks}/>
                    ))}
                </section>
            </div>
        </Element>
        <Element name="myToolbox">
            <SectionTitleComponent id='myToolbox' title='Toolbox' image={images.toolboxImg}/>
            <div className="container">
                <section className="section section--tools">
                    <div className="section-part-wrapper">
                        <h1>Proficient at</h1>
                        {toolbox.map((tool: Tool) => (
                            tool.level === appConstants.tools.PROFICIENT &&
                            <ToolboxComponent icon={tool.slug} tool={tool} key={tool.name + tool.level}/>
                        ))}
                    </div>
                    {
                        // <div className="section-part-wrapper">
                        //     <h1>Still learning</h1>
                        //     {toolbox.map((tool: Tool) => (
                        //         tool.level === appConstants.tools.LEARNING &&
                        //         <ToolboxComponent icon={tool.slug} tool={tool} key={tool.name + tool.level}/>
                        //     ))}
                        // </div>
                    }
                    
                </section>
            </div>
        </Element>
        <Element name="projects">
            <SectionTitleComponent id='projects' title='Projects' image={images.projectImg}/>
            <div className="container">
                <section className="section">
                    {projects.map((project: Project) => (
                        <ProjectComponent project={project} key={project.title + project.type}/>
                    ))}
                </section>
            </div>
        </Element>
        <FooterComponent socialLinks={socialLinks}/>
    </>
)
}

export default HomePage