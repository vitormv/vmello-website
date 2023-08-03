const Hero = () => (
  <div className="mx-auto px-10 md:px-24 lg:max-w-screen-xl">
    <div className="flex min-h-[calc(100vh-6rem)] max-w-2xl flex-col justify-center py-28">
      <p className="pb-2 text-xl text-black">Hi, my name is</p>
      <h1 className="py-2 font-display text-[clamp(3rem,8vw,4.5rem)] font-semibold leading-tight text-black">
        Vitor Mello,
      </h1>
      <h2 className="py-2 font-display text-[clamp(1.75rem,5vw,3rem)] leading-tight text-gray">
        I build things for the web.
      </h2>
      <p className="pt-4 text-xl leading-normal text-gray">
        I&apos;m a full stack software engineer specializing in building digital experiences.
        Currently, I&apos;m focused on building a global, connected and sustainable food system at{' '}
        <a className="link" target="_blank" href="https://www.choco.com" rel="noreferrer">
          <span>Choco</span>
        </a>
        .
      </p>
    </div>
  </div>
);

export { Hero };