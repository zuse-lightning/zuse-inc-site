import React from "react";
import { Header, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

import "./style.css";

const OtherReviews = () => {
    return (
        <div id="other-reviews-container">
                <Header as="h1" id="other-reviews-header">Thank You For Leaving A Review!</Header>
                <p className="other-reviews-text">If you liked our service, please consider leaving another review on one of the other websites below:</p>
                <div id="other-reviews">
                    <div className="other-review-col">
                        <Image
                            className="other-review-img"
                            src="https://zuse-inc-bucket.s3.us-east-1.amazonaws.com/other-reviews-sites/google-logo.png"
                            as={Link}
                            to={`https://www.google.com/search?q=Zuse+Inc.&rlz=1C5CHFA_enUS1106US1106&oq=zuse+inc.&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGEAyCAgCEEUYJxg7MggIAxAAGBYYHjIICAQQABgWGB4yBggFEEUYPDIGCAYQRRg9MgYIBxBFGD3SAQgxNzU5ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8#lrd=0x89e7d57560352e67:0xcf283c3f97c78848,3,,,,`}
                            target="_blank"
                        />
                    </div>
                    <div className="other-review-col">
                        <Image
                            className="other-review-img"
                            src="https://zuse-inc-bucket.s3.us-east-1.amazonaws.com/other-reviews-sites/Indeed-logo.png"
                            as={Link}
                            to={`https://www.indeed.com/survey/mc?cid=eaf15519bbee0117&pkind=comp%3Aheader%3Awrite-a-review-button__targeted`}
                            target="_blank"
                        />
                    </div>
                    <div className="other-review-col">
                        <Image
                            className="other-review-img"
                            src="https://zuse-inc-bucket.s3.us-east-1.amazonaws.com/other-reviews-sites/glassdoor-logo.png"
                            as={Link}
                            to={`https://www.glassdoor.com/mz-survey/employer/collectReview_input.htm?i=1051460&j=true&y=&c=PAGE_INFOSITE_TOP`}
                            target="_blank"
                        />
                    </div>
                    <div className="other-review-col">
                        <Image
                            className="other-review-img"
                            src="https://zuse-inc-bucket.s3.us-east-1.amazonaws.com/other-reviews-sites/yelp-logo.webp"
                            as={Link}
                            to={`https://www.yelp.com/writeareview/biz/9XC1FlGhffp6lrnWQkriYg?return_url=%2Fbiz%2F9XC1FlGhffp6lrnWQkriYg&review_origin=biz-details-war-button`}
                            target="_blank"
                        />
                    </div>
                    <div className="other-review-col">
                        <Image
                            className="other-review-img"
                            src="https://zuse-inc-bucket.s3.us-east-1.amazonaws.com/other-reviews-sites/Better-Business-Bureau-Emblem.png"
                            as={Link}
                            to={`https://www.bbb.org/us/ct/branford/profile/garments-printing-lettering/all-weather-high-viz-0111-5002063/customer-reviews#leave-a-review`}
                            target="_blank"
                        />
                    </div>
                </div>
            </div>
    );
};

export default OtherReviews;