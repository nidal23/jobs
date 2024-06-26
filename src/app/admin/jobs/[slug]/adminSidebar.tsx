"use client";

import FormSubmitButton from "@/components/formSubmitButton";
import { Job } from "@prisma/client";
import React from "react";
import { useFormState } from "react-dom";
import { approveSubmission, deleteJob } from "./actions";

interface AdminSidebarProps {
  job: Job;
}

const AdminSidebar = ({ job }: AdminSidebarProps) => {
  return (
    <aside className=" flex w-[200px] flex-none flex-row items-center gap-2 md:flex-col md:items-stretch">
      {job.approved ? (
        <span className=" text-center font-semibold text-green-400">
          Approved
        </span>
      ) : (
        <ApproveSubmissionButton jobId={job.id} />
      )}
      <DeleteSubmission jobId={job.id} />
    </aside>
  );
};

export default AdminSidebar;

interface AdminButtonProps {
  jobId: number;
}

function ApproveSubmissionButton({ jobId }: AdminButtonProps) {
  const [formState, formAction] = useFormState(approveSubmission, undefined);

  return (
    <form action={formAction} className="space-y-1">
      <input hidden name="jobId" value={jobId} />
      <FormSubmitButton className="w-full bg-green-400 hover:bg-green-500">
        Approve
      </FormSubmitButton>
      {formState?.error && (
        <p className=" text-sm text-red-500">{formState.error}</p>
      )}
    </form>
  );
}

function DeleteSubmission({ jobId }: AdminButtonProps) {
  const [formState, formAction] = useFormState(deleteJob, undefined);

  return (
    <form action={formAction}>
      <input hidden name="jobId" value={jobId} />
      <FormSubmitButton className="w-full bg-red-400 hover:bg-red-500">
        Delete
      </FormSubmitButton>
      {formState?.error && (
        <p className=" text-sm text-red-500">{formState.error}</p>
      )}
    </form>
  );
}
