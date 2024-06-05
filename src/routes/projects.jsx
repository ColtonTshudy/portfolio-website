import React, { useEffect, useState } from 'react';
import { Box, Grid, Link, Typography, styled } from '@mui/material';
const projectThumbs = import.meta.glob(['../assets/projects/*/*.png', '../assets/projects/*/*.jpg'])
console.log(projectThumbs)

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
    transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
    margin-bottom: -6px;
  }

  &:hover img {
    opacity: 0;
    transform: scale(1.1);
  }

  &:hover .projectDetails {
    opacity: 1;
    transform: translateX(-50%);
  }

  .projectDetails {
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
        loadProjectThumbs(projectThumbs).then((thumbs) => {

            const projectsTemp = []

            Object.entries(thumbs).forEach(([key, value], index) => {
                projectsTemp.push({
                    id: index,
                    title: key,
                    imageUrl: value,
                    detailsUrl: key,
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
                                <Typography variant="h6" component="h2" gutterBottom>
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


async function loadProjectThumbs(images) {
    // Create an array to hold the imported images
    let importedThumbs = {};

    for (const path in images) {
        const thumb = await images[path]();
        const name = path.match(/\/([^/.]+)\.[^.]+$/)[1];
        importedThumbs[name] = thumb.default;
    }

    return importedThumbs;
}