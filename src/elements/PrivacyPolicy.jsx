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
            isOpen: false
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
                <div className="rn-page-title-area pt--120 pb--190 bg_image" style={{ backgroundColor: '#1D1E24' }} data-black-overlay="5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="rn-page-title text-center pt--100">
                                    <h2 className="title" style={{ color: '#fff' }}>
                                        Privacy Policy
                                    </h2>
                                    <p>Fresh From The Press Discription</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="rn-service-details ptb--120 bg_color--1">
                    <div className="container">

                        <p style={{ textIndent: '30px' }}>This privacy policy to explain how SAJA SANSKRITI GIFTS AND EVENTS referred to as (‘We’, ‘Us’, or ‘Our’) collects, uses and discloses the information you provide us either by collection, cookies, or requests when accessing or using the Website, www.giftsnblessings.com, or “GIFTSNBLESSINGS” application.</p>
                        <p>You should read and understand this notice since it constitutes the core of our obligations to you when you use this website when you provide your personal information to us either directly or through automated processes.
                        </p>

                        <h5 style={{ marginTop: '50px' }}>What Information ‘Saja Sanskriti Gifts and Events’ May Collect;
                        </h5>

                        <p style={{ textIndent: '30px' }}>When you visit our Website or application, you may provide us with two types of information: personal information that you voluntarily disclose that is collected on an individual basis; and information collected automatically when you use our Website and application or the services available on our Website, i.e. cookies and application. We do not store banking details, credit or bank card numbers or information without permission from the customer(s).
                        </p>

                        <h5 style={{ marginTop: '50px' }}>Personal Information ‘Saja Sanskriti Gifts and Events’ May Collect;
                        </h5>

                        <p style={{ textIndent: '30px' }}>We might collect geolocation-based information for fraud prevention purposes. With your consent, we may also collect your specific location-based information for purposes such as to help you locate a store offering our products and services in your area. You may withdraw your consent to the handling of location-based information at any time by changing the settings on your device.
                        </p>

                        <h5 style={{ marginTop: '50px' }}>Information Collected by Cookies and Other Tracking Technologies;</h5>

                        <p style={{ textIndent: '30px' }}>We and our service providers like Google Analytics use various technologies to collect information when you interact with our Website and Application, including but not limited to cookies and web beacons.
                        </p>


                        <ul>
                            <li>Cookies are small text files created by a website that is stored in the user’s computer either temporarily for that session only or permanently on the hard disk</li>
                            <li>Cookies provide a way for the Website to recognize you and keep track of your preferences.</li>
                            <li>Web beacons are used on both webpages and emails to unobtrusively check that a user has accessed a page or some/all content. They can also be used for but are not limited to page tagging, and web analytics. They are often used together with cookies</li>
                        </ul>


                        <h5 style={{ marginTop: '50px' }}>How and Why ‘Saja Sanskriti Gifts and Events’ Collects Information on its Users</h5>
                        <p>We may use the information collected to, but not limited to:
                            :</p>

                        <ul>
                            <li>Fulfilling our sending gift cards and shipping of products to the customer(s).
                            </li>
                            <li>Analyzing and tracking data to determine the necessity or frequency of use of certain content and to better understand the online activity of our website and application and product and gift cards users.</li>
                            <li>Providing you with the information, products, gifts and gift cards or services that you have requested.
                            </li>
                            <li>Providing you with Website, application, service, and product support.
                            </li>


                            <li>The process of developing new products, websites, content or services.
                            </li>

                            <li>Communicating with you about news, products, services, events and other information you have requested, or we think will benefit your experiences with our products or services.
                            </li>

                            <li>Protecting the intellectual property, products, patents, trademarks, copyrights, and content of the ‘Saja Sanskriti Gifts and Events’ (as defined below) and others.
                            </li>

                            <li>Linking, connecting or combining Information we collect from or about you with other Information.
                            </li>

                            <li>Carrying out any other purpose or reason for which the Information was collected.
                            </li>
                        </ul>


                        <h5 style={{ marginTop: '50px' }}>How ‘Saja Sanskriti Gifts and Events’ and our Service Providers may/will use Informatio
                            n on Its Users</h5>
                        <p>We may share information about you in the following ways but are not limited to:</p>

                        <ul>
                            <li>
                                Use our Website, products, software, or services with your consent.</li>

                            <li>At your instruction or the instruction of your representative.</li>

                            <li> With ‘Saja Sanskriti Gifts and Events’, current or future partner companies, affiliates, subsidiaries and with other companies under common control or ownership with us or our offices domestically or internationally.</li>

                            <li>With third parties or service providers that provide services or perform work for us.</li>

                            <li>Certain information you may choose to share may be displayed publicly, such as your username and any content you post when you use interactive areas of our Website like but not limited to our software or application Decentralized Exchange, online forums, and content we post with comment or feedback options.</li>

                            <li>With any entities that may merge with our purchase outright all or part of our company, company assets, or if we do a financing or are involved in an acquisition or any other situation where Information may be disclosed or transferred as one of our company’s assets.</li>

                            <li>If the proper legal authorities request your information and have provided the appropriate legal documented proof of warrant or court-ordered request for access or copies of your private information.</li>

                            <li> If we believe your actions are inconsistent with our user agreements or policies or to protect the rights, property, information, and safety of any ‘Saja Sanskriti Gifts and Events’ users, affiliates, partners or others.</li>

                            <li>To protect the Services, prevent unauthorized access and where we believe necessary to investigate, prevent or take action regarding illegal activities, suspected fraud, situations involving potential threats to the safety of any person, or violations of our Terms and condition or this Privacy Notice.</li>
                        </ul>

                        <h5 style={{ marginTop: '50px' }}>Protection of Personal Information</h5>
                        <p style={{ textIndent: '30px' }}>We take reasonable steps to protect the security of the information communicated through our Website and Application. However, no computer security system is entirely foolproof, and the Internet is not a secure method of transmitting information. As a result, we do not assume any responsibility for the data you submit to or receive from us through the Internet or for any unauthorized access or use of that information and we cannot and do not guarantee that information communicated by you to us or sent to you by us will be received or that it will not be altered before or after its transmission to us. You agree to not hold us and our respective past, present, and future employees, officers, directors, contractors, consultants, equity holders, suppliers, vendors, service providers, parent companies, subsidiaries, affiliates, agents, representatives, predecessors, successors and assigns (collectively, the "Saja Sanskriti Gifts and Events") liable for any loss or damage of any sort incurred as a result of any misappropriation, interception, modification, deletion, destruction or use of information provided through our Website. Most web browsers are set to accept cookies as a default. You may wish to opt out by turning off cookies (please refer to the help menu on your browser); however, switching off cookies may limit your access to certain features of our Website and Application. restrict your use of our Website and Application. You may also opt-out of receiving promotional communications from us at any time by following the instructions in those communications. If you opt-out, we may still send you non-promotional communications, such as technical notices, support or administrative notifications or information about your account (if you have one).
                        </p>



                        <h5 style={{ marginTop: '50px' }}>Changes to our Privacy Policy</h5>
                        <p style={{ textIndent: '30px' }}>We may change this Privacy Policy anytime without warning or for any reason. Any revisions or edits to this Privacy Policy will be posted on the top of the Privacy Policy page itself. It is your obligation to periodically visit our Website’s Privacy Policy page to review any changes that may be made to this Privacy Policy. Your continued use of our Website and Application constitutes your agreement to be bound by any such changes to this Privacy Policy. If you disagree with this Privacy Policy, you are not authorized to use our Website and Application your sole recourse is not to use our website.</p>

                        <h5 style={{ marginTop: '50px' }}>Contact Us
                        </h5>

                        <p>If you have any questions about this Privacy Policy, please contact us via email at <a href="mailto:gift@gmail.com">gift@gmail.com</a></p>


                    </div>
                </div>




                <div className="backto-t op">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>


                <Footer />

            </React.Fragment>
        )
    }
}
export default ServiceDetails;