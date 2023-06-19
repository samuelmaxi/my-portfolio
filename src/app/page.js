'use client'
import { Button, Card, CardActions, CardContent, CardMedia, FormControlLabel, RadioGroup, TextField, Typography } from '@mui/material';
import { SocialIcon } from 'react-social-icons';
import SendIcon from '@mui/icons-material/Send';
import { CopyrightOutlined } from '@mui/icons-material';
import { Header } from '@/components/header';
import { AboutMe } from '@/components/aboutme';
import { Skills } from '@/components/skills';
import { Projects } from '@/components/projects';
import { ContactMe } from '@/components/contactme';
import { Footer } from '@/components/footer';


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
