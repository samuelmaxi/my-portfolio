'use client'
import { Header } from '@/components/header/header';
import { AboutMe } from '@/components/aboutme/aboutme';
import { Skills } from '@/components/skills/skills';
import { Projects } from '@/components/projects/projects';
import { ContactMe } from '@/components/contactme/contactme';
import { Footer } from '@/components/footer/footer';


export default function Home() {
  return (
    <main>
      <Header/>
      <AboutMe/>
      <Skills/>
      <Projects/>
      <ContactMe/>
      <Footer/>
    </main>
  )
}
