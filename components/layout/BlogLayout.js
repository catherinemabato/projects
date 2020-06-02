import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from '../Head'
import BlogContext from '../../context/BlogContext'
import TOC from '../TOC'
import NavBar from '../navigation/NavBar'
import Container from './Container'
import Footer from '../Footer'

export default function BlogLayout({ post, children }) {
  if (!post) return <ErrorPage statusCode={404} />
  if (post.title === undefined) throw new Error('Post title is required')

  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <BlogContext.Provider value={{ post }}>
      <Container>
        <NavBar />
      </Container>
      <Container className="js-main-content" cssBreakingPoint="lg" flex flexReverse>
        <TOC toc={post.toc} cssBreakingPoint="lg" className="bg-blue-100 mt-4 p-4 lg:bg-transparent lg:mt-0 lg:pt-0 lg:pb-8 lg:sticky lg:top-4 lg:overflow-y-auto lg:max-h-(screen-16) lg:border-l lg:border-gray-200 lg:min-w-40 lg:max-w-64 lg:-mr-20 xl:min-w-72 xl:-mr-36" />
        <main className="mt-8 px-4 sm:px-6 lg:pr-8 lg:pl-0 lg:flex-1 lg:max-w-172 xl:max-w-172">
          <header className="pr-4 sm:pr-6 md:pr-8">
            <h1 className="text-4xl font-normal text-gray-800 font-sans antialiased">{post.title}</h1>
          </header>
          <article className="mb-32">
            <Head title={post.title} />
            {children}
          </article>
        </main>
      </Container>
      <Footer />
    </BlogContext.Provider>
  )
}
