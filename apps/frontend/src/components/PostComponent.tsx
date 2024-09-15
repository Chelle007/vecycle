import { DAppKitProvider } from "@vechain/dapp-kit-react";
import { ChakraProvider, Container, Flex } from "@chakra-ui/react";
export { default as Dropzone } from './Dropzone';
export { default as UserInstructions } from './UserInstructions';
export { default as NavbarComponent } from './NavbarComponent';
export { default as SubmissionModal } from './SubmissionModal';


function PostComponent() {
    return (
        <ChakraProvider>
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
                    </Container>
                </Flex>
                {/* <Footer /> */}

                {/* MODALS  */}
                <SubmissionModal />

                <NavbarComponent path="/post" />
            </DAppKitProvider>
        </ChakraProvider>
    );
}

export default PostComponent;
