
import React, { Suspense, useEffect } from "react";
import { Box, Button, Grid, Skeleton } from "@radix-ui/themes";
import IssueItem from "../../components/issue/IssueItem";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../store/store";
import { getAllIssues } from "../../store/slices/issueSlice";
import { CardsSkeleton } from "../../components/skeleton/CardSkeleton";
import { Issue } from "@prisma/client";


const IssueList =  () => {
//     const { issues } = useSelector((state: RootState) => state.issue);
//   const dispatch = useDispatch<AppDispatch>();
//   console.log(issues);
  

//   useEffect(() => {
//     dispatch(getAllIssues());
//   }, []);
  return (
    <div>
      <Grid
        className="flex-1"
        columns={{ initial: "2", md: "3", lg: "4", xl: "6" }}
        gapY="9"
        gapX="3"
        width="auto"
      >
        {/* {issues.map((issue,key) => {
          return (
            <Box height="9" key={issue.id}>
              <Link href="#">
                <IssueItem issue={issue}></IssueItem>
              </Link>
            </Box>
          );
        })} */}
      </Grid>
    </div>
  );
};

export default IssueList;
