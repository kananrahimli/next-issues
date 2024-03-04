
import React, { Suspense, useEffect } from "react";
import { Box, Button, Grid, Skeleton } from "@radix-ui/themes";
import IssueItem from "../../components/issue/IssueItem";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../store/store";
import { CardsSkeleton } from "../../components/skeleton/CardSkeleton";
import { Issue } from '../../store/slices/issueSlice';
import { getAllIssues } from '../../actions/data';


const IssueList =  async () => {
  const issues= await getAllIssues('/issues/all')
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
        columns={{ xs:"1", sm:'2', md: "3", lg: "4", xl: "6" }}
        gapY="5"
        gapX="3"
        width="auto"
      >
        {issues?.data.map((issue:Issue,key:any) => {
          return (
            <Box key={issue.id}>
              <Link href="#">
                <IssueItem issue={issue}></IssueItem>
              </Link>
            </Box>
          );
        })}
      </Grid>
    </div>
  );
};

export default IssueList;
