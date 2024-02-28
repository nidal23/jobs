"use client";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import H1 from "@/components/ui/h1";
import { createJobSchema, createJobValues } from "@/lib/validation";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import Select from "@/components/ui/select";
import { jobTypes, locationTypes } from "@/lib/job-types";
import LocationInput from "@/components/locationInput";
import { X } from "lucide-react";

const NewJobForm = () => {
  const form = useForm<createJobValues>({
    resolver: zodResolver(createJobSchema),
  });

  const {
    handleSubmit,
    watch,
    trigger,
    control,
    setValue,
    setFocus,
    formState: { isSubmitting },
  } = form;

  async function onSubmit(values: createJobValues) {
    alert(JSON.stringify(values, null, 2));
  }
  return (
    <main className=" scale-y-10 m-auto my-10 max-w-3xl">
      <div className="space-y-5 text-center">
        <H1>Find your perfect developer</H1>
        <p className="text-muted-foreground ">
          Get your job posting to thousands of developers on our platform.
        </p>
      </div>
      <div className="space-y-6 rounded-lg border p-4">
        <div>
          <h2 className="font-semibold">Job details</h2>
          <p className="text-muted-foreground">
            Provide your job description and details
          </p>
        </div>
        <Form {...form}>
          <form className="space-y-4" noValidate onSubmit={handleSubmit(onSubmit)}>
            <FormField 
                control={control}
                name="title"
                render={({field}) => (
                    <FormItem>
                        <FormLabel>Job Title</FormLabel>
                        <FormControl>
                            <Input placeholder="e.g. Frontend Developer" {...field}/>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
            control={control}
            name="type"
            render={({field}) => (
                <FormItem>
                    <FormLabel>
                        Job type
                    </FormLabel>
                    <FormControl>
                    <Select {...field} defaultValue="">
                        <option value="" hidden>Select an option</option>
                        {jobTypes.map(jobType => (
                            <option key={jobType} value={jobType}>{jobType}</option>
                        ))}
                    </Select>
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
            />
             <FormField 
                control={control}
                name="companyName"
                render={({field}) => (
                    <FormItem>
                        <FormLabel>Company</FormLabel>
                        <FormControl>
                            <Input {...field}/>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
             <FormField 
                control={control}
                name="companyLogo"
                render={({field: { value, ...fieldValues}}) => (
                    <FormItem>
                        <FormLabel>Company logo</FormLabel>
                        <FormControl>
                            <Input
                             {...fieldValues} 
                             type="file" 
                             accept="image/*" 
                             onChange={(e) => {
                                const file = e.target.files?.[0]
                                fieldValues.onChange(file)
                            }}/>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
            control={control}
            name="locationType"
            render={({field}) => (
                <FormItem>
                    <FormLabel>
                        Location
                    </FormLabel>
                    <FormControl>
                    <Select {...field} defaultValue="">
                        <option value="" hidden>Select an option</option>
                        {locationTypes.map(locationType => (
                            <option key={locationType} value={locationType}>{locationType}</option>
                        ))}
                    </Select>
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
            />
            <FormField 
                control={control}
                name="location"
                render={({field}) => (
                    <FormItem>
                        <FormLabel>Office location</FormLabel>
                        <FormControl>
                            <LocationInput onLocationSelected={field.onChange} ref={field.ref}/>
                        </FormControl>
                        {watch("location") && (
                            <div className="flex items-center gap-1"> 
                                <button type="button" onClick={() => {setValue("location","", {shouldValidate: true})}}><X size={20}/></button>
                                <span className="text-sm">{watch("location")}</span>
                            </div>
                        )}
                        <FormMessage />
                    </FormItem>
                )}
            />
          </form>
        </Form>
      </div>
    </main>
  );
};

export default NewJobForm;