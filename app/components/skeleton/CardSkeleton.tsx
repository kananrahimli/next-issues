import { Box, Card, Flex, Grid, Text } from "@radix-ui/themes";

const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";
export function CardSkeleton() {
  return (
    <div
      className={`${shimmer} relative overflow-hidden rounded-xl bg-gray-100 p-2 shadow-sm`}
    >
      <div className="flex p-4">
        <div className="h-5 w-5 rounded-md bg-gray-200" />
        <div className="ml-2 h-6 w-16 rounded-md bg-gray-200 text-sm font-medium" />
      </div>
      <div className="flex items-center justify-center truncate rounded-xl bg-white px-4 py-8">
        <div className="h-7 w-20 rounded-md bg-gray-200" />
      </div>
    </div>

    // <div
    //   style={{ padding: "20px" }}
    //   className={`${shimmer} relative overflow-hidden rounded-xl bg-gray-100 p-2 shadow-sm`}
    // >
    //   <Flex gap="3" align="center">
    //     <Box>
    //       <div className="ml-2 h-6 w-16 rounded-md bg-gray-200 text-sm font-medium" />
    //       <div className="h-7 w-20 rounded-md bg-gray-200" />
    //     </Box>
    //   </Flex>
    // </div>
  );
}

export function CardsSkeleton() {
  return (
    <div className="p-4 flex gap-x-10">
      <Grid
        className="flex-1"
        columns={{ initial: "2", md: "3", lg: "4", xl: "6" }}
        gapY="9"
        gapX="3"
        width="auto"
      >
        <Box height="9">
        <CardSkeleton/>
        <CardSkeleton/>
        <CardSkeleton/>
        <CardSkeleton/>
        <CardSkeleton/>
        </Box>
      </Grid>
    </div>
  );
}
