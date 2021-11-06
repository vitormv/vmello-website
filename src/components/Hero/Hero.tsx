import styles from './Hero.module.scss';

const Hero = () => (
  <div className="relative flex-col mx-auto container lg:max-w-screen-xl px-10 md:px-24">
    <div className={`max-w-2xl py-28 flex flex-col justify-center ${styles.inner}`}>
      <p className="pb-2 text-xl text-black">Hi, my name is</p>
      <h1 className="py-2 text-5xl md:text-7xl leading-tight font-semibold text-black font-display">Vitor Mello.</h1>
      <h2 className="py-2 text-3xl md:text-5xl leading-tight text-gray font-display">I build things for the web.</h2>
      <p className="pt-4 leading-normal text-xl text-gray">
        I’m a full stack software engineer specializing in building digital
        experiences. Currently, I’m focused on building accessible, human-centered products
        at
        {' '}
        <a className="link" target="_blank" href="https://www.choco.com" rel="noreferrer"><span>Choco</span></a>
        .
      </p>
    </div>
  </div>
);

export { Hero };
