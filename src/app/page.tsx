import JobFilterSidebar from "@/components/jobFilterSidebar";
import JobResults from "@/components/jobResults";
import H1 from "@/components/ui/h1";
import { jobFilterValues } from "@/lib/validation";

interface PageProps {
  searchParams: {
    q?: string,
    type?: string,
    location?: string,
    remote?: string
  }
}

export default async function Home({searchParams: {q, type, location, remote}}: PageProps) {

  const filterValues: jobFilterValues = {
    q,
    type,
    location,
    remote: remote === 'true'
  }
  return (
    <main className="m-auto my-10 max-w-5xl space-y-10 px-3">
      <div className="space-y-5 text-center">
        <H1>Developer Jobs</H1>
        <p className="text-muted-foreground">Find your dream job.</p>
      </div>
      <section className=" flex flex-col gap-4 md:flex-row">
        <JobFilterSidebar defaultValues={filterValues}/>
        <JobResults filterValues={filterValues}/>
      </section>
    </main>
  );
}
