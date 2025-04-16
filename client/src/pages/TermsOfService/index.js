import React from "react";
import { Divider, Header, List } from "semantic-ui-react";
import SEO from "../../components/SEO";
import { useLocation, Link } from "react-router-dom";

import "./style.css";

const TermsOfService = (props) => {

    const { location, whichWebsite } = props;

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
                            assistance, or reach out directly to {whichWebsite(location, "customersupport@zuse.com.", "customersupport@americancontractprinting.com.", "customersupport@americanunionprint.com.")}
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
                        This website is operated by {whichWebsite(location, "Zuse Inc.", "American Contract Printing.", "American Union Print.")} Throughout the site, the terms “we”, “us” and “our” refer to {whichWebsite(location, "Zuse Inc.", "American Contract Printing.", "American Union Print.")} {whichWebsite(location, "Zuse Inc.", "American Contract Printing", "American Union Print")} offers 
                        this website, including all information, tools, and Services available from this site to you,
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
                        {whichWebsite(location, "Zuse Inc.", "American Contract Printing", "American Union Print")} does not sell products through this website. All Services offered are custom in nature and begin with an
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
                <div className="terms-service-section">
                    <Header id="terms-service-section-header" as="h3">SECTION VII – OPTIONAL TOOLS</Header>
                    <p className="terms-text">
                        We may provide access to third-party tools or scheduling platforms (e.g., booking or messaging widgets).
                    </p>
                    <p className="terms-text">
                        We are not responsible for their functionality or terms. Your use of any optional tools is entirely at your own risk and
                        subject to the terms provided by the third-party providers.
                    </p>
                </div>
                <Divider className="terms-divider" />
                <div className="terms-service-section">
                    <Header id="terms-service-section-header" as="h3">SECTION VIII – THIRD-PARTY LINKS</Header>
                    <p className="terms-text">
                        Certain content, features, or links on our Site may direct you to third-party websites. We are not responsible for examining
                        or evaluating their content or accuracy.
                    </p>
                    <p className="terms-text">
                        We do not warrant or assume liability for any third-party materials or services. Use of such sites is at your own discretion.
                    </p>
                </div>
                <Divider className="terms-divider" />
                <div className="terms-service-section">
                    <Header id="terms-service-section-header" as="h3">SECTION IX – USER COMMENTS, FEEDBACK, AND OTHER SUBMISSIONS</Header>
                    <p className="terms-text">
                        If you submit testimonials, project ideas, or feedback (collectively “comments”), you grant {whichWebsite(location, "Zuse Inc.", "American Contract Printing", "American Union Print")} the right to use,
                        reproduce, publish, and distribute them in any medium without obligation.
                    </p>
                    <p className="terms-text">
                        You agree that your comments will not infringe on any rights of others and will not contain unlawful, offensive, or malicious
                        content.
                    </p>
                </div>
                <Divider className="terms-divider" />
                <div className="terms-service-section">
                    <Header id="terms-service-section-header" as="h3">SECTION X – PERSONAL INFORMATION</Header>
                    <p className="terms-text">
                        Your submission of personal information through our forms is governed by our Privacy Policy. Please refer to it to understand
                        how we handle your data.
                    </p>
                </div>
                <Divider className="terms-divider" />
                <div className="terms-service-section">
                    <Header id="terms-service-section-header" as="h3">SECTION XI – ERRORS, INACCURACIES, AND OMISSIONS</Header>
                    <p className="terms-text">
                        There may occasionally be information on our site that contains typographical errors or omissions. We reserve the right to
                        correct any errors and to update information at any time without prior notice.
                    </p>
                </div>
                <Divider className="terms-divider" />
                <div className="terms-service-section">
                    <Header id="terms-service-section-header" as="h3">SECTION XII – PROHIBITED USES</Header>
                    <p className="terms-text">
                        You are prohibited from using the Site or its content:
                    </p>
                    <List id="terms-prohibited-uses-list" as="ol">
                        <List.Item className="terms-prohibited-uses-list-item" as="li" value="(a)">
                            for any unlawful purpose;
                        </List.Item>
                        <List.Item className="terms-prohibited-uses-list-item" as="li" value="(b)">
                            to solicit others to perform unlawful acts;
                        </List.Item>
                        <List.Item className="terms-prohibited-uses-list-item" as="li" value="(c)">
                            to violate local, national, or international law;
                        </List.Item>
                        <List.Item className="terms-prohibited-uses-list-item" as="li" value="(d)">
                            to infringe upon our intellectual property;
                        </List.Item>
                        <List.Item className="terms-prohibited-uses-list-item" as="li" value="(e)">
                            to harass or harm others;
                        </List.Item>
                        <List.Item className="terms-prohibited-uses-list-item" as="li" value="(f)">
                            to transmit malicious code;
                        </List.Item>
                        <List.Item className="terms-prohibited-uses-list-item" as="li" value="(g)">
                            to spam or scrape;
                        </List.Item>
                        <List.Item className="terms-prohibited-uses-list-item" as="li" value="(h)">
                            to interfere with security features or the normal operation of the Site.
                        </List.Item>
                    </List>
                    <p className="terms-text">
                        We reserve the right to terminate your use of the Site for violating any of the above.
                    </p>
                </div>
                <Divider className="terms-divider" />
                <div className="terms-service-section">
                    <Header id="terms-service-section-header" as="h3">SECTION XIII – DISCLAIMER OF WARRANTIES; LIMITATION OF LIABILITY</Header>
                    <p className="terms-text">
                        We do not guarantee uninterrupted or error-free access to the Site. You agree that use of the Service is at your own risk.
                    </p>
                    <p className="terms-text">
                        The Site and any content made available through it are provided “as is” and “as available” without warranties of any kind.
                    </p>
                    <p className="terms-text">
                        In no case shall {whichWebsite(location, "Zuse Inc.", "American Contract Printing", "American Union Print")}, its employees, contractors, or affiliates be liable for any damages resulting from your use of
                        the Site or your inability to use the Services, including indirect or consequential losses.
                    </p>
                </div>
                <Divider className="terms-divider" />
                <div className="terms-service-section">
                    <Header id="terms-service-section-header" as="h3">SECTION XIV – INDEMNIFICATION</Header>
                    <p className="terms-text">
                        You agree to indemnify and hold harmless {whichWebsite(location, "Zuse Inc.", "American Contract Printing", "American Union Print")} and its affiliates, employees, and contractors from any claim or demand
                        made by a third party due to your breach of these Terms or your violation of any law or third-party rights.
                    </p>
                </div>
                <Divider className="terms-divider" />
                <div className="terms-service-section">
                    <Header id="terms-service-section-header" as="h3">SECTION XV – SEVERABILITY</Header>
                    <p className="terms-text">
                        If any part of these Terms is found to be unlawful, the rest of the Terms will remain enforceable.
                    </p>
                </div>
                <Divider className="terms-divider" />
                <div className="terms-service-section">
                    <Header id="terms-service-section-header" as="h3">SECTION XVI – TERMINATION</Header>
                    <p className="terms-text">
                        These Terms remain in effect unless terminated by either party. We reserve the right to terminate
                        access to the Services if we suspect you have violated any of these Terms.
                    </p>
                </div>
                <Divider className="terms-divider" />
                <div className="terms-service-section">
                    <Header id="terms-service-section-header" as="h3">SECTION XVII – ENTIRE AGREEMENT</Header>
                    <p className="terms-text">
                        These Terms, together with our Privacy Policy, constitute the entire agreement between you and {whichWebsite(location, "Zuse Inc.", "American Contract Printing", "American Union Print")} regarding the use of the Site.
                    </p>
                </div>
                <Divider className="terms-divider" />
                <div className="terms-service-section">
                    <Header id="terms-service-section-header" as="h3">SECTION XVIII – GOVERNING LAW</Header>
                    <p className="terms-text">
                        These Terms are governed by the laws of the United States. Any disputes shall be resolved in accordance
                        with U.S. law.
                    </p>
                </div>
                <Divider className="terms-divider" />
                <div className="terms-service-section">
                    <Header id="terms-service-section-header" as="h3">SECTION XIX – CHANGES TO TERMS</Header>
                    <p className="terms-text">
                        You can review the most current version of these Terms of Service on this page. We reserve the right to
                        update or change these Terms at any time. Continued use of the Site following such updates constitutes
                        acceptance.
                    </p>
                </div>
                <Divider className="terms-divider" />
                <div className="terms-service-section">
                    <Header id="terms-service-section-header" as="h3">SECTION XX – CONTACT INFORMATION</Header>
                    <p className="terms-text">
                        Questions about the Terms of Service should be sent to us at:
                    </p>
                    <List id="terms-contact-list" as="ol">
                        <List.Item className="terms-contact-list-item" as="li" value=" ">
                            Email: {whichWebsite(location, "customersupport@zuse.com.", "customersupport@americancontractprinting.com.", "customersupport@americanunionprint.com.")}
                        </List.Item>
                        <List.Item className="terms-contact-list-item" as="li" value=" ">
                            Mailing Address: 54 East Industrial Road, Branford, CT 06405
                        </List.Item>
                    </List>
                </div>
                <Divider className="terms-divider" />
                <div className="terms-service-section">
                    <Header id="terms-service-section-header" as="h3">SECTION XXI – SMS TERMS & CONDITIONS</Header>
                    <p className="terms-text">
                        {whichWebsite(location, "Zuse Inc.", "American Contract Printing", "American Union Print")} offers a mobile messaging service to help keep you updated with appointment reminders, confirmations,
                        and follow-ups related to our digital printing and print-on-demand services.
                    </p>
                    <p className="terms-text">
                        By signing up to receive text messages from {whichWebsite(location, "Zuse Inc.", "American Contract Printing", "American Union Print")}, you agree to these SMS Terms and Conditions, in addition
                        to our general Terms of Service and Privacy Policy.
                    </p>
                    <List id="terms-sms-list" as="ol">
                        <List.Header className="terms-sms-list-header" as="h4"></List.Header>
                        <List.Item className="terms-sms-list-item" as="li" value="–">
                            Program Description: Our messaging program includes service-related notifications such as appointment reminders
                            and confirmations.
                        </List.Item>
                        <List.Item className="terms-sms-list-item" as="li" value="–">
                            Opt-Out: You may cancel the SMS service at any time. Simply text “STOP” to the shortcode. After sending “STOP,”
                            you will receive a one-time confirmation message. You will no longer receive SMS messages unless you re-enroll
                            through our booking process.
                        </List.Item>
                        <List.Item className="terms-sms-list-item" as="li" value="–">
                            Support & Help: If you experience issues with the messaging program, reply with the keyword HELP, or contact us
                            at customersupport@zuse.com for assistance.
                        </List.Item>
                        <List.Item className="terms-sms-list-item" as="li" value="–">
                            Message Rates & Carrier Info: Message and data rates may apply. Message frequency may vary. Carriers are not
                            liable for delayed or undelivered messages. For questions about your text or data plan, contact your wireless
                            provider.
                        </List.Item>
                        <List.Item className="terms-sms-list-item" as="li" value="–">
                            Privacy: For more information on how we handle personal data, please review our full Privacy Policy.
                        </List.Item>
                    </List>
                </div>
            </div>
        </div>
    );
};

export default TermsOfService;