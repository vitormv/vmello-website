import styles from './Hero.module.scss';

const Hero = () => (
  <div className="container relative flex-col px-10 mx-auto lg:px-24 lg:max-w-screen-xl">
    <div className={`max-w-2xl py-28 flex flex-col justify-center ${styles.inner}`}>
      <p className="pb-2 text-xl text-black">Hi, my name is</p>
      <h1 className="py-2 font-display text-5xl font-semibold leading-tight text-black md:text-7xl">Vitor Mello.</h1>
      <h2 className="py-2 font-display text-3xl leading-tight text-gray md:text-5xl">I build things for the web.</h2>
      <p className="pt-4 text-xl leading-normal text-gray">
        I’m a full stack software engineer specializing in building digital
        experiences. Currently, I&apos;m focused on building a global, connected and sustainable food system at
        {' '}
        <a className="link" target="_blank" href="https://www.choco.com" rel="noreferrer"><span>Choco</span></a>
        .
      </p>
    </div>
  </div>
);

export { Hero };
