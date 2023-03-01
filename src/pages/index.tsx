import { createClient } from "../../prismicio";
import { GetStaticProps } from "next";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import Head from "next/head";

import { Header } from "@/components/Header";
import { HomeContainer } from "../styles/HomeStyles";
import HomeHero from "@/components/HomeHero";
import { Experience } from "@/components/Experience";
import Projects from "@/components/Projects/index";
import Knowledge from "@/components/Knowledge";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

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

export default function Home({ projects }: HomeProps) {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <HomeContainer>
      <Head>
        <title>Home | Meu portfolio</title>
        <meta
          name="description"
          content="Sou desenvolvedor Web e apresento aqui alguns dos projetos que desenvolvi."
        />
        <meta property="og:image" content="ogimage.png" />
        <meta property="og:image:secure_url" content="ogimage.png" />
        <meta property="twitter:image" content="ogimage.png" />
        <meta property="twitter:image:src" content="ogimage.png" />
        <meta
          property="og:description"
          content="Sou desenvolvedor Web e apresento aqui alguns dos projetos que desenvolvi."
        />
      </Head>
      <Header />
      <main className="container">
        <HomeHero />
        <Experience />
        <Projects projects={projects} />
        <Knowledge />
        <ContactForm />
      </main>
      <Footer />
    </HomeContainer>
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
