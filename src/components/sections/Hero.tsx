const Hero = () => (
  <div className="mx-auto lg:max-w-screen-xl px-10 md:px-24">
    <div className={`max-w-2xl py-28 flex flex-col justify-center min-h-[calc(100vh-6rem)]`}>
      <p className="pb-2 text-xl text-black">Hi, my name is</p>
      <h1 className="py-2 text-5xl lg:text-7xl leading-tight font-semibold text-black font-display">Vitor Mello,</h1>
      <h2 className="py-2 text-3xl lg:text-5xl leading-tight text-gray font-display">I build things for the web.</h2>
      <p className="pt-4 leading-normal text-xl text-gray">
        I’m a full stack software engineer specializing in building digital experiences. Currently, I&apos;m focused on
        building a global, connected and sustainable food system at{' '}
        <a className="link" target="_blank" href="https://www.choco.com" rel="noreferrer">
          <span>Choco</span>
        </a>
        .
      </p>
    </div>
  </div>
);

export { Hero };
