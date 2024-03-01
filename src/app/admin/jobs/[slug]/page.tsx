import React from 'react'
import prisma from '@/lib/prisma'
import { notFound } from 'next/navigation'
import JobDetailsPage from '@/components/jobDetailsPage'
import AdminSidebar from './adminSidebar'

interface PageProps {
    params: {slug: string}
}

const Page = async ({params: {slug}}: PageProps) => {
    const job = await prisma.job.findUnique({
        where: {slug}
    })

    if(!job) notFound();
  return (
    <main className=' m-auto my-10 max-w-5xl flex flex-col items-center gap-5 px-3 md:flex-row md:items-start'>
        <JobDetailsPage job={job}/>
        <AdminSidebar job={job}/>
    </main>
  )
}

export default Page