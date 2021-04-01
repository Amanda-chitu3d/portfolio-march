import React from 'react'
import{Link} from "react-router-dom"

function ProjectPage() {
    return (
       <div className="section">
           <div className="course-link">
               <Link className="course-link-click" to="/projects" target="_blank">Start Course</Link>
           </div>
          
               <div className="menuSectionTitle">
                   <h2>React Projects</h2>
                   <div className="underline"></div>
               </div>
               <div className="project-section-center">
                   <Link className="project" to="https://react-projects-1-birthday-reminder.netlify.app/" target="_blank">
                       <article>
                           <div className="project-image-wrapper"></div>
                           <footer>
                               <h4>Birsthday Reminder</h4>
                           </footer>
                       </article>
                   </Link>
                   <Link className="project" to="/projects" target="_blank">
                       <article>
                           <div className="project-image-wrapper"></div>
                           <footer>
                               <h4>quiz</h4>
                           </footer>
                       </article>
                   </Link>
                   <Link className="project" to="/projects" target="_blank">
                       <article>
                           <div className="project-image-wrapper"></div>
                           <footer>
                               <h4>Hacker News</h4>
                           </footer>
                       </article>
                   </Link>
                   <Link className="project" to="/projects" target="_blank">
                       <article>
                           <div className="project-image-wrapper"></div>
                           <footer>
                               <h4>Tabs</h4>
                           </footer>
                       </article>
                   </Link>
                   <Link className="project" to="/projects" target="_blank">
                       <article>
                           <div className="project-image-wrapper"></div>
                           <footer>
                               <h4>Markdown Preview</h4>
                           </footer>
                       </article>
                   </Link>
               </div>
           </div>
      
    )
}

export default ProjectPage
