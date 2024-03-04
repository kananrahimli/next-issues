import React, { Suspense, useEffect, useState } from "react";
import { Button } from "@radix-ui/themes";

// Import a dynamic version of IssueList using React.lazy
const IssueList = React.lazy(() => import("../components/issue/IssueList"));
import { CardsSkeleton } from "../components/skeleton/CardSkeleton";
const Page = () => {
  return (
    <div className="p-4 flex gap-x-10">
      {/* Use Suspense to handle lazy loading */}
      <Suspense fallback={<CardsSkeleton />}>
        <IssueList />
      </Suspense>
      <Button className="flex">New Issue</Button>
    </div>
  );
};

export default Page;
