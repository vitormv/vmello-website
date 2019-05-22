import React from 'react';
import { Link } from 'gatsby';
import { SEO } from '../components/SEO';

const NotFoundPage = () => (
    <React.Fragment>
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

                            <ul className="o-headline__social-buttons o-social-buttons">
                                <li className="o-social-buttons__item">
                                    <a
                                        className="o-social-buttons__button"
                                        href="https://www.github.com/vitormv"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        title="Download CV/Resume"
                                    >
                                        <i className="fa fa-lg fa-download" />
                                    </a>
                                </li>
                                <li className="o-social-buttons__item">
                                    <a
                                        className="o-social-buttons__button"
                                        href="https://www.linkedin.com/in/vitormv"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        title="LinkedIn profile"
                                    >
                                        <i className="fab fa-lg fa-linkedin" />
                                    </a>
                                </li>
                                <li className="o-social-buttons__item">
                                    <a
                                        className="o-social-buttons__button"
                                        href="https://www.github.com/vitormv"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        title="GitHub profile"
                                    >
                                        <i className="fab fa-lg fa-github" />
                                    </a>
                                </li>
                            </ul>
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
    </React.Fragment>
);

export default NotFoundPage;
