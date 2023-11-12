import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>Nasheh</GradientText> 👋
        </>
      }
      description={
        <>
          Hello, I am a recent graduate from <a className="text-cyan-400 hover:underline" href="/">
          Universitas Darussalam Gontor
          </a>{' '}in 2023{' '} 
          with a background in PHP programming since 2021. My academic journey has sparked a keen{' '}
          interest in the fields of <a className="text-cyan-400 hover:underline" href="/">
          AI
          </a>{' '}and Data Analysis. I am excited about leveraging my{' '} 
          programming skills to explore the fascinating realms of artificial intelligence{' '}
          and data analytics.
          
        </>
      }
      avatar={
        <img
          className="h-80 w-64"
          src="/assets/images/avatar.svg"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          {/* <a href="https://www.instagram.com/nashehannafii0225/" target='_blank'>
            <HeroSocial
              src="/assets/images/instagram-icon.png"
              alt="Instagram icon"
            />
          </a> */}
          <a href="https://www.facebook.com/nasheh.annafii/" target='_blank'>
            <HeroSocial
              src="/assets/images/facebook-icon.png"
              alt="Facebook icon"
            />
          </a>
          <a href="https://www.linkedin.com/in/nasheh-annafii-18a6a0194/" target='_blank'>
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
          {/* <a href="/">
            <HeroSocial
              src="/assets/images/youtube-icon.png"
              alt="Youtube icon"
            />
          </a> */}
        </>
      }
    />
  </Section>
);

export { Hero };
