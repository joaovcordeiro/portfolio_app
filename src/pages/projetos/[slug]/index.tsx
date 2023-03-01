import { Header } from "@/components/Header";
import { ProjectContainer } from "../../../styles/ProjectStyles";
import ProjectBanner from "../../../components/ProjectBanner";

import { createClient } from "../../../../prismicio";
import { GetStaticPaths, GetStaticProps } from "next";

import { useRouter } from "next/router";
import { LoadingScreen } from "@/components/LoadingScreen";

interface Project {
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  thumbnail: string;
}

interface ProjectProps {
  project: Project;
}

export default function Project({ project }: ProjectProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <LoadingScreen />;
  }

  return (
    <ProjectContainer>
      <Header />
      <ProjectBanner
        title={project.title}
        type={project.type}
        imgUrl={project.thumbnail}
      />

      <main>
        <p>{project.description}</p>

        <button type="button">
          <a href={project.link}>Ver projeto online</a>
        </button>
      </main>
    </ProjectContainer>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const prismic = createClient();

  const response = await prismic.getAllByType("projeto");

  const paths = response.map((project) => ({
    params: {
      slug: project.uid,
    },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const prismic = createClient();
  const { slug } = context.params;

  const response = await prismic.getByUID("projeto", String(slug));

  const project = {
    slug: response.uid,
    title: response.data.title,
    type: response.data.type,
    description: response.data.description,
    link: response.data.link.url,
    thumbnail: response.data.thumbnail.url,
  };

  return {
    props: { project },
    revalidate: 86400,
  };
};
