const Intro = () => {
  const yearToday = new Date().getFullYear();
  const firstJobYear = 2008;

  return (
    <>
      <div className="mx-auto px-10 md:px-24 lg:max-w-screen-xl">
        <div className="md:flex md:gap-20">
          <h3 className="mb-2 grow-0 basis-1/3 font-display text-2xl md:text-right" id="about">
            About
          </h3>

          <div className="flex shrink-0 basis-1/2 flex-col gap-4 text-lg">
            <p>
              Hi, my name is Vitor and I have been working as a Full-Stack Software Engineer for{' '}
              {yearToday - firstJobYear}+ years. I am an expert in Javascript (React.js) and PHP,
              and also a bit of infrastructure with Kubernetes/Docker and AWS systems. I love to
              break down complex scenarios, simplify processes and create simple solutions that help
              both the company, and my fellow colleagues.
            </p>
            <p>
              I believe coding is a team sport, thus learning to play along with and write code that
              others find easy and pleasant to work with, is a requirement. Continous attention to
              the scalability and readability of the codebase ensures things stay future-proof.
            </p>
            <p>
              Oh, and I love learning new things too, and feel very confortable with adopting new
              technologies and tools (if it aligns with the business requirements of course). In
              fact, being a noob at something and then quickly learning and mastering about it is
              something that keeps me very motivated at work.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-20 px-10 md:px-24 lg:max-w-screen-xl">
        <div className="md:flex md:gap-20">
          <h3 className="mb-2 shrink-0 grow-0 basis-1/3 font-display text-2xl md:text-right">
            Skills
          </h3>

          <div className="grid shrink-0 grow grid-cols-2 gap-4 text-left text-lg lg:grid-cols-4">
            <ul className="list-none text-sm">
              <li className="text-base">
                <strong>Languages</strong>
              </li>
              <li>Typescript</li>
              <li>Javascript</li>
              <li>PHP</li>
              <li>HTML</li>
              <li>CSS/Sass</li>
              <li>Bash</li>
            </ul>

            <ul className="list-none text-sm">
              <li className="text-base">
                <strong>Frameworks</strong>
              </li>
              <li>React</li>
              <li>Next.js</li>
              <li>Express/Node</li>
              <li>NestJS</li>
              <li>Symfony</li>
              <li />
            </ul>

            <ul className="list-none text-sm">
              <li className="text-base">
                <strong>Tools</strong>
              </li>
              <li>Webpack</li>
              <li>CSS-in-JS</li>
              <li>Jest</li>
              <li>testing-library</li>
              <li>Cypress</li>
            </ul>

            <ul className="list-none text-sm">
              <li className="text-base">
                <strong>Devops</strong>
              </li>
              <li>AWS</li>
              <li>GCloud</li>
              <li>MySQL/Postgres</li>
              <li>SQS</li>
              <li>Redis</li>
              <li>Docker</li>
              <li />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export { Intro };
