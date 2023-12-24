import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { Text, Button } from '@chakra-ui/react';

import { FullWidthContainer } from '~/components/blocks/full-width-container';
import { space } from '~/constants/space';
import {
  Wrapper,
  Card,
  CardTitle,
  CardImage,
  CardTextOverlay,
} from '~/components/card/index';
import { IGatsbyImage } from '~/types/gatsbyImage';
import CardTopNav from '~/components/card/CardTopNav';

interface IProjectsSectionData {
  Homepage: {
    data: {
      projectsDesc: string;
      projectsBtn: string;
    };
  };
  Projects: {
    nodes: {
      data: {
        projectName: string;
        projectImage: IGatsbyImage;
      };
      id: string;
      url: string;
    }[];
  };
}

export default function ProjectsSection() {
  const projectData = useStaticQuery<IProjectsSectionData>(query);

  if (!projectData) return null;

  const projects = projectData.Projects.nodes;
  const { projectsDesc, projectsBtn } = projectData.Homepage.data;

  return (
    <FullWidthContainer
      variant="max"
      pt={space.paddingSmall}
      textAlign="center"
    >
      {/* Project Cards Section */}
      <CardTopNav badge="PROJECTS" button="ALL PROJECTS" to="/projects" />
      <Wrapper>
        {projects.map(project => (
          <Link to={project.url} key={project.id}>
            <Card h={[`10rem`, null, `15rem`, `20rem`]}>
              <CardImage image={project.data.projectImage} />
              <CardTitle>{project.data.projectName}</CardTitle>
              <CardTextOverlay />
            </Card>
          </Link>
        ))}
      </Wrapper>
      {/* Text Section */}
      <Text
        fontFamily="heading"
        fontWeight="bold"
        fontSize={[`xl`, `3xl`]}
        lineHeight="125%"
        textAlign="center"
        textShadow="textShadows.big"
        pb={[6, null, null, 8]}
        pt={[6, null, null, 8]}
      >
        {projectsDesc}
      </Text>
      <Link to="/projects">
        <Button
          variant="xl"
          boxShadow="rgba(37, 99, 235, 0.1) 0px 0px 0px 1px, rgba(37, 99, 235, 0.2) 0px 5px 10px, rgba(37, 99, 235, 0.4) 0px 15px 40px"
          _hover={{
            boxShadow: `rgba(37, 99, 235, 0.1) 0px 0px 0px 1px, rgba(37, 99, 235, 0.2) 0px 5px 10px, rgba(37, 99, 235, 0.4) 0px 20px 35px`,
            transform: `translateY(-8px)`,
          }}
        >
          {projectsBtn}
        </Button>
      </Link>
    </FullWidthContainer>
  );
}

const query = graphql`
  query ProjectSection {
    Homepage: prismicHomepage {
      data {
        projectsDesc: projects_desc
        projectsBtn: projects_btn
      }
    }
    Projects: allPrismicProject(limit: 2) {
      nodes {
        id
        url
        data {
          projectName: project_name
          projectImage: project_image {
            alt
            gatsbyImageData(
              width: 600
              placeholder: BLURRED
              imgixParams: { q: 90 }
            )
          }
        }
      }
    }
  }
`;
