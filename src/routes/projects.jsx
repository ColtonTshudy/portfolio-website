import React, { useEffect, useState } from 'react';
import { Box, Grid, Link, Typography, styled } from '@mui/material';
const projectThumbs = import.meta.glob(['../assets/projects/*/thumb.png', '../assets/projects/*/thumb.jpg'])

const ProjectBox = styled(Box)`
  position: relative;
  border: 1px solid #ccc;
  border-radius: 8px;
  text-align: center;
  overflow: hidden;
  padding: 5px;

  img {
    width: 100%;
    border-radius: 8px;
    transition: transform 0.3s ease-in-out, filter 0.3s ease-in-out;
    margin-bottom: -6px;
  }

  &:hover img {
    transform: scale(1.1);
    filter: blur(8px);
  }

  &:hover .projectDetails {
    opacity: 1;
    transform: translateX(-50%);
  }

  .projectDetails {
    color: white;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0; /* Set top to 50% */
    left: 50%; /* Align to the left */
    transform: translate(-50%, -50%); /* Center vertically and horizontally */
    transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
    opacity: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .projectDetails > a {
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    
  }
`;

const Projects = () => {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        // Get project thumbnail data and convert it into an array of objects for rendering
        loadProjectData(projectThumbs).then((data) => {
            const projectsTemp = []

            Object.entries(data).forEach((dataPoint) => {
                const index = dataPoint[0]
                const projectData = dataPoint[1]

                projectsTemp.push({
                    id: index,
                    title: projectData.name,
                    imageUrl: projectData.thumb,
                    detailsUrl: projectData.name,
                })
            })

            setProjects(projectsTemp)
        })
    }, [])

    return (
        <>
            <Typography variant="h3" sx={{ marginBottom: 2 }}>
                Projects
            </Typography>
            <Grid container spacing={3}>
                {projects.map((project) => (
                    <Grid item key={project.id} xs={12} sm={6} md={4} xl={3}>
                        <ProjectBox>
                            <img src={project.imageUrl} alt={project.title} />
                            <div className="projectDetails">
                                <Typography variant="h6" component="h2" gutterBottom sx={{ bgcolor: 'black' }}>
                                    {project.title}
                                </Typography>
                                <Link href={project.detailsUrl} color="primary" underline="hover">
                                    View Details
                                </Link>
                            </div>
                        </ProjectBox>
                    </Grid>
                ))}
            </Grid>
        </>
    );
};

export default Projects;


async function loadProjectData(images) {
    // Create an array to hold the imported images
    let projects = [];

    for (const imagePath in images) {

        const thumb = await images[imagePath]();
        const path = imagePath.match(/(.*)\/([^\/]+)$/)[1];
        const infoPath = path + "/info.json"
        const info = await import(/* @vite-ignore */infoPath)

        console.log(info)

        projects.push({
            name: info.title,
            thumb: thumb.default,
            priority: info.priority
        })
    }

    projects.sort((a, b) => a.priority - b.priority)
    return projects;
}