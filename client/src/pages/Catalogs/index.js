import React, { Component } from "react";
import TopCatalogs from "../../components/TopCatalogs";
import SEO from "../../components/SEO";

class Catalogs extends Component {
    render() {

        const { location, whichWebsite } = this.props;
        const catalogsImage = whichWebsite(location, "https://zuse-inc-bucket.s3.amazonaws.com/Zuse-Catalogs.png", "https://zuse-inc-bucket.s3.amazonaws.com/ACP-Catalogs.png", "https://zuse-inc-bucket.s3.amazonaws.com/Zuse-Catalogs.png");
        const catalogsURL = whichWebsite(location, "https://www.zuse.com/catalogs", "https://www.americancontractprinting.com/catalogs", "https://www.americanunionprint.com/catalogs");

        return (
            <>
                <SEO
                    location={location}
                    whichWebsite={whichWebsite}
                    title="Catalogs"
                    description="Browse our top catalogs for your ideal product bases."
                    keywords="Zuse Inc., Branford, New Haven, Screen Printing, CT, Custom Apparel, Embroidery, Banners, Decals, Fulfillment, Shopify Stores, Promotional Items"
                    type="website"
                    image={catalogsImage}
                    url={catalogsURL}
                />
                <TopCatalogs location={location} />
            </>
        );
    }
}

export default Catalogs;