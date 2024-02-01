import React from "react";
import { Header, Image } from "semantic-ui-react";
import ScreenPrintingTemp from "../../../assets/images/banners/screenprinting-banner.png";
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
                From sleek hoodies to casual tees, our expertise in screen printing ensures that your brand stands 
                out with high-quality prints that capture attention and leave a lasting impression.
            </p>
            <br />
            <p className="screen-printing-text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis dolorum eaque, nesciunt iste autem odio animi doloremque delectus ipsum ex reiciendis libero fuga, amet repudiandae.
                Rerum consequuntur pariatur magnam maxime. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, optio nam neque assumenda alias voluptatibus maiores accusantium? Fugiat, cumque
                saepe eius incidunt quod, suscipit distinctio a labore, accusantium officiis non! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis dolorum eaque, nesciunt iste autem
                odio animi doloremque delectus ipsum ex reiciendis libero fuga, amet repudiandae. Rerum consequuntur pariatur magnam maxime. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
                optio nam neque assumenda alias voluptatibus maiores accusantium? Fugiat, cumque saepe eius incidunt quod, suscipit distinctio a labore, accusantium officiis non!
            </p>
            <br />
            <Header as="h2" className="screen-printing-subheader">What You'll Get</Header>
            <div id="screen-printing-results-container">
                {screenPrintingResults.map((result, index) => (
                    <div className="screen-printing-result-col" key={index}>
                        <Image className="screen-printing-result-img" src={result} />
                    </div>
                ))}
            </div>
            <PageContactFooter />
        </div>
    );
};

export default ServiceScreenPrinting;