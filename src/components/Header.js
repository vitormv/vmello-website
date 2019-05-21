import React from 'react';

const Header = () => (
    <header className="l-section l-section--full-size">
        <div className="l-section__header l-section__header--borderless" />
        <div className="l-section__content">
            <div className="l-section__container">
                <div className="o-homepage">
                    <div className="o-headline o-homepage__headline">
                        <div className="o-headline__brand o-brand">
                            <h1 className="o-brand__name o-headline__title">
                                <span className="o-brand__word">
                                    Vitor
                                </span>
                                <span className="o-brand__word o-brand__word--highlight">
                                    &nbsp;Mello
                                </span>
                            </h1>
                            <h2 className="o-brand__subtitle o-headline__subtitle">
                                Senior Full-Stack Developer &#x26;&nbsp;
                                <span
                                    className="o-tooltip"
                                    aria-label="It is the most widely known partner dance from Brazil, with lots of arm figures, footwork and style."
                                >
                                    Forró
                                </span>
                                &nbsp;Lover
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
);

export { Header };
