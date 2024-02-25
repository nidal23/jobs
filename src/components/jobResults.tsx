import React from "react";
import JobListItem from "./jobListItem";
import prisma from "@/lib/prisma";
import { jobFilterValues } from "@/lib/validation";
import { Prisma } from "@prisma/client";

interface JobResultsProps {
  filterValues: jobFilterValues;
}

const JobResults = async ({
  filterValues: { q, type, location, remote },
}: JobResultsProps) => {
  const searchString = q
    ?.split(" ")
    .filter((word) => word.length > 0)
    .join(" & ");

  const searchFilter: Prisma.JobWhereInput = searchString ? 
  {
    OR: [
        {title: {search: searchString}},
        {companyName: {search: searchString}},
        {type: {search: searchString}},
        {locationType: {search: searchString}},
        {location: {search: searchString}}
    ],
  } 
  : {};

  const where: Prisma.JobWhereInput = {
    AND: [
        searchFilter,
        type ? {type} : {},
        location ? {location} : {},
        remote ? {locationType: "Remote"} : {},
        {approved: true}
    ]
  }

  const jobs = await prisma.job.findMany({
    where,
    orderBy: { createdAt: "desc" },
  });
  return (
    <div className="grow space-y-4">
      {jobs.map((job) => (
        <JobListItem key={job.id} job={job} />
      ))}
      {jobs.length === 0 && (
        <p className=" text-center m-auto">
            No jobs found ☹️. Try adjusting your search filter.
        </p>
      )}
    </div>
  );
};

export default JobResults;
