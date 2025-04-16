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
                        Any updates will be posted on this page with the revised “Last updated” date. We encourage you to review this page periodically.
                    </p>
                </div>
                <Divider className="privacy-divider" />
            </div>
        </div>
    );
};

export default PrivacyPolicy;