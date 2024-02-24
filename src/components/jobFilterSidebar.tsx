import React from 'react'
import { Label } from './ui/label'
import { Input } from './ui/input';


async function filterJobs(formData: FormData) {
    "use server";
}

const JobFilterSidebar = () => {
  return (
    <aside className='md:w-[260px] p-4 sticky top-0 h-fit bg-background border rounded-lg'>
        <form action={filterJobs}>
            <div className='space-y-4 '>
                <div className=' flex flex-col gap-2'>
                <Label htmlFor='q'>Search</Label>
                <Input id='q' name='q' placeholder='Title, company etc'/>
                </div>
            </div>
        </form>
    </aside>
  )
}

export default JobFilterSidebar