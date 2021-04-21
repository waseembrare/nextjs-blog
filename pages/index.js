import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}

export default function Home({ allPostsData }) {
  return (
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
            <p>When i'm not creating bread making spreadsheets, clinging to a large fake rock in a climbing centre or watering the 40+ houseplants (a tad obsessed), I'm dedicated to hard graft in the pursuit of creating positive change. </p>
            <p>I've been extremely lucky to have worked with a range of talented people across many industries and have varied experience, from MNCs and SMEs, through to my own modest startups.</p>
            <p>Having hit the pause life button during lockdown, reflection gave me the clarity and opportunity to scratch my chronic coding itch. I’ve since invested in furthering my skills, enrolling in a top 10 global bootcamp and now seeking to join an exciting team, in a full-stack role across the South West.</p>
        </section>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Blog</h2>
          <ul className={utilStyles.list}>
              {allPostsData.map(({ id, date, title }) => (
                  <li className={utilStyles.listItem} key={id}>
                      <Link href={`/posts/${id}`}>
                          <a>{title}</a>
                      </Link>
                      <br />
                      <small className={utilStyles.lightText}>
                          <Date dateString={date} />
                      </small>
                  </li>
              ))}
          </ul>
        </section>
      </Layout>

  )
}