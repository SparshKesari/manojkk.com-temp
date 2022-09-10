import { convertToArticleList, getPublishedArticles } from '@/lib/notion';
import { ButtonType, SubscribeSize } from '@/lib/types';
import { ArticleList } from '@/components/ArticleList';
import { Button } from '@/components/Button';
import { Container } from 'layouts/Container';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import { Subscribe } from '@/components/Subscribe';
import Link from 'next/link';
import siteMetadata from '@/data/siteMetadata';
import { useRouter } from 'next/router';

const workExperience = [
  {
    company: 'LambdaTest',
    title: 'VP - Developer Relations',
    duration: '2022 - Present'
  },
  {
    company: 'Cognizant',
    title: 'Project Leadership commmittee',
    duration: '2018 - Present'
  },
  {
    company: 'Thoughtworks',
    title: 'Market Tech Principal - SEA & Australia | Digital Accessibility Advocate',
    duration: '2020 - 2022'
  },
  {
    company: 'Assertify Consulting',
    title: 'Founding Principal',
    duration: '2017 - 2020'
  },
  {
    company: 'Applitools - Automated Visual Testing',
    title: 'Technical Lead',
    duration: '2017 - 2020'
  }, {
    company: 'IAG',
    title: 'Digital Platform Architect',
    duration: '2014 - 2017'
  }, {
    company: 'Wipro Technologies',
    title: 'Technical Lead',
    duration: '2008 - 2014'
  }
];

export default function About({ recentArticles }) {
  const { push } = useRouter();
  return (
    <Container title="About Me - Manoj Kumar">
      <h1>
        <span className="block text-base font-semibold tracking-wide text-center text-teal-500 uppercase dark:text-teal-400">
          About me
        </span>
        <span className="block max-w-2xl mx-auto mt-2 text-4xl font-bold leading-10 text-center sm:text-5xl">
          Here's my story.
        </span>
      </h1>
      <p>
        I’m <a href="https://www.linkedin.com/in/manoj9788/" target="_blank" rel="noopener noreferrer">Manoj</a>, 
        a <a href ="https://github.com/manoj9788" target="_blank" rel="noopener noreferrer">developer</a>,{' '}
        {' '}
        <Link href="/blog">
          <a>blogger</a>
        </Link>{' '}
        open source enthusiast and DevRel at <a href="https://www.lambdatest.com/" target="_blank" rel="noopener noreferrer">LambdaTest</a>. He loves exploring the software development lifecycle in its entirety and is particularly passionate 
        about solving problems in the UI/UX, QA and DevOps space. He has over 13+ years of experience across
         enterprises, Fintech and early-stage startups.
      </p>
      <p>
      An avid open-source enthusiast, Manoj is a committer to the Selenium and Appium project. He is also part of the project leadership committee for Selenium. He has contributed to various libraries and frameworks like ngWebDriver, Protractor and Serenity, has hosted his own projects on Docker and Kubernetes in the automated testing ecosystem.
      </p>

      <p>
        {/* Prior to LogicGate, I worked as a senior full-stack engineer at{' '}
        <a href="https://www.cognizant.com/us/en">Cognizant</a> where I helped
        architect and develop full-stack RESTful microservices, train and
        prepare developers for delivery, and assist in leading the front-end
        practice in a lab-based working environment. */}
      </p>
      <p>
        {/* Before Cognizant, I worked as a UI Developer for{' '}
        <a href="https://www.projekt202.com">projekt202</a> helping craft design
        systems and building reusable component libraries for multi-million
        dollar companies. */}
      </p>
      <div className="grid grid-cols-1 gap-0 md:grid-cols-4 md:gap-x-5">
        <div className="col-span-1">
          <Image
            className="rounded-xl group-hover:opacity-75"
            objectFit="fill"
            src={siteMetadata.avatarImage}
            placeholder="blur"
            blurDataURL={siteMetadata.avatarImage}
            width={260}
            height={260}
            layout="responsive"
            alt={'article cover'}
          />
        </div>
        <div className="col-span-3">
          <p className="">
          Interests: Developer Relations, Legacy Modernization, Cloud, Quality, Accessibility, Observability, AI/ML Ops
          </p>
          <p>
            You can find me on <a href={siteMetadata.twitter}>Twitter</a> where
            I share tech-related tidbits and build in public, or you can follow
            me on <a href={siteMetadata.github}>GitHub</a>. I often write about
            my findings on my{' '}
            <Link href="/blog">
              <a>blog</a>
            </Link>{' '}
           .
          </p>
        </div>
      </div>
      <hr className="my-16 w-full border-none text-center h-10 before:content-['∿∿∿'] before:text-[#D1D5DB] before:text-2xl"></hr>
      <div className="flex justify-center">
      </div>
      <div className="mt-12 space-y-6">
        <h2 className="m-0 text-gray-900 dark:text-white">Work experience</h2>
        <p>Here's a brief rundown of my most recent experiences.</p>
        <div className="space-y-2">
          {workExperience.map((workItem) => (
            <div
              key={workItem.company}
              className="flex items-center space-x-3 group"
            >
              <span className="flex-none text-gray-900 gover-hover:underline dark:text-white">
                {workItem.company}
              </span>
              <span className="w-full border-t border-gray-300 border-dashed shrink dark:border-gray-700"></span>
              <span className="flex-none">{workItem.title}</span>
              <span className="flex-none">{workItem.duration}</span>
            </div>
          ))}
        </div>
       
      </div>
      {/* <hr className="my-16 w-full border-none text-center h-10 before:content-['∿∿∿'] before:text-[#D1D5DB] before:text-2xl"></hr>
      <div className="mb-12">
        <h2>I love to share my knowledge through writing.</h2>
        <p>Check out a few of my most recent publishings.</p>
        <ArticleList articles={recentArticles} />
      </div>
      <hr className="my-16 w-full border-none text-center h-10 before:content-['∿∿∿'] before:text-[#D1D5DB] before:text-2xl"></hr>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-y-8 md:gap-x-12">
        <div className="col-span-3">
          <h2>Interested in my gear?</h2>
          <p>
            I keep a list of software, applications, extensions, hardware and a
            list of supplies I've used to set up my office for those who are
            interested.
          </p>
          <Button
            buttonType={ButtonType.PRIMARY}
            onButtonClick={() => push('/toolbox')}
          >
            Check out my toolbox
          </Button>
        </div>
        <div className="col-span-2">
          <Image
            className="rounded-xl group-hover:opacity-75"
            objectFit="cover"
            src="https://res.cloudinary.com/braydoncoyer/image/upload/v1637186547/toolbox_hardware.jpg"
            placeholder="blur"
            blurDataURL="https://res.cloudinary.com/braydoncoyer/image/upload/v1637186547/toolbox_hardware.jpg"
            width={260}
            height={260}
            layout="responsive"
            alt={'article cover'}
          />
        </div>
      </div>*/}
         <div className="mt-16">
            <Subscribe size={SubscribeSize.LARGE} />
          </div>
    </Container> 


  );
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await getPublishedArticles(process.env.BLOG_DATABASE_ID);
  const { articles } = convertToArticleList(data);

  return {
    props: {
      recentArticles: articles.slice(0, 3)
    },
    revalidate: 120
  };
};
