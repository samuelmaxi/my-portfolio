'use client'
import { Header } from '@/components/header';
import { AboutMe } from '@/components/aboutme';
import { Skills } from '@/components/skills';
import { Projects } from '@/components/projects';
import { ContactMe } from '@/components/contactme';
import { Footer } from '@/components/footer';


export default function Home() {

  return (
    <main>
      <Header />
      <AboutMe />
      <Skills title = 'Front-end'/>
      <Projects />
      <ContactMe />
      <Footer />
    </main>
  )
}
