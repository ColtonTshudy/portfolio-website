import React, { useEffect, useState } from 'react';
import { Box, Grid, Link, Typography, styled } from '@mui/material';
import LoadingOverlay from '../components/loading-overlay.jsx'
const projectThumbs = import.meta.glob(['../assets/projects/*/thumb.png', '../assets/projects/*/thumb.jpg'])
const projectInfo = import.meta.glob('../assets/projects/*/info.json')

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
    const [isLoading, setisLoading] = useState(true)

    useEffect(() => {
        loadProjectThumbs(projectThumbs, projectInfo).then((projects) => {
            setProjects(projects)
            setisLoading(false)
        })
    }, [])

    return (
        <div>
            <LoadingOverlay isLoading={isLoading} />
            <Typography variant="h3" sx={{ marginBottom: 2 }}>
                Projects
            </Typography>
            <Grid container spacing={3}>
                {projects.map((project) => (
                    <Grid item key={project.id} xs={12} sm={6} md={4} xl={3}>
                        <ProjectBox>
                            <img src={project.thumb} alt={project.title} />
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
        </div>
    );
};

export default Projects;

async function loadProjectThumbs(thumbs, infos) {
    // Create an array to hold the imported images
    let projects = []

    for (const thumbPath in thumbs) {
        const thumb = await thumbs[thumbPath]()
        let title = ''
        let id = ''

        //tries to find an associated info.json in the same folder
        const folder = thumbPath.match(/\/([^\/]+)\/[^\/]+$/)[1]
        for (const infoPath in infos) {
            if (infoPath.includes(folder)) {
                const info = await infos[infoPath]()
                title = info.title
                id = info.priority
            }
        }

        projects.push({
            title: title,
            thumb: thumb.default,
            id: id,
        })
    }

    return projects;
}