import React from "react";
import { Header, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { zuseReviewLinks as zuse } from "../../assets";

import "./style.css";

const OtherReviews = (props) => {
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
                            to={zuse.google}
                            target="_blank"
                        />
                    </div>
                    <div className="other-review-col">
                        <Image
                            className="other-review-img"
                            src="https://zuse-inc-bucket.s3.us-east-1.amazonaws.com/other-reviews-sites/Indeed-logo.png"
                            as={Link}
                            to={zuse.indeed}
                            target="_blank"
                        />
                    </div>
                    <div className="other-review-col">
                        <Image
                            className="other-review-img"
                            src="https://zuse-inc-bucket.s3.us-east-1.amazonaws.com/other-reviews-sites/glassdoor-logo.png"
                            as={Link}
                            to={zuse.glassdoor}
                            target="_blank"
                        />
                    </div>
                    <div className="other-review-col">
                        <Image
                            className="other-review-img"
                            src="https://zuse-inc-bucket.s3.us-east-1.amazonaws.com/other-reviews-sites/yelp-logo.webp"
                            as={Link}
                            to={zuse.yelp}
                            target="_blank"
                        />
                    </div>
                    <div className="other-review-col">
                        <Image
                            className="other-review-img"
                            src="https://zuse-inc-bucket.s3.us-east-1.amazonaws.com/other-reviews-sites/Better-Business-Bureau-Emblem.png"
                            as={Link}
                            to={zuse.bbb}
                            target="_blank"
                        />
                    </div>
                </div>
            </div>
    );
};

export default OtherReviews;