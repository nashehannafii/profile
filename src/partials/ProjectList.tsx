import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <>
        Recent <GradientText>Projects</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="Khizanatuna"
        description="Join our fundraising app, dedicated to celebrating Gontor's centennial. Empower community contributions for donations, endowments, and charitable support. Together, let's aid and uplift the community for a century of Gontor's excellence."
        link="/"
        img={{ src: '/assets/images/project-khizanatuna.png', alt: 'Project Maps' }}
        category={
          <>
            <Tags color={ColorTags.YELLOW}>NodeJs</Tags>
            <Tags color={ColorTags.INDIGO}>Laravel</Tags>
            <Tags color={ColorTags.ROSE}>TypeScript</Tags>
            <Tags color={ColorTags.BLUE}>PHP</Tags>
          </>
        }
      />
      <Project
        name="SIMUDA - Sistem Informasi Mutu UNIDA"
        description="Introducing the Quality Management App for Darussalam Gontor University. Conduct audits, monitor unit performance, and track university progress seamlessly. Elevate standards and ensure continual improvement in organizational efficiency."
        link="https://simuda.unida.gontor.ac.id"
        img={{
          src: '/assets/images/project-quality-control.png',
          alt: 'LISA',
        }}
        category={
          <>
            <Tags color={ColorTags.LIME}>Yii2</Tags>
            <Tags color={ColorTags.BLUE}>PHP</Tags>
            <Tags color={ColorTags.ORANGE}>Javascript</Tags>
          </>
        }
      />
      <Project
        name="LISA - Lab Ilkes UNIDA"
        description="Management Information System for Borrowing and Managing Laboratories at the Faculty of Health Sciences, Darussalam Gontor University."
        link="https://lisa.unida.gontor.ac.id"
        img={{
          src: '/assets/images/project-lisa.png',
          alt: 'LISA',
        }}
        category={
          <>
            <Tags color={ColorTags.LIME}>Yii2</Tags>
            <Tags color={ColorTags.BLUE}>PHP</Tags>
            <Tags color={ColorTags.ORANGE}>Javascript</Tags>
          </>
        }
      />
      <Project
        name="Kuesioner"
        description="Introducing our survey and questionnaire app tailored for Darussalam Gontor University's academic community. Transforming into a centralized hub, it serves as a comprehensive data repository for surveys and questionnaires, fostering insightful analysis."
        link="https://kuesioner.unida.gontor.ac.id"
        img={{ src: '/assets/images/project-kuesioner.png', alt: 'Project Fire' }}
        category={
          <>
            <Tags color={ColorTags.LIME}>Yii2</Tags>
            <Tags color={ColorTags.BLUE}>PHP</Tags>
            <Tags color={ColorTags.ORANGE}>Javascript</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
