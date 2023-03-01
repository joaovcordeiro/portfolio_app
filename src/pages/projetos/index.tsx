import { ProjectsContainer } from "../../styles/ProjectsStyle";
import { Header } from "@/components/Header";
import ProjectItem from "@/components/ProjectItem";
import { createClient } from "../../../prismicio";
import { GetStaticProps } from "next";

interface Project {
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  thumbnail: string;
}

interface HomeProps {
  projects: Project[];
}

export default function Projects({ projects }: HomeProps) {
  return (
    <ProjectsContainer>
      <Header />
      <main className="container">
        {projects.map((project) => (
          <ProjectItem
            key={project.slug}
            title={project.title}
            type={project.type}
            slug={project.slug}
            imgUrl={project.thumbnail}
          ></ProjectItem>
        ))}
      </main>
    </ProjectsContainer>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = createClient();

  const response = await prismic.getAllByType("projeto", {
    orderings: { field: "data.data", direction: "desc" },
  });

  const projects = response.map((project) => ({
    slug: project.uid,
    title: project.data.title,
    type: project.data.type,
    description: project.data.description,
    link: project.data.link.url,
    thumbnail: project.data.thumbnail.url,
  }));

  return {
    props: { projects },
    revalidate: 86400,
  };
};
