import { useState } from 'react'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Link from 'next/link'
import AsyncAPILogo from '../AsyncAPILogo'
import Head from '../Head'
import DocsContext from '../../context/DocsContext'
import TOC from '../TOC'

export default function DocsLayout({ post, navItems = {}, children }) {
  if (!post) return <ErrorPage statusCode={404} />
  if (post.title === undefined) throw new Error('Post title is required')

  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  const [showMenu, setShowMenu] = useState(false)

  const navigation = navItems.sort((i1, i2) => {
    const i1Weight = i1.isSection ? (i1.weight + 1) * 1000 : (i1.sectionWeight + 1) * 1000 + (i1.weight || 0)
    const i2Weight = i2.isSection ? (i2.weight + 1) * 1000 : (i2.sectionWeight + 1) * 1000 + (i2.weight || 0)
    return i1Weight - i2Weight
  })

  return (
    <DocsContext.Provider value={{ post, navItems }}>
      <div className="flex h-screen max-w-7xl mx-auto overflow-hidden bg-white">
        { showMenu && (
          <DocsMobileMenu onClickClose={() => setShowMenu(false)} post={post} navigation={navigation} />
        ) }
        
        {/* <!-- Static sidebar for desktop --> */}
        <div className="hidden md:flex md:flex-shrink-0">
          <div className="flex flex-col w-64 border-r border-gray-200 bg-white">
            <div className="h-0 flex-1 flex flex-col pt-5 overflow-y-auto">
              <DocsLogo />
              
              <nav className="flex-1 mt-3 pb-8 px-2 bg-white">
                {
                  navigation.map((item, i) => (
                    <div key={`menu-item-${i}`}>
                    {
                      item.isSection ? (
                        <DocsNavItem title={item.title} href={item.slug} section />
                      ) : (
                        <DocsNavItem title={item.title} href={item.slug} active={post.slug === item.slug} />
                      )
                    }
                    </div>
                  ))
                }
              </nav>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-0 flex-1 overflow-hidden">
          <div className="flex md:hidden pl-1 pt-2 pb-2 sm:pl-3 sm:pt-3">
            <div className="flex-1 mt-1.5">
              <DocsLogo />
            </div>

            { !showMenu && (
              <button onClick={() => setShowMenu(true)} className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:bg-gray-200 transition ease-in-out duration-150" aria-label="Open sidebar">
                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            )}
          </div>
          <main className="js-main-content relative z-0 overflow-y-auto pt-2 pb-6 focus:outline-none md:py-6" tabIndex="0">
            <div className="px-4 sm:px-6 md:px-8">
              <h1 className="text-4xl font-normal text-gray-800 font-sans antialiased">{post.title}</h1>
            </div>
            <div className="px-4 sm:px-6 md:px-8">
              <p className="text-sm font-normal text-gray-400 font-sans antialiased">
                Found an error? Have a suggestion? 
                <a href={`https://github.com/asyncapi/website/blob/master/pages${post.slug}.md`} className="ml-1 underline">Edit this page on Github</a>
              </p>
            </div>
            <div className={`md:flex ${post.toc && post.toc.length ? 'md:flex-row-reverse' : ''}`}>
              <TOC toc={post.toc} contentSelector=".js-main-content" className="bg-blue-100 mt-4 p-4 md:bg-transparent md:mt-0 md:pt-0 md:pb-8 md:sticky md:top-4 md:overflow-y-auto md:max-h-(screen-16) md:w-72 md:border-l md:border-gray-200" />
              <div className="mt-8 px-4 sm:px-6 md:px-8 md:flex-1 md:max-w-(screen-34)">
                <article className="mb-32">
                  <Head title={post.title} />
                  { children }
                </article>
              </div>
            </div>
          </main>
        </div>
      </div>
    </DocsContext.Provider>
  )
}

function DocsMobileMenu({
  post,
  navigation,
  onClickClose = () => {},
}) {
  return (
    <div className="md:hidden">
      <div className="fixed inset-0 flex z-40">
        <div className="fixed inset-0">
          <div className="absolute inset-0 bg-gray-600 opacity-75"></div>
        </div>

        <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white">
          <div className="absolute top-0 right-0 -mr-14 p-1">
            <button onClick={onClickClose} className="flex items-center justify-center h-12 w-12 rounded-full focus:outline-none focus:bg-gray-600" aria-label="Close sidebar">
              <svg className="h-6 w-6 text-white" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex-1 h-0 pt-5 overflow-y-auto">
            <DocsLogo />
            <nav className="mt-5 px-2 mb-4">
              {
                navigation.map((item, i) => (
                  <div key={`menu-item-${i}`}>
                  {
                    item.isSection ? (
                      <DocsNavItem title={item.title} href={item.slug} section />
                    ) : (
                      <DocsNavItem title={item.title} href={item.slug} active={post.slug === item.slug} />
                    )
                  }
                  </div>
                ))
              }
            </nav>
          </div>
        </div>
        <div className="flex-shrink-0 w-14">
          {/* Force sidebar to shrink to fit close icon */}
        </div>
      </div>
    </div>
  )
}

function DocsNavItem ({ href, title, section = false, active = false }) {
  const commonClassNames = 'flex px-2 transition ease-in-out duration-150 focus:outline-none'
  const sectionClassNames = `mt-8 mb-2 text-primary-800 text-xs font-medium uppercase hover:text-primary-800 ${commonClassNames}`
  const activeItemClassNames = 'font-medium text-primary-600'
  const nonActiveItemClassNames = 'font-thin hover:text-primary-800 hover:font-normal'
  const itemClassNames = `mb-3 text-sm ${commonClassNames} ${active ? activeItemClassNames : nonActiveItemClassNames}`
  const LinkWrapper = ({ children }) => (
    <Link href={href}>{children}</Link>
  )
  const Anchor = () => (
    <a href={section ? undefined : href} className={section ? sectionClassNames : itemClassNames}>
      {title}
    </a>
  )

  if (section) return <Anchor />

  return <LinkWrapper><Anchor /></LinkWrapper>
}

function DocsLogo() {
  return (
    <Link href="/">
      <a className="flex">
        <AsyncAPILogo className="h-8 w-auto ml-3" />
        <div className="self-end mb-0.5 ml-0.5 font-bold italic text-pink-500 text-lg">docs</div>
      </a>
    </Link>
  )
}
