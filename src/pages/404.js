import React from 'react';
import { Link } from 'gatsby';
import { Layout } from 'src/components/Layout';
import { SEO } from 'src/components/SEO';
import { SocialButtons } from 'src/components/SocialButtons';

const NotFoundPage = () => (
    <Layout>
        <SEO title="404: Not found" />

        <header className="l-section l-section--full-size">
            <div className="l-section__header l-section__header--borderless" />
            <div className="l-section__content">
                <div className="l-section__container">
                    <div className="o-homepage">
                        <div className="o-headline o-homepage__headline">
                            <div className="o-headline__brand o-brand">
                                <h1 className="o-brand__name o-headline__title">
                                    <span className="o-brand__word o-brand__word--highlight">
                                        404
                                    </span>
                                </h1>
                                <h2 className="o-brand__subtitle o-headline__subtitle">
                                    Whatever that was... it ain&#39;t here, ¯\_(ツ)_/¯.
                                </h2>
                                <h2 className="o-brand__subtitle">
                                    Feel like trying the&nbsp;
                                    <Link to="/">homepage</Link>
                                    &nbsp;instead?
                                </h2>
                            </div>

                            <SocialButtons email={false} />
                        </div>

                        <div className="o-contact-info o-homepage__contact-info">
                            <hr />

                            <div className="o-contact-info__items">
                                <div className="o-contact-info__item">
                                    <h4 className="o-contact-info__label">Location</h4>
                                    <address className="o-contact-info__value">
                                        Berlin, Germany
                                    </address>
                                </div>

                                <div className="o-contact-info__item">
                                    <h4 className="o-contact-info__label">Web</h4>
                                    <span className="o-contact-info__value">
                                        https://vmello.com
                                    </span>
                                </div>

                                <div className="o-contact-info__item">
                                    <h4 className="o-contact-info__label">Email</h4>
                                    <span className="o-contact-info__value">
                                        vitor@vmello.com
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </Layout>
);

export default NotFoundPage;
