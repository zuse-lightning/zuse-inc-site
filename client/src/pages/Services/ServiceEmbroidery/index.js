import React from "react";
import { Header, Image } from "semantic-ui-react";
import PageContactFooter from "../../../components/PageContactFooter";
import SEO from "../../../components/SEO";

import "./style.css";

const embroideryResults = [
    "https://zuse-inc-bucket.s3.amazonaws.com/examples/Embroider1.jpg",
    "https://zuse-inc-bucket.s3.amazonaws.com/examples/Embroider6.jpg",
    "https://zuse-inc-bucket.s3.amazonaws.com/examples/Embroider2.jpg",
    "https://zuse-inc-bucket.s3.amazonaws.com/examples/Embroider10.jpg",
    "https://zuse-inc-bucket.s3.amazonaws.com/examples/Embroider12.jpg",
    "https://zuse-inc-bucket.s3.amazonaws.com/examples/Embroider20.jpg",
    "https://zuse-inc-bucket.s3.amazonaws.com/examples/Embroider14.jpg",
    "https://zuse-inc-bucket.s3.amazonaws.com/examples/Embroider16.jpg"
];

const ServiceEmbroidery = (props) => {

    const { screenWidth, location, whichWebsite } = props;
    let embroideryBanner = screenWidth >= 992 ? "https://zuse-inc-bucket.s3.amazonaws.com/banners/embroidery.png" : "https://zuse-inc-bucket.s3.amazonaws.com/banners/embroidery-mobile.png";
    const embroideryImage = whichWebsite(location, "https://zuse-inc-bucket.s3.amazonaws.com/Zuse-Embroidery.png", "https://zuse-inc-bucket.s3.amazonaws.com/ACP-Embroidery.png", "https://zuse-inc-bucket.s3.amazonaws.com/Union-Embroidery.png");
    const embroideryURL = whichWebsite(location, "https://www.zuse.com/services/embroidery", "https://www.americancontractprinting.com/services/embroidery", "https://www.americanunionprint.com/services/embroidery");

    return (
        <>
            <SEO 
                location={location}
                whichWebsite={whichWebsite}
                title="Embroidery"
                description="Our precision embroidery services add a touch of sophistication to your apparel, hats, and accessories."
                keywords={`Embroidery, Branford, New Haven, CT, Custom Apparel, Hats, Patches, Polos, Precision, Professionalism, Elegance, Sophistication, ${whichWebsite(location, "Zuse Inc.", "American Contract Printing", "American Union Print")}`}
                type="website"
                image={embroideryImage}
                url={embroideryURL}
            />
            <div id="embroidery-container">
                <Header as="h1" id="embroidery-header">Embroidery</Header>
                <Image draggable="false" fluid src={embroideryBanner} />
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
                <Header as="h2" className="embroidery-subheader" id="embroidery-subheader2">What You'll Get</Header>
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