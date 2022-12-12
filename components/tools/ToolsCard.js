import { useState, useEffect } from 'react'
import Heading from '../typography/Heading';
import Paragraph from '../typography/Paragraph';
import Tag from './Tags';
import TextTruncate from 'react-text-truncate';

export default function toolsCard({ toolData }) {
  const [showDescription, setShowDescription] = useState(false)
  const [onGithub, setonGithub] = useState(false)

  useEffect(() => {
    const url = new URL(toolData.links.repoUrl)
    if (url.host == 'github.com') setonGithub(true)
    else setonGithub(false)
  }, [])

  return (
    <div className="border shadow-md rounded-lg">
      <div className="pt-8 px-6">
        <div className="flex flex-col gap-2">
          <div className="flex gap-4 justify-between w-full">
            <Heading typeStyle="heading-sm-semibold">{toolData.title}</Heading>
            <div className='bg-green-100 border border-green-600 text-green-600 p-1 text-center text-xs w-fit h-fit rounded-md'>
              {toolData.filters.hasCommercial === false ? 'FREE' : 'PAID'}
            </div>
          </div>
          <div className='relative'>
            <Paragraph typeStyle="body-sm">
              <TextTruncate
                element="span"
                line={2}
                text={toolData.description}
              /> {' '}
              <div className="text-secondary-500 cursor-pointer inline-block underline hover:text-gray-800 font-regular text-sm transition ease-in-out duration-300" onClick={() => setShowDescription(true)}>
                Show More
              </div>
            </Paragraph>
            {showDescription && <div className="absolute top-0 p-2 z-10 bg-white w-full border border-gray-200 shadow-md">
              <div className='flex gap-2 cursor-pointer text-gray-500 hover:bg-gray-200 p-1 rounded hover:text-dark w-fit' onClick={() => setShowDescription(false)}>
                <img src='/img/illustrations/icons/close-icon.svg' width='10' />
                <div className='text-sm'>Close</div>
              </div>
              <Paragraph typeStyle="body-sm" className='mt-4'>
                {toolData.description}
              </Paragraph>
            </div>}
          </div>
        </div>
      </div>
      <hr className="my-6 mx-6" />
      {toolData.filters.language && <div className="flex flex-col gap-2 mx-6">
        <div className="text-gray-700 text-sm font-semibold">LANGUAGES</div>
        <div className="flex gap-2">
          <Tag
            name={toolData.filters.language.name}
            bgColor={toolData.filters.language.color}
            borderColor={toolData.filters.language.borderColor}
          />
        </div>
      </div>}
      {toolData.filters.technology.length && <><div className="flex flex-col gap-2 my-4 mx-6">
        <div className="text-gray-700 text-sm font-semibold">TECHNOLOGIES</div>
        <div className="flex gap-2 flex-wrap">
          {toolData.filters.technology.map((item, index) => (
            <Tag key={index}
              name={item.name}
              bgColor={item.color}
              borderColor={item.borderColor}
            />
          ))}
        </div>
      </div><hr className="" /></>}
      {(toolData.links.repoUrl || toolData.links.websiteUrl) &&
        <div className="flex">
          {onGithub ?
            <a className="w-full text-center py-6 hover:bg-gray-200 cursor-pointer" href={toolData.links.repoUrl} target='_blank' rel='noreferrer'>
              <div className="m-auto flex w-fit gap-2">
                <img src="/img/logos/github-black.svg" className="w-5" />
                <div className="text-gray-700 text-sm">View on Github</div>
              </div>
            </a> :
            <a className="w-full text-center py-6 hover:bg-gray-200 cursor-pointer" href={toolData.links.repoUrl} target='_blank' rel='noreferrer'>
              <div className="m-auto flex w-fit gap-2">
                <div className="text-gray-700 text-sm">View Source Code</div>
              </div>
            </a>
          }
          {toolData.links.websiteUrl && (
            <>
              <div className='border border-gray-200 h-auto'></div>
              <a className="w-full text-center py-6 hover:bg-gray-200 cursor-pointer" href={toolData.links.repoUrl} target='_blank' rel='noreferrer'>
                <div className="m-auto flex w-fit gap-2">
                  <img src="/img/illustrations/icons/share.svg" className="w-5" />
                  <div className="text-gray-700 text-sm">Visit Website</div>
                </div>
              </a>
            </>
          )}
        </div>
      }
    </div>
  );
}
