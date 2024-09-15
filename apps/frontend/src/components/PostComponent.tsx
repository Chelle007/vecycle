import { DAppKitProvider } from "@vechain/dapp-kit-react";
import { ChakraProvider, Container, Flex } from "@chakra-ui/react";

// components/index.js
import { default as Dropzone } from './Dropzone';
import { default as SubmissionModal } from './SubmissionModal';
import { default as UserInstructions } from './UserInstructions';
import NavbarComponent from "./NavbarComponent";


function PostComponent() {
  return (
    <ChakraProvider >
      <DAppKitProvider
        usePersistence
        requireCertificate={false}
        genesis="test"
        nodeUrl="https://testnet.vechain.org/"
        logLevel={"DEBUG"}
      >
        {/* <Navbar /> */}
        <Flex flex={1}>
          <Container
            mt={{ base: 4, md: 10 }}
            maxW="container.xl"
            mb={{ base: 4, md: 10 }}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            {/* <InfoCard /> */}
            {/* <Instructions /> */}
            <Dropzone />
            <UserInstructions />
            <NavbarComponent currentPath="/post" />
          </Container>
        </Flex>
        {/* <Footer /> */}

        {/* MODALS  */}
        <SubmissionModal />

      </DAppKitProvider>
    </ChakraProvider>
  );
}

export default PostComponent;