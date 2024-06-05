import React from 'react';
import { Box, Grid, Link, Typography, styled } from '@mui/material';
const projectThumbs = import.meta.glob("../assets/projects/*")
console.log(projectThumbs)

const ProjectBox = styled(Box)`
  position: relative;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  text-align: center;
  overflow: hidden;

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    margin-bottom: 16px;
    transition: transform 0.3s ease-in-out;
  }

  &:hover img {
    transform: scale(1.1);
  }

  &:hover .projectDetails {
    opacity: 1;
    transform: translateY(0);
  }

  .projectDetails {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
    opacity: 0;
    transform: translateY(-50%);
  }
`;

const Projects = () => {
  // Sample project data (replace with your actual project data)
  const projects = [
    {
      id: 1,
      title: 'Project 1',
      imageUrl: '/images/project1.jpg', // Path to your project image
      detailsUrl: '/project1', // URL to the project detail page
    },
    {
      id: 2,
      title: 'Project 2',
      imageUrl: '/images/project2.jpg',
      detailsUrl: '/project2',
    },
    // Add more projects as needed
  ];

  return (
    <Grid container spacing={3}>
      {projects.map((project) => (
        <Grid item key={project.id} xs={12} sm={6} md={4}>
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
  );
};

export default Projects;


async function loadImages() {
  // Create an array to hold the imported images
  const importedImages = [];

  // Loop through each entry in the images object
  for (const path in images) {
      // Dynamically import the image
      const image = await images[path]();
      // Push the imported image's default export (the URL) into the array
      importedImages.push(image.default);
  }

  return importedImages;
}