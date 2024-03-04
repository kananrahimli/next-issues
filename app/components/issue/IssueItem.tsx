import { Avatar, Box, Card, Flex, Text } from "@radix-ui/themes";
import React from "react";
import { Issue } from "../../store/slices/issueSlice";

const IssueItem = ({ issue }: { issue: Issue }) => {
  return (
    <Card style={{ padding: "20px" }}>
      <Flex gap="3" direction="column">
        <Box className="bg-dark">
          <Text
            as="div"
            size="3"
            weight="bold"
           
          >
            {issue.title}
          </Text>
        </Box>
        <Box className="bg-dark">
          <Text
            as="div"
            size="3"
            weight="bold"
          >
            {issue.description}
          </Text>
        </Box>
      </Flex>
    </Card>
  );
};

export default IssueItem;
