import React from 'react'
import Banner from '../../components/home_page/Banner'
import Courses from '../../components/home_page/Courses'
import Why_Choose from '../../components/home_page/Why_Choose'
import Student_Gallery_section from '../../components/home_page/Student_Gallery_section'
import  {StatisticsSection}  from '../../components/home_page/StatisticsSection'
import  {TestimonialsSection}  from '../../components/home_page/TestimonialsSection'
import ContactForm from '../../components/home_page/Contact_us'
import Connected_to_Us from '../../components/home_page/Connected_to_Us'


const Home = () => {
  return (
    <>
    <main>

    <Banner/>
    <Courses/>
    <Why_Choose/>
    <Student_Gallery_section/>
    <StatisticsSection/>
    <TestimonialsSection/>
    <Connected_to_Us/>
    <ContactForm/>
    
    </main>
    </>
  )
}

export default Home