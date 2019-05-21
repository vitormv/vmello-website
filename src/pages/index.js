import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Section } from 'src/components/Section/Section';
import { Layout } from 'src/components/Layout';
import { SEO } from 'src/components/SEO';

const IndexPage = ({ data }) => (
    <Layout>
        <SEO title="Home" />
        <Section
            title={data.intro.title}
            description={data.intro.description}
            isTextBlock
        >
            <p>
                Hi, my name is Vitor and I have been living in Berlin since 2013. I was born
                in Brazil
                and finished a Bachelor in Systems Analysis in 2009 and have been working as
                a Full Stack Software
                Engineer for most of my career. PHP, MySQL and Symfony have always been my
                best friends, along with
                HTML+CSS and React.js and Redux, which are also part of my daily routine.
            </p>

            <p>
                I am a fan of writing code that anyone can read and maintain, using an
                architecture that is scalable
                and maintainable for the future. Whether this means extracting things into a
                microservice, or
                refactoring old legacy code in a way they don&apos;t make people cry when
                opening the source code, I always make sure the code stays relevant and
                bug-free.
            </p>

            <p>
                I love programming and feel very confortable with learning (and using!) new
                technologies and tools.
                In fact, being a noob at something and then quickly learning and mastering
                about it is something that keeps me very motivated at work.
            </p>
        </Section>
        <Section
            title="Expertise"
            description="Things I can do well."
        >
            <ul className="o-skills">
                <li className="o-skills__item">
                    <span className="o-skills__prefix">01</span>
                    <div className="o-skills__content">
                        <h3 className="o-skills__name">React and Javascript</h3>
                        <p className="o-skills__description">
                            Writing scalable React apps is one of the things I like the
                            most.
                            Either creating Webpack tooling from scratch, or testing with
                            Jest and Enzyme, or
                            actually writing complex web apps that users will love: this is
                            where I feel at home.
                        </p>
                    </div>
                </li>
                <li className="o-skills__item">
                    <span className="o-skills__prefix">02</span>
                    <div className="o-skills__content">
                        <h3 className="o-skills__name">PHP + MySQL (&amp; Symfony)</h3>
                        <p className="o-skills__description">
                            Over nine years of experience developing server side code for
                            E-commerce, food delivery
                            platforms, integrating external payment APIs and travel websites
                            have taught me how to
                            make things fast and scalable, even under high traffic and load.
                        </p>
                    </div>
                </li>
                <li className="o-skills__item">
                    <span className="o-skills__prefix">03</span>
                    <div className="o-skills__content">
                        <h3 className="o-skills__name">CSS and HTML</h3>
                        <p className="o-skills__description">
                            I develop maintainable and reusable components that will make
                            sense for others who will
                            use it, and organize them into SASS code using concepts like
                            SMACSS and BEM. No one
                            should ever be afraid of touching CSS code.
                        </p>
                    </div>
                </li>
                <li className="o-skills__item">
                    <span className="o-skills__prefix">04</span>
                    <div className="o-skills__content">
                        <h3 className="o-skills__name">Test Driven Development</h3>
                        <p className="o-skills__description">
                            Test first, develop second. This helps me keep the architecture
                            clean, avoid spaghetti
                            code and prevent regression bugs. I believe tests should be an
                            crucial part in any
                            development cycle, and I even find it fun to write them.
                        </p>
                    </div>
                </li>
                <li className="o-skills__item">
                    <span className="o-skills__prefix">05</span>
                    <div className="o-skills__content">
                        <h3 className="o-skills__name">User Experience</h3>
                        <p className="o-skills__description">
                            Cras ornare tristique elit lorem ipsum dolor sit amet,
                            consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque
                            aliquet nibh nec urna.
                            In nisi neque, aliquet vel, dapibus id.
                        </p>
                    </div>
                </li>
                <li className="o-skills__item">
                    <span className="o-skills__prefix">06</span>
                    <div className="o-skills__content">
                        <h3 className="o-skills__name">Forró</h3>
                        <p className="o-skills__description">
                            Forró is the most famous Brazilian partner dance, with lots of
                            arm figures, foot work
                            and style, which became a (very) regular hobby for me. Since
                            2015, I have been
                            teaching regular Forró classes in Humboldt University to
                            hundreds of students each year.
                        </p>
                    </div>
                </li>
            </ul>
        </Section>
        <footer className="l-section l-section--footer">
            <div className="l-section__header" />
            <div className="l-section__content">
                <div className="l-section__container">
                    <div className="o-headline">
                        <div className="o-headline__brand o-brand">
                            <h1 className="o-brand__name o-brand__name--small o-headline__title">
                                <span className="o-brand__word">
                                    Vitor
                                </span>
                                <span className="o-brand__word o-brand__word--highlight">
                                    Mello
                                </span>
                            </h1>
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
                                    href="mailto:vitor@vmello.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="Email"
                                >
                                    <i className="fa fa-lg fa-envelope" />
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
                </div>
            </div>
        </footer>
    </Layout>
);

IndexPage.propTypes = {
    data: PropTypes.shape({
        intro: PropTypes.shape({
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
        }).isRequired,
        expertise: PropTypes.shape({
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
        }).isRequired,
    }).isRequired,
};

export default IndexPage;

export const query = graphql`
    {
        intro: homepageYaml(slug: { eq: "intro" }) {
            title
            description
            biography
        }
        expertise: homepageYaml(slug: { eq: "expertise" }) {
            title
            description
            items {
                title
                description
            }
        }
    }
`;
