import React from 'react'
import Container from '../../container/Container'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const Connected_to_Us = () => {
    return (
        <>
            <section className='lg:py-20 py-10 bg-linear-to-br from-teal-50 via-white to-blue-50  overflow-hidden'>
                <Container>
                    <div className="">
                        <h3 className='lg:text-[72px] text-[40px] font-nunito font-bold transition-colors  bg-linear-to-r from-primary to-tertiary bg-clip-text text-transparent drop-shadow-lg w-[70%] mx-auto text-center leading-[120%]'>3000+ Companies Are Connected to Us</h3>
                    </div>
                    <div className="mt-15">
                        <Tabs>
                            {/* Tabs Header */}
                            <TabList className="flex flex-wrap justify-around gap-4 mb-10 border-b border-tertiary pb-5">

                                <Tab
                                    className="px-20 py-4 rounded-full border border-tertiary font-medium text-tertiary text-[24px] font-inter cursor-pointer transition-all duration-300 hover:bg-green-600 hover:text-white outline-none"
                                    selectedClassName="bg-linear-to-r from-blue-600 to-teal-600 text-white border-tertiary shadow-lg"
                                >
                                    Working With
                                </Tab>

                                <Tab
                                    className="px-20 py-4 rounded-full border border-tertiary font-medium text-tertiary text-[24px] font-inter cursor-pointer transition-all duration-300 hover:bg-green-600 hover:text-white outline-none"
                                    selectedClassName="bg-linear-to-r from-blue-600 to-teal-600 text-white border-tertiary shadow-lg"
                                >
                                    Members Of
                                </Tab>

                                <Tab
                                    className="px-20 py-4 rounded-full border border-tertiary font-medium text-tertiary text-[24px] font-inter cursor-pointer transition-all duration-300 hover:bg-green-600 hover:text-white outline-none"
                                    selectedClassName="bg-linear-to-r from-blue-600 to-teal-600 text-white border-tertiary shadow-lg"
                                >
                                    Our Concerns
                                </Tab>
                            </TabList>

                            {/* Tab Content */}
                           
                            <TabPanel>
                                <div className="grid grid-cols-4 gap-8 items-center">

                                    <div className="flex justify-center">
                                        <img
                                            src="https://www.creativeitinstitute.com/images/cit_partner/1_partner_logo_1663044423.png"
                                            alt="1"
                                        />
                                    </div>

                                    <div className="flex justify-center">
                                        <img
                                            src="	https://www.creativeitinstitute.com/images/cit_partner/3_partner_logo_1663044423.png"
                                            alt="2"
                                        />
                                    </div>

                                    <div className="flex justify-center">
                                        <img
                                            src="https://www.creativeitinstitute.com/images/cit_partner/6_partner_logo_1663044474.png"
                                            alt="3"
                                        />
                                    </div>

                                    <div className="flex justify-center">
                                        <img
                                            src="https://www.creativeitinstitute.com/images/cit_partner/4_partner_logo_1663044423.png"
                                            alt="4"
                                        />
                                    </div>

                                   

                                    <div className="flex justify-center">
                                        <img
                                            src="https://www.creativeitinstitute.com/images/cit_partner/5_partner_logo_1663044423.png"
                                            alt="5"
                                        />
                                    </div>
                                    <div className="flex justify-center">
                                        <img
                                            src="https://www.creativeitinstitute.com/images/cit_partner/6_partner_logo_1663044423.png"
                                            alt="6"
                                        />
                                    </div>
                                    <div className="flex justify-center">
                                        <img
                                            src="https://www.creativeitinstitute.com/images/cit_partner/7_partner_logo_1663044423.png"
                                            alt="7"
                                        />
                                    </div>
                                    <div className="flex justify-center">
                                        <img
                                            src="https://www.creativeitinstitute.com/images/cit_partner/8_partner_logo_1663044423.png"
                                            alt="8"
                                        />
                                    </div>
                                </div>
                            </TabPanel>

                             <TabPanel>
                                <div className="grid grid-cols-4 gap-8 items-center">

                                    <div className="flex justify-center">
                                        <img
                                            src="https://www.creativeitinstitute.com/images/cit_partner/1_partner_logo_1663044599.png"
                                            alt="1"
                                        />
                                    </div>

                                    <div className="flex justify-center">
                                        <img
                                            src="https://www.creativeitinstitute.com/images/cit_partner/2_partner_logo_1663044599.png"
                                            alt="2"
                                        />
                                    </div>

                                    <div className="flex justify-center">
                                        <img
                                            src="https://www.creativeitinstitute.com/images/cit_partner/3_partner_logo_1663044599.png"
                                            alt="3"
                                        />
                                    </div>

                                    <div className="flex justify-center">
                                        <img
                                            src="https://www.creativeitinstitute.com/images/cit_partner/4_partner_logo_1663044599.png"
                                            alt="4"
                                        />
                                    </div>

                                   <div className="flex justify-center">
                                      
                                    </div>

                                    <div className="flex justify-center">
                                        <img
                                            src="https://www.creativeitinstitute.com/images/cit_partner/5_partner_logo_1663044599.png"
                                            alt="5"
                                        />
                                    </div>
                                    <div className="flex justify-center">
                                        <img
                                            src="https://www.creativeitinstitute.com/images/cit_partner/6_partner_logo_1663044599.png"
                                            alt="6"
                                        />
                                    </div>
                                    <div className="flex justify-center">
                                      
                                    </div>
                                    
                                </div>
                            </TabPanel>

                             <TabPanel>
                                <div className="grid grid-cols-4 gap-8 items-center">

                                    <div className="flex justify-center">
                                        <img
                                            src="https://www.creativeitinstitute.com/images/cit_partner/1_partner_logo_1663044599.png"
                                            alt="1"
                                        />
                                    </div>
                                    <div className="flex justify-center">
                                        <img
                                            src="https://www.creativeitinstitute.com/images/cit_partner/2_partner_logo_1663044837.png"
                                            alt="1"
                                        />
                                    </div>

                                    <div className="flex justify-center">
                                        <img
                                            src="https://www.creativeitinstitute.com/images/cit_partner/4_partner_logo_1663044837.png"
                                            alt="2"
                                        />
                                    </div>

                                    <div className="flex justify-center">
                                        <img
                                            src="https://www.creativeitinstitute.com/images/cit_partner/5_partner_logo_1663044837.png"
                                            alt="3"
                                        />
                                    </div>

                                    <div className="flex justify-center">
                                        <img
                                            src="https://www.creativeitinstitute.com/images/cit_partner/7_partner_logo_1663044837.png"
                                            alt="4"
                                        />
                                    </div>

                                    <div className="flex justify-center">
                                        <img
                                            src="https://www.creativeitinstitute.com/images/cit_partner/8_partner_logo_1663044837.png"
                                            alt="4"
                                        />
                                    </div>

                                    <div className="flex justify-center">
                                        <img
                                            src="https://www.creativeitinstitute.com/images/cit_partner/5_partner_logo_1663044599.png"
                                            alt="5"
                                        />
                                    </div>
                                    <div className="flex justify-center">
                                        <img
                                            src="https://www.creativeitinstitute.com/images/cit_partner/6_partner_logo_1663044599.png"
                                            alt="6"
                                        />
                                    </div>
                                    <div className="flex justify-center">
                                      
                                    </div>
                                </div>
                            </TabPanel>

                            

                           
                        </Tabs>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Connected_to_Us
