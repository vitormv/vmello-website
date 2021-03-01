import React from 'react';
import Helmet from 'react-helmet';
import styles from './PaperPage.module.scss';

const PaperPage = ({ resume }) => (
  <div className={`${styles.a4} ${styles.sheet} ${styles['padding-10mm']}`}>
    <Helmet>
      <body className={styles.root} />
    </Helmet>

    <article>
      <header className={`${styles.row} ${styles.header}`}>
        <aside className={styles.sidebar}>
          <h1>{resume.title}</h1>
          <h2>{resume.subtitle}</h2>
        </aside>

        <div className={styles.content}>
          <ul className={styles.contact}>
            {resume.links.map((link) => (
              <li key={link.name}>
                {!link.href && link.name}
                {link.href && (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.name}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </header>

      <main className={styles.row}>
        <aside className={styles.sidebar}>
          <section>
            <h3>Hello</h3>
            <p align="justify">
              {resume.summary}
            </p>
          </section>

          <section>
            <h3>Education</h3>
            <div className={styles.education}>
              {resume.education.map((place) => (
                <React.Fragment key={`${place.institution}.${place.studyType}`}>
                  <h4>
                    {place.studyType}
                    {', '}
                    {place.area}
                  </h4>
                  <p>
                    {place.institution}
                  </p>
                  <em>{place.years}</em>
                </React.Fragment>
              ))}
            </div>
          </section>

          <section>
            <h3>Skills</h3>
            <ul className={styles.skills}>
              {resume.skills.map((skill) => (
                <li key={skill.name}>
                  <span className={styles.skillName}>
                    {skill.name}
                  </span>
                  <span className={styles.skillLevel}>
                    {` (${skill.level})`}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h3>Languages</h3>
            <ul className={styles.languages}>
              {resume.languages.map((item) => (
                <li key={item.language}>
                  <span className={styles.languageName}>
                    {item.language}
                  </span>
                  <span className={styles.languageLevel}>
                    {` (${item.fluency})`}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        </aside>

        <div className={styles.content}>
          <section>
            <h3>Experience</h3>
            {resume.work.map((job) => (
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
                    {job.positions.map((role) => (
                      <tr key={role.position}>
                        <td className={styles.title}>
                          {role.position}
                        </td>
                        <td className={styles.date}>{role.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {job.summary && (
                  <p>{job.summary}</p>
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

export { PaperPage };
