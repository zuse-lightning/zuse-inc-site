import React from "react";
import { Header, Divider, List } from "semantic-ui-react";
import SEO from "../../components/SEO";
import { useLocation, Link } from "react-router-dom";

import "./style.css";

const PrivacyPolicy = (props) => {
    return (
        <div id="privacy-policy-container">
            <Header id="privacy-policy-header" as="h1">Privacy Policy</Header>
            <div id="privacy-policy">
                <Header id="privacy-policy-updated" as="h5">Last updated: 4/8/2025</Header>
                <div className="privacy-policy-section">
                    <p className="privacy-text">
                        No mobile information will be shared with third parties/affiliates for marketing/promotional purposes. Information
                        sharing to subcontractors in support services, such as customer service is permitted. All other use case categories
                        exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.
                    </p>
                    <p className="privacy-text">
                        This Privacy Policy describes how Zuse Inc. (“Zuse”, “we”, “us”, or “our”) collects, uses, and discloses your personal
                        information when you visit, interact with, or submit an inquiry through www.zuse.com (the “Site”) or otherwise engage
                        with us (collectively, the “Services”). For purposes of this Privacy Policy, “you” and “your” means you as the user of
                        the Services, whether you are submitting a custom printing inquiry, scheduling a call, or otherwise engaging with our
                        business.
                    </p>
                    <p className="privacy-text">
                        Please read this Privacy Policy carefully. By using or accessing any part of our Services, you agree to the collection,
                        use, and disclosure of your information as described here. If you do not agree with our practices, please do not use our
                        Services.
                    </p>
                </div>
                <Divider className="privacy-divider" />
                <div className="privacy-policy-section">
                    <Header id="privacy-policy-section-header" as="h3">Changes to This Privacy Policy</Header>
                    <p className="privacy-text">
                        We may update this Privacy Policy from time to time to reflect changes in our practices, operations, or legal obligations.
                        Any updates will be posted on this page with the revised “Last updated” date. We encourage you to review this page periodically.
                    </p>
                </div>
                <Divider className="privacy-divider" />
                <div className="privacy-policy-section">
                    <Header id="privacy-policy-section-header" as="h3">How We Collect and Use Your Personal Information</Header>
                    <p className="privacy-text">
                        We collect personal information about you to provide Services and respond to your inquiries regarding custom printing. We only collect what is necessary for these purposes. This includes:<br /><br />
                        Information You Provide Directly<br /><br />
                        You may provide personal information when you fill out a contact or appointment form, including:<br /><br />
                    </p>
                    <List as="ol">
                        <List.Item as="li" value="*">Name</List.Item>
                        <List.Item as="li" value="*">Email address</List.Item>
                        <List.Item as="li" value="*">Phone number</List.Item>
                        <List.Item as="li" value="*">Business name</List.Item>
                        <List.Item as="li" value="*">Project details and notes</List.Item>
                        <List.Item as="li" value="*">Preferred time for a call or appointment</List.Item>
                        <List.Item as="li" value="*">Any files or documents you voluntarily upload related to your printing needs</List.Item>
                    </List>
                    <p className="privacy-text">
                        We may update this Privacy Policy from time to time to reflect changes in our practices, operations, or legal obligations.
                        Any updates will be posted on this page with the revised “Last updated” date. We encourage you to review this page periodically. <br /><br />
                        Information We Collect Automatically<br /><br />
                        When you visit our Site, we may automatically collect certain technical data such as:<br /><br />
                        <List as="ol">
                            <List.Item as="li" value="*">IP address</List.Item>
                            <List.Item as="li" value="*">Browser type and version</List.Item>
                            <List.Item as="li" value="*">Device identifiers</List.Item>
                            <List.Item as="li" value="*">Pages visited, time spent, and interactions with the Site</List.Item>
                            <List.Item as="li" value="*">Referring URL</List.Item>
                        </List>
                    </p>
                    <p className="privacy-text">
                        We use cookies and similar technologies to collect this data to improve the Site’s performance and user experience.<br /><br />
                        Information from Third Parties<br /><br />
                        We may receive limited information from third-party providers (e.g., booking systems, analytics platforms) that help us manage inquiries, schedule appointments, or analyze website traffic. Any data collected from such sources will be used only in accordance with this Privacy Policy.
                    </p>
                </div>
                <Divider className="privacy-divider" />
                <div className="privacy-policy-section">
                    <Header id="privacy-policy-section-header" as="h3">How We Share Personal Information</Header>
                    <p className="privacy-text">
                        We may share personal information in the following limited cases:
                    </p>
                    <List as="ol">
                        <List.Item as="li" value="*">Service Providers: With vendors and platforms that help us run our business (e.g., scheduling software, analytics, CRM tools, website hosting).</List.Item>
                        <List.Item as="li" value="*">Legal Compliance: When required by law, regulation, or legal process.</List.Item>
                        <List.Item as="li" value="*">Business Transfers: In connection with a potential merger, acquisition, or business restructuring.</List.Item>
                        <List.Item as="li" value="*">With Your Consent: If you instruct us to share your information with another party or request a referral.</List.Item>
                    </List>
                    <p className="privacy-text">
                        We do not sell or rent your personal information.
                    </p>
                </div>
                <Divider className="privacy-divider" />
                <div className="privacy-policy-section">
                    <Header id="privacy-policy-section-header" as="h3">Cookies and Tracking</Header>
                    <p className="privacy-text">
                        We use cookies and similar tools to analyze how visitors use our Site. These may include Google Analytics or comparable tools to collect anonymous traffic data and measure performance.
                        Most web browsers accept cookies by default. You can adjust your settings to reject cookies, but this may affect your experience on the Site.
                    </p>
                </div>
                <Divider className="privacy-divider" />
                <div className="privacy-policy-section">
                    <Header id="privacy-policy-section-header" as="h3">Your Rights</Header>
                    <p className="privacy-text">
                        Depending on your location, you may have the following rights:
                    </p>
                    <List as="ol">
                        <List.Item as="li" value="*">Right to Know: What personal information we collect and how we use it.</List.Item>
                        <List.Item as="li" value="*">Right to Access: A copy of the personal information we hold about you.</List.Item>
                        <List.Item as="li" value="*">Right to Correct: You can request correction of inaccurate or outdated information.</List.Item>
                        <List.Item as="li" value="*">Right to Delete: You may request we delete your personal information (subject to legal requirements).</List.Item>
                        <List.Item as="li" value="*">Right to Withdraw Consent: Where we rely on consent, you may withdraw it at any time.</List.Item>
                    </List>
                    <p className="privacy-text">
                        To exercise any of these rights, please email us at customersupport@zuse.com. We may need to verify your identity before processing your request.
                    </p>
                </div>
                <Divider className="privacy-divider" />
                <div className="privacy-policy-section">
                    <Header id="privacy-policy-section-header" as="h3">Security and Data Retention</Header>
                    <p className="privacy-text">
                        We implement reasonable administrative and technical safeguards to protect your personal data. However, no system is completely secure. Do not submit
                        sensitive or confidential information through unprotected channels.
                    </p>
                    <p className="privacy-text">
                        We retain personal information only as long as necessary to respond to inquiries, conduct follow-ups, or comply with legal obligations.
                    </p>
                </div>
                <Divider className="privacy-divider" />
                <div className="privacy-policy-section">
                    <Header id="privacy-policy-section-header" as="h3">User-Generated Content</Header>
                    <p className="privacy-text">
                        Our Services may allow users to submit testimonials or reviews (if implemented). Any content submitted to public-facing sections of the Site is viewable by others.
                        Please exercise caution before posting any personal information publicly.
                    </p>
                </div>
                <Divider className="privacy-divider" />
                <div className="privacy-policy-section">
                    <Header id="privacy-policy-section-header" as="h3">Third-Party Links</Header>
                    <p className="privacy-text">
                        Our Site may contain links to third-party websites or services. These are not operated or controlled by Zuse, and we are not responsible for the content or privacy
                        practices of any third-party platforms. We recommend reviewing their privacy policies separately.
                    </p>
                </div>
                <Divider className="privacy-divider" />
                <div className="privacy-policy-section">
                    <Header id="privacy-policy-section-header" as="h3">Children’s Data</Header>
                    <p className="privacy-text">
                        Our Site is not intended for children under 13 years of age, and we do not knowingly collect personal information from children. If we discover we’ve collected such
                        information, we will delete it promptly.
                    </p>
                </div>
                <Divider className="privacy-divider" />
                <div className="privacy-policy-section">
                    <Header id="privacy-policy-section-header" as="h3">International Visitors</Header>
                    <p className="privacy-text">
                        If you access the Site from outside the United States, your data may be transferred and stored in the U.S. or other jurisdictions with different data protection laws.
                        By using our Services, you consent to such transfers.
                    </p>
                </div>
                <Divider className="privacy-divider" />
                <div className="privacy-policy-section">
                    <Header id="privacy-policy-section-header" as="h3">Contact Us</Header>
                    <p className="privacy-text">
                        If you have questions about this Privacy Policy or wish to exercise your rights, contact us at:<br /><br />
                        Email: customersupport@zuse.com<br /><br />
                        Mailing Address: 54 E. Industrial Road Branford CT, 06405<br /><br />
                    </p>
                </div>
                <Divider className="privacy-divider" />
            </div>
        </div>
    );
};

export default PrivacyPolicy;