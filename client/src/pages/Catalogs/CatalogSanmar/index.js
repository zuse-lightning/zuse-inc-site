import React from "react";
import { Header, Image, List, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { sanmarData } from "../../../utils/sanmarData";
import PageContactFooter from "../../../components/PageContactFooter";

import "./style.css";

const CatalogSanmar = () => {
    return (
        <div id="sanmar-container">
            <Header as="h2" id="sanmar-header">Popular Brands</Header>
            <br />
            <div id="sanmar-brands-container">
                {sanmarData.map((product) => (
                    <>
                        <div className="sanmar-brands-col">
                            <Image className="sanmar-brands-img" src={product.images} />
                        </div>
                        <div className="sanmar-brands-col">
                            <List className="sanmar-brands-list">
                                <List.Header className="sanmar-brands-list-header">{product.names}</List.Header>
                                {product.listItems.map((listItem) => (
                                    <List.Item className="sanmar-brands-list-item">
                                        <List.Icon className="sanmar-brands-list-icon" name="check" />
                                        <List.Content className="sanmar-brands-list-content">{listItem}</List.Content>
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