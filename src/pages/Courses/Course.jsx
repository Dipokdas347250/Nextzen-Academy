import React from 'react'
// import Courses from '../../components/course_page/Courses'
import Course_banner from '../../components/course_page/Course_banner'
import Our_Training from '../../components/course_page/Our_Training'
import Solar_Electrical from '../../components/course_page/Solar_Electrical'
import Our_Achievements from '../../components/course_page/Our_Achievements'
import Course_Faq from '../../components/course_page/Course_Faq'
import Start_Career from '../../components/course_page/Start_Career'

const Course = () => {
  return (
    <>
    <Course_banner/>
    <Our_Training/>
    <Solar_Electrical/>
    <Our_Achievements/>
    <Course_Faq/>
    <Start_Career/>
    {/* <Courses/> */}
    </>
  )
}

export default Course
