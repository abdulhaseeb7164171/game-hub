import { HStack, Skeleton, SkeletonText } from "@chakra-ui/react";

const GenreItemSkeleton = () => {
  return (
    <HStack paddingY="5px">
      <Skeleton boxSize="32px" borderRadius={8} />
      <SkeletonText noOfLines={1} width="100px" skeletonHeight="15px" />
    </HStack>
  );
};

export default GenreItemSkeleton;
