'use client'

import H1 from '@/components/ui/h1'
import React from 'react'

const ErrorPage = () => {
  return (
    <main className=' m-auto max-w-5xl my-10 px-3 text-center space-y-5'>
        <H1>Error</H1>
        <p>An Unexpected Error Occured.</p>
    </main>
  )
}

export default ErrorPage