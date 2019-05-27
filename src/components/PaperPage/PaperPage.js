import React from 'react';
import { getResumeDataProvider } from 'src/providers/getResumeDataProvider';
import { OutboundLink } from 'gatsby-plugin-gtag';
import Helmet from 'react-helmet';
import styles from './PaperPage.module.scss';

const PaperPage = () => {
    const resume = getResumeDataProvider();

    return (
        <div className={`${styles.a4} ${styles.sheet} ${styles['padding-10mm']}`}>
            <Helmet>
                <body className={styles.root} />
            </Helmet>
            <article>
                <header className={`${styles.row} ${styles.header}`}>
                    <div className={styles.sidebar}>
                        <h1>{resume.title}</h1>
                        <h2>{resume.subtitle}</h2>
                    </div>
                    <div className={styles.content}>
                        <ul className={styles.contact}>
                            {resume.links.map(link => (
                                <li key={link.name}>
                                    {!link.href && link.name}
                                    {link.href && (
                                        <OutboundLink
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {link.name}
                                        </OutboundLink>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </header>
                <main className={styles.row}>
                    <div className={styles.sidebar}>
                        <section>
                            <h3>Hello</h3>
                            <p align="justify">
                                {resume.intro}
                            </p>
                        </section>
                        <section>
                            <h3>Education</h3>
                            {resume.education.map(place => (
                                <React.Fragment key={place.name}>
                                    <h4>{place.name}</h4>
                                    <p>{place.title}</p>
                                </React.Fragment>
                            ))}

                        </section>
                        <section>
                            <h3>Laguages</h3>
                            <p>
                                <strong>English</strong>
                                {' '}
                                Fluent
                            </p>
                        </section>
                    </div>
                    <div className={styles.content}>
                        <section>
                            <h3>Experience</h3>
                            {resume.experience.map(job => (
                                <div key={job.company} className={styles.experience}>
                                    <table className={styles.companyInfo}>
                                        <thead>
                                            <tr>
                                                <th>
                                                    {job.company}
                                                    <span className={styles.location}>
                                                        {job.location}
                                                    </span>
                                                </th>
                                                <th>{job.duration}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {job.roles.map(role => (
                                                <tr key={role.title}>
                                                    <td className={styles.title}>{role.title}</td>
                                                    <td className={styles.date}>{role.date}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    {job.description && (
                                        <p>{job.description}</p>
                                    )}
                                    {job.tags && (
                                        <p>
                                            <span className={styles.techStack}>
                                                Tech Stack:&nbsp;
                                            </span>
                                            {job.tags}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </section>
                    </div>
                </main>
            </article>
        </div>
    );
};

export { PaperPage };
