import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
// import ModalVideo from 'react-modal-video';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import TeamTwo from "../blocks/team/TeamTwo";


class ServiceDetails extends Component {
    constructor() {
        super()
        this.state = {
            isOpen: false,
            stepsData: [
                {
                    step: 1,
                    img: 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f',
                    title: 'Register',
                    body: 'Register with GiftnBlessings by giving simple details and creating a personal account to keep track of your gift registry.',
                    link: {
                        text: 'Register',
                        url: ''
                    }
                },
                {
                    step: 2,
                    img: 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f',
                    title: 'Choose',
                    body: 'Your choice matters to us. Choose from the endless list of gift options from our registry or create your registry with choices of gifts.',
                    link: {
                        text: 'Choose',
                        url: ''
                    }
                },
                {
                    step: 3,
                    img: 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f',
                    title: 'Share',
                    body: 'In just a click, share your gift registry with friends and family who would be more than happy to get your wishes fulfilled.',
                    link: {
                        text: 'Share',
                        url: ''
                    }
                },
                {
                    step: 4,
                    img: 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmlydGhkYXklMjBnaWZ0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
                    title: 'Enjoy',
                    body: 'Throughout the process, we at GiftnBlessings will plan the event to ensure the smoothest gifting experience. As you create and share, sit back and enjoy your event to the fullest.',
                    link: {
                        text: 'Enjoy',
                        url: ''
                    }
                },
            ]
        }
        this.openModal = this.openModal.bind(this)
    }
    openModal() {
        this.setState({ isOpen: true })
    }
    render() {
        return (
            <React.Fragment>

                {/* Start Pagehelmet  */}
                <PageHelmet pageTitle='Service Details' />
                {/* End Pagehelmet  */}

                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />

                {/* Start Breadcrump Area */}
                <div className="rn-page-title-area pt--120 pb--190 bg_image bg_image-gift" data-black-overlay="5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="rn-page-title text-center pt--100">
                                    <h2 className="title" style={{ color: '#fff' }}>
                                        Why GiftnBlessings
                                    </h2>
                                    <p>Fresh From The Press Discription</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Breadcrump Area */}

                {/* Start Page Wrapper */}
                <div className="rn-service-details ptb--120 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="service-details-inner">
                                    <div className="inner">
                                        {/* Start Single Area */}
                                        <div className="row sercice-details-content pb--80 align-items-center">
                                            <div className="col-lg-6 col-12">
                                                <div className="thumb">
                                                    <img className="w-100" src="https://images.unsplash.com/photo-1647949940712-bfcf82015d9b" alt="Service Images" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12">
                                                <div className="details mt_md--30 mt_sm--30">
                                                    <h4 className="title">Why GiftnBlessings</h4>
                                                    <p>Have you ever felt the pressure of choosing the best and most useful gift for loved ones? Or have you ever received gifts that would lie unused in your closet for years? We are here to solve both problems in one go. We add meaning to the gifts you give and receive. Trust us for your gifts to be cherished forever.</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Single Area */}

                                        {/* Start Single Area */}
                                        <div className="row sercice-details-content align-items-center">
                                            <div className="col-lg-6 col-12 order-2 order-lg-1">
                                                <div className="details mt_md--30 mt_sm--30">
                                                    <p>Are you wondering if this is your cup of tea? Stop racking your brain to find the right gifts for others, and receive the gifts you desire on your favorite occasions.</p>
                                                    <p>Here are some reasons why you should maintain a gift registry with us:</p>
                                                    <h4 className="title" style={{ lineHeight: 1.2 }}>Why Maintain A Gift Registry At Giftnblessings?</h4>
                                                    <ul className="liststyle">
                                                        <li>
                                                            <span style={{ color: '#000' }}>Simple process:</span>
                                                            <p style={{ fontSize: '1rem' }}>Follow four simple steps, from registration to gifting, and get everyone involved in a click.</p>
                                                        </li>
                                                        <li>
                                                            <span style={{ color: '#000' }}>Vast options:</span>
                                                            <p style={{ fontSize: '1rem' }}>Ranging from vouchers to holiday packages to special memorabilia, we have it all. All you have to do is choose.</p>
                                                        </li>
                                                        <li>
                                                            <span style={{ color: '#000' }}>Hands-on services:</span>
                                                            <p style={{ fontSize: '1rem' }}>We are here to enable and empower you in the gifting experience. Trust us to be by your side at every step from creating the list until the gifts reach your hands.</p>
                                                        </li>
                                                        <li>
                                                            <span style={{ color: '#000' }}>Customization:</span>
                                                            <p style={{ fontSize: '1rem' }}>Customize your gift registry and design your day according to your wish.</p>
                                                        </li>
                                                    </ul>
                                                    {/* <p>hidden in the middle of text. All the Lorem Ipsum generators tend toitrrepeat predefined chunks. Necessary, making this the first true generator on the Internet.</p> */}
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12 order-1 order-lg-2">
                                                <div className="thumb position-relative">
                                                    <img className="w-100" src="https://images.unsplash.com/photo-1577125464757-1b4f4096b7f4" alt="Service Images" />
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Single Area */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Page Wrapper */}

                <div className="rn-team-wrapper ptb--120 bg_color--5" style={{ marginBottom: '80px' }}>
                    <div className="rn-team-area">
                        <div className="container">
                            <div className="row mb-3">
                                <div className="col-lg-12">
                                    <div className="section-title text-center mb--30">
                                        <h2>Step-By-Step Process</h2>
                                        <p>Here is how to follow our simple four-step process to make your D-day gifting experience wonderful.</p>
                                    </div>
                                </div>
                            </div>
                            {/* <TeamTwo column="col-lg-3" teamStyle="" item="4" /> */}

                            <div className="row">
                                {this?.state?.stepsData?.map((item) => (
                                    <div className="col-lg-3" key={item.step}>
                                        <div className={`team-static`}>
                                            <div className="thumbnail" style={{ position: 'relative' }}>
                                                <img src={item.img} alt="Blog Images" />
                                                <span style={{ position: 'absolute', top: -15, left: -15, width: '45px', height: '45px', borderRadius: '50%', backgroundColor: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#fff', fontWeight: 'bold', border: '3px solid #fff' }}>
                                                    {item.step}
                                                </span>
                                            </div>
                                            <div className="inner">
                                                <div className="content">
                                                    <h4 className="title">{item.title}</h4>
                                                    <p className="designation">{item.body}</p>
                                                </div>
                                                <button className="mt-4 px-5 py-3 rounded" style={{ backgroundColor: 'crimson', color: '#fff', fontWeight: 'bold' }}>
                                                    {item?.link?.text}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}

                <Footer />

            </React.Fragment>
        )
    }
}
export default ServiceDetails;