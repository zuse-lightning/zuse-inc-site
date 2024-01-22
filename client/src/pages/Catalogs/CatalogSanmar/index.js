import React from "react";
import { Header, Image, List } from "semantic-ui-react";
import { sanmarData } from "../../../utils/sanmarData";

import "./style.css";

const CatalogSanmar = () => {
    return (
        <div id="sanmar-container">
            <Header id="sanmar-header" as="h1">SanMar</Header>
            <Image src="#" />
            <br />
            <Header as="h2" className="embroidery-subheader">Popular Styles</Header>
            <br />
            <div id="sanmar-styles-container">
                {sanmarData.map((product) => (
                    <>
                        <div className="sanmar-styles-col">
                            <Image src="#" />
                        </div>
                        <div className="sanmar-styles-col">
                            <List className="sanmar-styles-list">
                                <List.Item className="sanmar-styles-list-item">
                                    <List.Icon className="sanmar-styles-list-icon" name="check" />
                                    <List.Content className="sanmar-styles-list-content"></List.Content>
                                </List.Item>
                            </List>
                        </div>
                    </>
                ))}
            </div>
        </div>
    );
}

export default CatalogSanmar;