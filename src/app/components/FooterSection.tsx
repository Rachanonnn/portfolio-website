import React from 'react'
import IconButton from './IconButton'
import { FaGithub } from "react-icons/fa"
import { GrInstagram } from 'react-icons/gr'
import { LiaLinkedin } from 'react-icons/lia'

const FooterSection: React.FC = () => {
  return (
    <section className='bottom-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100 mt-20' id="footer">
      <div className="flex flex-col justify-center items-center">
        <h2 className='text-white text-xl font-semibold relative justify-center items-center mt-10 mb-6'>Contact me</h2>
        <div className="flex justify-center items-center gap-2 mb-12">
            <a href='https://www.instagram.com/nackkyyss/' target='_blank'>
              <IconButton text="Instagram" color="bg-gradient-to-tr from-yellow-500 to-purple-500 via-pink-500">
                <GrInstagram size={25}/>
                </IconButton>
            </a>
            <a href='https://github.com/Rachanonnn' target='_blank'>
              <IconButton text="Github">
                <FaGithub size={25}/>
              </IconButton>
            </a>
            <a href='https://www.linkedin.com/in/rachanon-sanprasit-56a434303/' target='_blank'>
              <IconButton text="Linkedin" color="bg-blue-500">
                <LiaLinkedin size={25}/>
              </IconButton>
            </a>
        </div>
      </div>
    </section>
  )
}

export default FooterSection
