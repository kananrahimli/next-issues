import { Box, Card, Flex, Grid, Text } from "@radix-ui/themes";
import Link from "next/link";

const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";
export function CardSkeleton() {
  return (
   

    <Card style={{ padding: "20px" }}>
      <Flex gap="3"  direction='column' className={`${shimmer}`}>
        <Box className="bg-dark">
          <Text
            as="div"
            size="3"
            weight="bold"
            className="h-6 w-[75%] rounded-md bg-gray-200 text-sm font-medium"
          ><span  className="invisible">jsjsjsjs</span></Text>
        
        </Box>
        <Box className="bg-dark">
          <Text
            as="div"
            size="3"
            weight="bold"
            className="h-6 rounded-md bg-gray-200 text-sm font-medium "
          ><span className="invisible">jsjsjsjs</span></Text>
        
        </Box>
      </Flex>
    </Card>
  );
}

export function CardsSkeleton() {
  return (
    <div>
      <Grid
        className="flex-1"
        columns={{ xs: "1", sm: "2", md: "3", lg: "4", xl: "6" }}
        gapY="5"
        gapX="3"
        width="auto"
      >
        <Box >
          <Link href="#">
            <CardSkeleton></CardSkeleton>
          </Link>
        </Box>
        <Box >
          <Link href="#">
            <CardSkeleton></CardSkeleton>
          </Link>
        </Box>{" "}
        <Box >
          <Link href="#">
            <CardSkeleton></CardSkeleton>
          </Link>
        </Box>{" "}
        <Box >
          <Link href="#">
            <CardSkeleton></CardSkeleton>
          </Link>
        </Box>{" "}
        <Box >
          <Link href="#">
            <CardSkeleton></CardSkeleton>
          </Link>
        </Box>
      </Grid>
    </div>
  );
}
