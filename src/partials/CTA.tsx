import {
  GradientText,
  // Newsletter,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const CTA = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Contact <GradientText>Me</GradientText>
        </>
      }
      description={''}
      avatar={''}
      socialButtons={
        <>
          <a href="mailto:nashehannafii@gmail.com" target='_blank'>
            <HeroSocial
              src="/assets/images/contact-gmail.png"
              alt="Gmail icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { CTA };
