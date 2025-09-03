import React from 'react'
import { Container, Wrapper, Title, Desc, CardContainer } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'

const Projects = ({ openModal, setOpenModal }) => {
  return (
    <Container id="Projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.
        </Desc>
        <CardContainer>
          {projects.map((project, index) => (
            <ProjectCard 
              key={index} 
              project={project} 
              openModal={openModal} 
              setOpenModal={setOpenModal} 
            />
          ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects
