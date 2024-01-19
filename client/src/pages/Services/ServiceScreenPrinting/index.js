import React from "react";
import { Header, Image } from "semantic-ui-react";
import ScreenPrintingTemp from "../../../assets/images/screenprinting-banner.png";
import PageContactFooter from "../../../components/PageContactFooter";
import BlackUtility from "../../../assets/proxy/black-utility.png";
import BlackWomenUnion from "../../../assets/proxy/black-women-union.png";
import GreyUtility from "../../../assets/proxy/grey-utility.png";
import WhiteWomenUnion from "../../../assets/proxy/white-women-union.png";

import "./style.css";

const screenPrintingResults = [BlackUtility, WhiteWomenUnion, GreyUtility, BlackWomenUnion];


const ServiceScreenPrinting = (props) => {
    
    const { pathname } = props;
    console.log(pathname);
    
    return (
        <div id="screen-printing-container">
            <Header as="h1" id="screen-printing-header">Screen Printing</Header>
            <Image src={ScreenPrintingTemp} />
            <br />
            <Header as="h2" className="screen-printing-subheader">How It Works</Header>
            <br />
            <p className="screen-printing-text">
                Here at Zuse Inc., we'll screen print your T-shirts till the cows come home. Literally. Those cows take a long time to get home and that's how long
                we're gonna be printing your shirts for. Our team of hard-working screen printers say "No" to taking breaks because they are just THAT passionate
                about carrying out your order and making sure it is the best possible quality that your sweet, delectable, SCRUMPTIOUS money can buy. Don't believe us?
                Are you calling us liars? Then put your money where your mouth is and contact us, we'll show you what's what in the most professional manner possible!
            </p>
            <br />
            <Header as="h2" className="screen-printing-subheader">What You'll Get</Header>
            <div id="screen-printing-results-container">
                {screenPrintingResults.map((result, index) => (
                    <div className="result-col" key={index}>
                        <Image className="result-img" src={result} />
                    </div>
                ))}
            </div>
            <PageContactFooter />
        </div>
    );
};

export default ServiceScreenPrinting;