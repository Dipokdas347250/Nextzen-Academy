import React, { useState } from 'react'
import Gallery_banner from '../../components/gallery_page/Gallery_banner'
import NextGenGallery from '../../components/gallery_page/NextGenGallery';
// import GalleryPage from '../../components/gallery_page/GalleryPage';


const Gallery = () => {
    const [activeCategory, setActiveCategory] =
  useState("All");
  return (
    <>
    <Gallery_banner/>
    {/* <GalleryPage/> */}
    <NextGenGallery/>
    
    </>
  )
}

export default Gallery
