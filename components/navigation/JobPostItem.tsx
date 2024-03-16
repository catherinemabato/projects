import Link from 'next/link';

import type { JobPostItemProps } from '@/types/navigation/JobPostItem';

/**
 * @description Component representing an item in the job post list.
 * @param {JobPostItemProps} props.job - The job post item to be displayed.
 */
export default function JobPostItem({ job }: JobPostItemProps) {
  return (
    <li>
      <Link href={job.slug} passHref>
        <a className='block hover:bg-gray-50'>
          <div className='p-4 sm:px-6'>
            <div className='flex items-center justify-between'>
              <div className='flex items-center'>
                <img src={job.company.logoUrl} alt={job.company.name} className='mr-2 h-6' />
                <p className='truncate text-sm font-medium text-indigo-600'>
                  {job.title} at {job.company.name}
                </p>
              </div>
              <div className='ml-2 flex shrink-0'>
                <p className='inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800'>
                  {!job.employmentType || job.employmentType === 'full-time'
                    ? 'Full-time'
                    : job.employmentType}
                </p>
              </div>
            </div>
            <div className='mt-2 sm:flex sm:justify-between'>
              <div className='sm:flex'>
                <p className='flex items-center text-sm text-gray-500'>
                  <svg
                    className='mr-1.5 size-5 shrink-0 text-gray-400'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    aria-hidden='true'
                  >
                    <path d='M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z' />
                  </svg>
                  <span className='capitalize'>{job.category}</span>
                </p>
                <p className='mt-2 flex items-center text-sm text-gray-500 sm:ml-6 sm:mt-0'>
                  <svg
                    className='mr-1.5 size-5 shrink-0 text-gray-400'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      fillRule='evenodd'
                      d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z'
                      clipRule='evenodd'
                    />
                  </svg>
                  {!job.location || (job.location === 'remote' && 'Remote')}&nbsp;
                  {!job.region || job.region === 'any'
                    ? 'Anywhere (on planet Earth)'
                    : job.region}
                </p>
              </div>
              <div className='mt-2 flex items-center text-sm text-gray-500 sm:mt-0'>
                <svg
                  className='mr-1.5 size-5 shrink-0 text-gray-400'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  aria-hidden='true'
                >
                  <path
                    fillRule='evenodd'
                    d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z'
                    clipRule='evenodd'
                  />
                </svg>
                <p>
                  Closing on&nbsp;
                  <time dateTime={job.closingOn}>
                    {new Date(job.closingOn).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                </p>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </li>
  );
};
