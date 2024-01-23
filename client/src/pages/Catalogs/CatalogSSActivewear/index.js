import React from "react";
import { Header, Image, List, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { sanmarData } from "../../../utils/sanmarData";
import PageContactFooter from "../../../components/PageContactFooter";

import "./style.css";

const CatalogSSActivewear = () => {
    return (
        <div id="ssactive-container">
            <Header as="h2" id="ssactive-header">Popular Brands</Header>
            <br />
            <div id="ssactive-brands-container">
                {sanmarData.map((product) => (
                    <>
                        <div className="ssactive-brands-col">
                            <Image className="ssactive-brands-img" src={product.images} />
                        </div>
                        <div className="ssactive-brands-col">
                            <List className="ssactive-brands-list">
                                <List.Header className="ssactive-brands-list-header">{product.names}</List.Header>
                                {product.listItems.map((listItem) => (
                                    <List.Item className="ssactive-brands-list-item">
                                        <List.Icon className="ssactive-brands-list-icon" name="check" />
                                        <List.Content className="ssactive-brands-list-content">{listItem}</List.Content>
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

export default CatalogSSActivewear;