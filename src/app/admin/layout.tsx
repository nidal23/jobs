import React from 'react'
import {ClerkProvider} from '@clerk/nextjs'
import { Metadata } from 'next'
import AdminNavbar from './adminNavbar';


export const metadata: Metadata = {
    title: "Admin",
};


export default function Layout({children}: {children: React.ReactNode}) {
  return <ClerkProvider>
    <AdminNavbar />
    {children}
    </ClerkProvider>
}
