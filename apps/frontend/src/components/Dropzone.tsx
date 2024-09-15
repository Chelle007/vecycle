import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import { ScanIcon } from "./Icon";
import { blobToBase64, getDeviceId, resizeImage } from "../util";
import { useWallet } from "@vechain/dapp-kit-react";
import { submitReceipt } from "../networking";
import { useDisclosure, useSubmission } from "../hooks";

export const Dropzone = () => {
  const { account } = useWallet();

  const { setIsLoading, setResponse } = useSubmission();
  const { onOpen } = useDisclosure();

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (acceptedFiles: File[]) => {
      onFileUpload(acceptedFiles); // Pass the files to the callback
    },
    maxFiles: 2, // Allow only one file
    accept: {
      "image/*": [], // Accept only image files
    },
  });

  const onFileUpload = useCallback(
    async (files: File[]) => {
      if (files.length !== 2) {
        alert("Please upload only two file");
        return;
      }

      if (!account) {
        alert("Please connect your wallet");
        return;
      }

      setIsLoading(true);
      onOpen();

      // const file = files[0];

      // const resizedBlob = await resizeImage(file);
      // const base64Image = await blobToBase64(resizedBlob as Blob);

      // const deviceID = await getDeviceId();

      try {
        const [beforeFile, afterFile] = files;
      
        const [resizedBeforeBlob, resizedAfterBlob] = await Promise.all([
          resizeImage(beforeFile),
          resizeImage(afterFile),
        ]);
      
        const [base64BeforeImage, base64AfterImage] = await Promise.all([
          blobToBase64(resizedBeforeBlob as Blob),
          blobToBase64(resizedAfterBlob as Blob),
        ]);
      
        const deviceID = await getDeviceId();
      
        const response = await submitReceipt({
          address: account,
          deviceID,
          beforeImage: base64BeforeImage,
          afterImage: base64AfterImage,
        });      
      } catch (error) {
        alert("Error submitting receipt");
      } finally {
        setIsLoading(false);
      }
    },
    [account, onOpen, setIsLoading, setResponse],
  );

  return (
    <VStack w={"full"} mt={3}>
      <Text fontSize={40} color="black" fontWeight="bold" textAlign="center">Upload Before and After</Text>
      <Box
        {...getRootProps()}
        p={5}
        border="2px"
        borderColor={isDragActive ? "green.300" : "gray.300"}
        borderStyle="dashed"
        borderRadius="md"
        bg={isDragActive ? "green.100" : "gray.50"}
        textAlign="center"
        cursor="pointer"
        _hover={{
          borderColor: "green.500",
          bg: "green.50",
        }}
        w={"full"}
        h={"200px"}
        display="flex" // Make the Box a flex container
        alignItems="center" // Align items vertically in the center
        justifyContent="center" // Center content horizontally
      >
        <input {...getInputProps()} />
        <HStack>
          <ScanIcon size={120} color={"gray"} />
          <Text>Upload 2 images</Text>
        </HStack>
      </Box>
    </VStack>
  );
};

export default Dropzone;