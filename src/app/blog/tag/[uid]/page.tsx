import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import * as prismic from '@prismicio/client'
import { createClient } from '@/prismicio'

import Section from '@/components/Section'
import Heading from '@/components/Heading'
import BlogCard from '@/components/BlogCard'
import Pagination from '@/components/Pagination'
import { PrismicRichText } from '@/components/PrismicRichText'
import { HiTag } from 'react-icons/hi'

type Params = { uid: string }
type SearchParams = {
  [key: string]: string | string[] | undefined
}

export default async function Page({
  params,
  searchParams,
}: {
  params: Params
  searchParams: SearchParams
}) {
  const client = createClient()
  const pageNumber = Number(searchParams['page']) || 1
  const page = await client.getByUID('tag', params.uid).catch(() => notFound())
  const posts = await client.getByType('post', {
    orderings: {
      field: 'document.first_publication_date',
      direction: 'desc',
    },
    graphQuery: `
    {
      post {
        custom_tags {
          custom_tag
        }
        date_published
        excerpt
        meta_image
        title
        slices
      }
    }
    `,
    filters: [prismic.filter.at('my.post.custom_tags.custom_tag', page.id)],
    page: pageNumber,
    pageSize: 5,
  })

  const settings = await client.getSingle('settings')

  return (
    <>
      <Section width="md">
        <Heading
          as="h1"
          size="4xl"
          className="text-color-primary lg:text-center"
        >
          <HiTag className="inline h-8 w-8" /> Posts tagged as{' '}
          {prismic.asText(page.data.title)}
        </Heading>
        {prismic.isFilled.keyText(page.data.meta_description) ? (
          <p>{page.data.meta_description}</p>
        ) : null}
        {posts && posts.results.length > 0 ? (
          <ul className="px-4 lg:px-0">
            {posts.results.map(post => {
              return (
                <BlogCard
                  key={post.id}
                  post={post}
                  className="mx-auto max-w-xl"
                />
              )
            })}
          </ul>
        ) : (
          <div className="my-8 text-center">
            No posts have been tagged with this tag yet. Please try back another
            day.
          </div>
        )}
        {(posts?.next_page !== null || posts?.prev_page !== null) && (
          <Pagination
            hasNextPage={posts?.next_page !== null}
            hasPrevPage={posts?.prev_page !== null}
            totalPages={Number(posts?.total_pages)}
          />
        )}
      </Section>
    </>
  )
}

export async function generateMetadata({
  params,
}: {
  params: Params
}): Promise<Metadata> {
  const client = createClient()
  const page = await client.getByUID('tag', params.uid).catch(() => notFound())
  const settings = await client.getSingle('settings')

  return {
    title: `${prismic.asText(page.data.title)} • ${settings.data.site_title}`,
    description:
      page.data.meta_description || settings.data.site_meta_description,
    openGraph: {
      images: [settings.data.site_meta_image.url || ''],
    },
  }
}

export async function generateStaticParams() {
  const client = createClient()
  const pages = await client.getAllByType('tag')

  return pages.map(page => {
    return { uid: page.uid }
  })
}
