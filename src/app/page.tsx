import JobFilterSidebar from "@/components/jobFilterSidebar";
import JobListItem from "@/components/jobListItem";
import H1 from "@/components/ui/h1";
import prisma from "@/lib/prisma"

export default async function Home() {

  const jobs = await prisma.job.findMany({
    where: {approved: true},
    orderBy: {createdAt: "desc"}
  })
  return (
    <main className="max-w-5xl m-auto px-3 my-10 space-y-10">
      <div className="space-y-5 text-center">
        <H1>
          Developer Jobs
        </H1>
        <p className="text-muted-foreground">Find your dream job.</p>
      </div>
      <section className=" flex flex-col md:flex-row gap-4">
        <JobFilterSidebar />
      <div className="space-y-4 grow">
      {jobs.map((job) => (
        <JobListItem key={job.id} job={job}/>
      ))}
      </div>
      </section>
      
    </main>
  );
}
