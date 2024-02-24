import { useLayout } from "@/context/DashboardProvider";
import { Input } from "@chakra-ui/input";
import { Flex, Heading, Text } from "@chakra-ui/layout";
export const Purchase = () => {
  const { user } = useLayout();
  if (!user) return;
  return (
    <Flex w="full" p={{ base: 4, md: 8 }}>
      PURCHASE BTC
    </Flex>
  );
};

export default Purchase;
