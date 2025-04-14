import React from "react";
import { Divider, Header, List } from "semantic-ui-react";
import SEO from "../../components/SEO";
import { useLocation, Link } from "react-router-dom";

import "./style.css";

const TermsOfService = (props) => {
    return (
        <div id="terms-service-container">
            <Header id="terms-service-header" as="h1">Terms of Service</Header>
            <div id="terms-service">
                <Header id="terms-last-updated" as="h5">Last updated: 4/8/2025</Header>
                <div id="terms-overview">
                    <Header id="terms-overview-header" as="h3">OVERVIEW</Header>
                    <List id="terms-overview-list" ordered>
                        <List.Item className="terms-overview-list-item">
                            This campaign sends SMS Notifications, Alerts & Occasional Marketing Communication to customers
                            who have opted in to receive SMS notifications.
                        </List.Item>
                        <List.Item className="terms-overview-list-item">
                            You can cancel the SMS service at any time. Simply text "STOP" to the shortcode. Upon sending
                            "STOP," we will confirm your unsubscribe status via SMS. Following this confirmation, you will
                            no longer receive SMS messages from us. To rejoin, sign up as you did initially, and we will
                            resume sending SMS messages to you.
                        </List.Item>
                        <List.Item className="terms-overview-list-item">
                            If you experience issues with the messaging program, reply with the keyword HELP for more
                            assistance, or reach out directly to customersupport@zuse.com.
                        </List.Item>
                        <List.Item className="terms-overview-list-item">
                            Carriers are not liable for delayed or undelivered messages.
                        </List.Item>
                        <List.Item className="terms-overview-list-item">
                            As always, message and data rates may apply for messages sent to you from us and to us from you.
                            Message frequency varies. For questions about your text plan or data plan, contact your wireless
                            provider.
                        </List.Item>
                        <List.Item className="terms-overview-list-item">
                            For privacy-related inquiries, please refer to our privacy policy: <Link to="/privacy">Privacy Policy</Link>.
                        </List.Item>
                    </List>
                    <p className="terms-text">
                        This website is operated by Zuse Inc. Throughout the site, the terms “we”, “us” and “our” refer to Zuse Inc. 
                        Zuse Inc. offers this website, including all information, tools, and Services available from this site to you, 
                        the user, conditioned upon your acceptance of all terms, conditions, policies, and notices stated here.
                    </p>
                    <p className="terms-text">
                        By visiting our site and/or submitting an inquiry through our contact or booking form, you engage in our “Service” 
                        and agree to be bound by the following terms and conditions (“Terms of Service”, “Terms”), including those additional 
                        terms and policies referenced herein and/or available by hyperlink. These Terms of Service apply to all users of the site, 
                        including but not limited to browsers, potential customers, and contributors of content.
                    </p>
                    <p className="terms-text">
                        Please read these Terms of Service carefully before accessing or using our website. By accessing or using any part of the 
                        site, you agree to be bound by these Terms. If you do not agree to all the terms and conditions of this agreement, then you 
                        may not access the website or use any of the Services.
                    </p>
                    <p className="terms-text">
                        We reserve the right to update, change, or replace any part of these Terms by posting updates to our website. It is your 
                        responsibility to check this page periodically for changes. Your continued use of or access to the website following any 
                        changes constitutes acceptance of those changes.
                    </p>
                </div>
                <Divider className="terms-divider" />
                <div className="terms-service-section">
                    <Header id="terms-service-section-header" as="h3">SECTION I – SERVICE TERMS</Header>
                    <p className="terms-text">
                        By using our Site and submitting a custom printing inquiry or booking a call, you represent that you are at least the age 
                        of majority in your state or province of residence. You may not use the Services for any illegal or unauthorized purpose.
                    </p>
                    <p className="terms-text">
                        You agree not to submit false or misleading information through any contact or inquiry form on the site. A breach or 
                        violation of any of the Terms will result in termination of your access to the Services.
                    </p>
                </div>
                <Divider className="terms-divider" />
                <div className="terms-service-section">
                    <Header id="terms-service-section-header" as="h3">SECTION II – GENERAL CONDITIONS</Header>
                    <p className="terms-text">
                        We reserve the right to refuse Services to anyone for any reason at any time.
                    </p>
                    <p className="terms-text">
                        You agree not to reproduce, duplicate, copy, sell, resell, or exploit any portion of the Service without express 
                        written permission by us.
                    </p>
                    <p className="terms-text">
                        Headings used in this agreement are for convenience only and will not limit or affect these Terms.
                    </p>
                </div>
                <Divider className="terms-divider" />
                <div className="terms-service-section">
                    <Header id="terms-service-section-header" as="h3">SECTION III – ACCURACY, COMPLETENESS AND TIMELINESS OF INFORMATION</Header>
                    <p className="terms-text">
                        We are not responsible if information made available on this site is inaccurate, incomplete, or not current. Any 
                        reliance on the material on this site is at your own risk. We reserve the right to modify site content at any time, 
                        but we are not obligated to update it.
                    </p>
                </div>
                <Divider className="terms-divider" />
                <div className="terms-service-section">
                    <Header id="terms-service-section-header" as="h3">SECTION IV – MODIFICATIONS TO THE SERVICE</Header>
                    <p className="terms-text">
                        We reserve the right to modify or discontinue the Service (or any part thereof) without notice at any time.
                    </p>
                    <p className="terms-text">
                        We shall not be liable to you or to any third party for any modification, suspension, or discontinuance of the Service.
                    </p>
                </div>
                <Divider className="terms-divider" />
                <div className="terms-service-section">
                    <Header id="terms-service-section-header" as="h3">SECTION V – SERVICES</Header>
                    <p className="terms-text">
                        Zuse Inc. does not sell products through this website. All Services offered are custom in nature and begin with an 
                        appointment or inquiry. Final pricing, production timelines, and project requirements are communicated on a case-by-case 
                        basis, based on individual client needs.
                    </p>
                    <p className="terms-text">
                        All information shared via the Site, including form submissions or uploaded project details, is subject to review and may 
                        be used to determine project eligibility or fit.
                    </p>
                </div>
                <Divider className="terms-divider" />
                <div className="terms-service-section">
                    <Header id="terms-service-section-header" as="h3">SECTION VI – INQUIRY SUBMISSIONS AND COMMUNICATION</Header>
                    <p className="terms-text">
                        You agree to provide accurate, complete, and current information when submitting a form on our Site.
                    </p>
                    <p className="terms-text">
                        We reserve the right to decline service if your inquiry appears incomplete, misleading, or violates our company policies.
                    </p>
                    <p className="terms-text">
                        All contact initiated through the Site will be responded to via the contact details you provide, including phone or email.
                    </p>
                </div>
                <Divider className="terms-divider" />
            </div>
        </div>
    );
};

export default TermsOfService;