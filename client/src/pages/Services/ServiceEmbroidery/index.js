import React from "react";
import { Header, Image } from "semantic-ui-react";
import { Helmet } from "react-helmet-async";
import Embroidery from "../../../assets/images/banners/embroidery.png";
import EmbroideryMobile from "../../../assets/images/banners/embroidery-mobile.png";
import PageContactFooter from "../../../components/PageContactFooter";
import Embroider1 from "../../../assets/images/examples/Embroider1.jpg";
import Embroider2 from "../../../assets/images/examples/Embroider2.jpg";
import Embroider6 from "../../../assets/images/examples/Embroider6.jpg";
import Embroider10 from "../../../assets/images/examples/Embroider10.jpg";
import Embroider12 from "../../../assets/images/examples/Embroider12.jpg";
import Embroider14 from "../../../assets/images/examples/Embroider14.jpg";
import Embroider16 from "../../../assets/images/examples/Embroider16.jpg";
import Embroider20 from "../../../assets/images/examples/Embroider20.jpg";

import "./style.css";

const embroideryResults = [
    Embroider1,
    Embroider6,
    Embroider2,
    Embroider10,
    Embroider12,
    Embroider20,
    Embroider14,
    Embroider16,
    
];

const ServiceEmbroidery = (props) => {

    const { screenWidth } = props;

    return (
        <>
            <Helmet>
                <title>Zuse Inc. - Embroidery</title>
                <meta name="description" content="Our precision embroidery services add a touch of sophistication to your apparel, hats, and accessories." />
                <meta name="keywords" content="Embroidery, Branford, New Haven, CT, Fulfillment, Patches, Hats, Promotional Items, Custom Apparel, T-Shirts, Hoodies" />
                <meta name="robots" content="index, follow" />
            </Helmet>
            <div id="embroidery-container">
                <Header as="h1" id="embroidery-header">Embroidery</Header>
                <Image fluid src={screenWidth >= 992 ? Embroidery : EmbroideryMobile} />
                <br />
                <Header as="h2" className="embroidery-subheader">How It Works</Header>
                <br />
                <p className="embroidery-text">
                    Our precision embroidery services add a touch of sophistication to your apparel, hats, and accessories.
                    The result? A polished finish that not only stands out visually but also adds a touch of elegance to every
                    stitch.
                </p>
                <br />
                <p className="embroidery-text">
                    Embroidery adds a touch of sophistication and professionalism to any garment or accessory, and our expert 
                    embroidery services are here to bring your designs to life with precision and style. When you go through us, 
                    we’ll digitize your design, convert it into a format that can be read by our embroidery machines, and fine-tune 
                    it to ensure the best possible results.
                </p>
                <br />
                <p className="embroidery-text">
                    Once your design is ready, we carefully select the thread colors and types that will best complement your design 
                    and the fabric it will be embroidered on. With a wide range of thread options available, we can match your brand 
                    colors or create eye-catching contrast for maximum impact.
                </p>
                <br />
                <p className="embroidery-text">
                    Next comes the embroidery process itself. Using our high-tech embroidery machines, we precisely stitch your design 
                    onto the chosen garment or accessory, ensuring crisp lines and consistent results every time. Our skilled operators 
                    monitor the process closely to ensure that each stitch is perfect and that the final product meets our exacting standards.
                </p>
                <br />
                <p className="embroidery-text">
                    Whether you're embroidering polo shirts for your team, hats for an event, or patches for your organization, you can trust that 
                    our embroidery services will deliver exceptional results that you'll be proud to wear and display.
                </p>
                <br />
                <Header as="h2" className="embroidery-subheader">What You'll Get</Header>
                <div id="embroidery-results-container">
                    {embroideryResults.map((result, index) => (
                        <div className="embroidery-result-col" key={index}>
                            <Image className="embroidery-result-img" src={result} />
                        </div>
                    ))}
                </div>
                <PageContactFooter />
            </div>
        </>
    );
};

export default ServiceEmbroidery;