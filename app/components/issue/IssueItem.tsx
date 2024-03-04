import { Avatar, Box, Card, Flex, Text } from "@radix-ui/themes";
import React from "react";
import { Issue } from '../../store/slices/issueSlice';

const IssueItem = ({ issue }: { issue: Issue }) => {
  return (
    <Card style={{padding:"20px"}} >
      <Flex gap="3" align="center">
        <Box>
          <Text as="div" size="3" weight="bold">
            {issue.title}
          </Text>
          <Text as="div" size="2" color="gray">
            {issue.description}
          </Text>
        </Box>
      </Flex>
    </Card>
  );
};

export default IssueItem;
