import React from 'react'
import ContactForm from '../../components/home_page/Contact_us'
import Container from '../../container/Container'

const ContactPage = () => {
    return (
        <>
            <section className="py-20">
                <div className="">
                    <ContactForm />
                </div>
                <Container>
                    <div className="w-full ">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d33723.49744394878!2d90.75535281359942!3d23.675483538155756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37544676860da6f5%3A0x1482d6dd47538b9a!2sHomna!5e1!3m2!1sen!2sbd!4v1779488298055!5m2!1sen!2sbd"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="rounded-lg"
                        ></iframe>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default ContactPage
