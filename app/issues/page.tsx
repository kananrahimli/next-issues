import React, { Suspense, useEffect, useState } from "react";
import { Button } from "@radix-ui/themes";

// Import a dynamic version of IssueList using React.lazy
const IssueList = React.lazy(() => import("../components/issue/IssueList"));
import { CardsSkeleton } from "../components/skeleton/CardSkeleton";
const Page = () => {
  return (
    <div className="p-4 space-y-5">
       <Button className="flex">New Issue</Button>
      {/* Use Suspense to handle lazy loading */}
      <Suspense fallback={<CardsSkeleton />}>
        <IssueList />
        {/* <CardsSkeleton /> */}
      </Suspense>
     
    </div>
  );
};

export default Page;
