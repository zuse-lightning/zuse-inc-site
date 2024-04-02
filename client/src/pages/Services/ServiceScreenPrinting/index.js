import React from "react";
import { Header, Image } from "semantic-ui-react";
import { Helmet } from "react-helmet-async";
import ScreenPrinting from "../../../assets/images/banners/screenprinting.jpg";
import PageContactFooter from "../../../components/PageContactFooter";
import Screen1 from "../../../assets/images/examples/Screen1.jpg";
import Screen3 from "../../../assets/images/examples/Screen3.jpg";
import Screen5 from "../../../assets/images/examples/Screen5.jpg";
import Screen6 from "../../../assets/images/examples/Screen6.jpg";
import Screen7 from "../../../assets/images/examples/Screen7.jpg";
import Screen8 from "../../../assets/images/examples/Screen8.jpg";
import Screen9 from "../../../assets/images/examples/Screen9.jpg";
import Screen10 from "../../../assets/images/examples/Screen10.jpg";
import ZuseFavicon from "../../../assets/images/zuse-favicon.png";
import ACPFavicon from "../../../assets/images/ACP-favicon.png";

import "./style.css";

const screenPrintingResults = [
    Screen1,
    Screen3,
    Screen5,
    Screen6,
    Screen7,
    Screen8,
    Screen9,
    Screen10
];

const ServiceScreenPrinting = (props) => {

    const { location } = props;

    return (
        <>
            <Helmet>
                {location.includes("americancontractprinting.com") ? <link rel="icon" href={ACPFavicon} /> : <link rel="icon" href={ZuseFavicon} />}
                <title>{location.includes("americancontractprinting.com") ? "American Contract Printing" : "Zuse Inc."} - Screen Printing</title>
                <meta name="description" content="From sleek hoodies to casual tees, our expertise in screen printing ensures that your brand stands
                    out with high-quality prints that capture attention and leave a lasting impression." />
                <meta name="keywords" content="Screen Printing, Branford, New Haven, CT, Fulfillment, Promotional Items, Custom Apparel, T-Shirts, Hoodies" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Screen Printing" />
                <meta property="og:description" content="From sleek hoodies to casual tees, our expertise in screen printing ensures that your brand stands out with high-quality prints that capture attention and leave a lasting impression." />
                <meta property="og:image" content="https://www.zuse.com/static/media/screenprinting.3a78ea797863e294b664.jpg" />
                <meta property="og:url" content="https://www.zuse.com/services/screenprinting" />
                <meta name="robots" content="index, follow" />
            </Helmet>
            <div id="screen-printing-container">
                <Header as="h1" id="screen-printing-header">Screen Printing</Header>
                <Image draggable="false" fluid src="https://zuse-inc-bucket.s3.amazonaws.com/banners/screenprinting.jpg" />
                <br />
                <Header as="h2" className="screen-printing-subheader">How It Works</Header>
                <br />
                <p className="screen-printing-text">
                    From sleek hoodies to casual tees, our expertise in screen printing ensures that your brand stands
                    out with high-quality prints that capture attention and leave a lasting impression.
                </p>
                <br />
                <p className="screen-printing-text">
                    Whether you have existing artwork or need assistance creating a custom design, our skilled team
                    ensures that your vision is brought to life with precision and clarity. Once the design is finalized,
                    we create screens for each color in your design, allowing for vibrant and detailed prints.
                </p>
                <br />
                <p className="screen-printing-text">
                    Using high-quality inks and advanced equipment, we carefully apply each color layer onto the material,
                    resulting in bold, long-lasting prints that make a statement. Whether you're printing on cotton, polyester,
                    or specialty fabrics, our screen printing process delivers consistent results with exceptional color accuracy
                    and detail.
                </p>
                <br />
                <p className="screen-printing-text">
                    Quality is our top priority. We conduct thorough inspections throughout the printing process to ensure that each
                    print meets our strict standards for clarity, color consistency, and durability. With our attention to detail and
                    commitment to excellence, you can trust that your printed products will exceed expectations.
                </p>
                <br />
                <p className="screen-printing-text">
                    Whether you're looking to create custom apparel for your team, promotional items for your business, or branded merchandise for your event, our screen printing services offer a reliable and cost-effective solution.
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
        </>
    );
};

export default ServiceScreenPrinting;