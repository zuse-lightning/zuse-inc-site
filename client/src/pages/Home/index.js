import React, { Component } from "react";
import HomeSlideShow from "../../components/HomeSlideShow";
import TopClients from "../../components/TopClients";
import HomeAbout from "../../components/HomeAbout";
import HomeTrustBadges from "../../components/HomeTrustBadges";
import OurServices from "../../components/OurServices";
import TopCatalogs from "../../components/TopCatalogs";
import HomeReviews from "../../components/HomeReviews";
import HomeContactForm from "../../components/HomeContactForm";
import SEO from "../../components/SEO";
import HomeVideo from "../../components/HomeVideo";

class Home extends Component {
    render() {

        const { auth, screenWidth, location, whichWebsite } = this.props;
        const homeImage = whichWebsite(location, "https://zuse-inc-bucket.s3.amazonaws.com/Zuse-Home.png", "https://zuse-inc-bucket.s3.amazonaws.com/ACP-Home.png", "https://zuse-inc-bucket.s3.amazonaws.com/Union-Home.png");
        const homeURL = whichWebsite(location, "https://www.zuse.com", "https://www.americancontractprinting.com", "https://www.americanunionprint.com");
        
        return (
            <>
                <SEO 
                    location={location}
                    whichWebsite={whichWebsite}
                    title="Custom Apparel, Promotional Items, and Web Stores"
                    description="Manufacturing company that offers screen printed or embroidered custom apparel, promotional items, and web stores for various companies, organizations, and special events."
                    keywords={`${whichWebsite(location, "Zuse Inc.", "American Contract Printing", "American Union Print")}, Branford, New Haven, Screen Printing, CT, Custom Apparel, Embroidery, Banners, Decals, Fulfillment, Shopify Stores, Promotional Items`}
                    type="website"
                    image={homeImage}
                    url={homeURL}
                />
                {whichWebsite(location, <HomeSlideShow location={location} screenWidth={screenWidth} whichWebsite={whichWebsite} />, null, null)}
                <TopClients />
                <HomeVideo />
                <HomeAbout />
                <HomeTrustBadges />
                <OurServices />
                <TopCatalogs />
                {/* <HomeReviews auth={auth} location={location} screenWidth={screenWidth} whichWebsite={whichWebsite} /> */}
                <HomeContactForm location={location} screenWidth={screenWidth} whichWebsite={whichWebsite} />
            </>
        );
    }
}

export default Home;