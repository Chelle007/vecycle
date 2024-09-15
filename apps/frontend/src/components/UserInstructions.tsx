// import { Box, Container, HStack, VStack, Text, UnorderedList, ListItem } from "@chakra-ui/react";

// export const UserInstructions = () => {
//     return (
//         <Box
//             px={0}
//             position="sticky"
//             top={0}
//             zIndex={10}
//             py={4}
//             h="auto"
//             w="full"
//             bg="#f7f7f7"
//         >
//             <Container
//                 w="full"
//                 display="flex"
//                 flexDirection="row"
//                 justifyContent="space-between"
//                 alignItems="center"
//                 maxW="container.xl"
//             >
//                 {/* <HStack flex={1} justifyContent="start">
//                     <Text fontWeight="bold" fontSize="xl">Image Upload Instructions</Text>
//                 </HStack> */}

//                 <HStack flex={1} spacing={4} justifyContent="end">
//                     <VStack align="start" spacing={2}>
//                         <Text fontWeight="semibold">You are required to upload exactly two images:</Text>
//                         <UnorderedList spacing={1} pl={4}>
//                             <ListItem><Text as="span" fontWeight="bold">Before Recycle:</Text> Image showing the item before recycling</ListItem>
//                             <ListItem><Text as="span" fontWeight="bold">After Recycle:</Text> Image showing the item after recycling</ListItem>
//                         </UnorderedList>
//                         <Text fontSize="sm">Make sure each image is clearly labeled. Both images are mandatory for submission.</Text>
//                     </VStack>
//                 </HStack>
//             </Container>
//         </Box>
//     );
// };

// export default UserInstructions;