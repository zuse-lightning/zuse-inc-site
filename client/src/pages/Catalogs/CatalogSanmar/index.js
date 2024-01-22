import React from "react";
import { Header, Image, List, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { sanmarData } from "../../../utils/sanmarData";
import PageContactFooter from "../../../components/PageContactFooter";
import SanmarBanner from "../../../assets/images/page-banner.png";

import "./style.css";

const CatalogSanmar = () => {
    return (
        <div id="sanmar-container">
            <Header id="sanmar-header" as="h1">SanMar</Header>
            <Image src={SanmarBanner} />
            <br />
            <Header as="h2" className="sanmar-subheader">Popular Styles</Header>
            <br />
            <div id="sanmar-styles-container">
                {sanmarData.map((product) => (
                    <>
                        <div className="sanmar-styles-col">
                            <Image className="sanmar-styles-img" src={product.images[0]} />
                        </div>
                        <div className="sanmar-styles-col">
                            <List className="sanmar-styles-list">
                                <List.Header className="sanmar-styles-list-header">{product.names}</List.Header>
                                {product.listItems.map((listItem) => (
                                    <List.Item className="sanmar-styles-list-item">
                                        <List.Icon className="sanmar-styles-list-icon" name="check" />
                                        <List.Content className="sanmar-styles-list-content">{listItem}</List.Content>
                                    </List.Item>
                                ))}
                            </List>
                            <Link target=":blank" to={product.links[0]}>
                                <Button className="more-info-btn">More Info</Button>
                            </Link>
                        </div>
                    </>
                ))}
            </div>
            <PageContactFooter />
        </div>
    );
}

export default CatalogSanmar;