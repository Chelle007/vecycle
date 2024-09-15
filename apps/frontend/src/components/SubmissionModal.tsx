import {
    Modal,
    ModalContent,
    ModalOverlay,
    VStack,
    Text,
    HStack,
    Image,
} from "@chakra-ui/react";
import { useDisclosure, useSubmission } from "../hooks";
import loaderAnimation from "../assets/lottie/loader-json.json";
import Lottie from "react-lottie";
import { AirdropIcon, AlertIcon } from "./Icon";
import { useMemo } from "react";

export const SubmissionModal = () => {
    const { isLoading, response } = useSubmission();
    const { isOpen, onClose } = useDisclosure();

    const renderContent = useMemo(() => {
        let before = 0;
        let after = 0;
        let description = "";

        try {
            if (response?.choices[0]?.message?.content) {
                const content = response.choices[0].message.content.replace(/```json|```/g, '');
                const parsedContent = JSON.parse(content);
                before = parsedContent.validityFactorBefore;
                after = parsedContent.validityFactorAfter;
                description = parsedContent.descriptionOfAnalysis;
            }
        } catch (error) {
            console.error("Error parsing response content:", error);
        }

        const isValid = typeof before === 'number' && typeof after === 'number';

        return isValid ? (
            <VStack
                bgGradient={
                    "radial-gradient(76.36% 85.35% at 50.12% 27.48%, rgba(230, 252, 207, 0.82) 38.14%, rgba(194, 212, 254, 0.82) 100%), #7DF000"
                }
                minH={"40vh"}
                minW={"40vh"}
                borderRadius={16}
                justifyContent={"center"}
                alignItems={"center"}
            >
                <AirdropIcon size={200} color="#373EDF" />
                <Text fontSize={32} fontWeight={600}>
                    Congratulations!
                </Text>
                <HStack>
                    <Text fontSize={24} fontWeight={400}>
                        You've earned 1
                    </Text>
                    <Image src="b3tr-token.svg" />
                </HStack>
            </VStack>
        ) : (
            <VStack
                bgGradient={
                    "radial-gradient(76.36% 85.35% at 50.12% 27.48%, rgba(230, 252, 207, 0.82) 38.14%, rgba(194, 212, 254, 0.82) 100%), #7DF000"
                }
                minH={"40vh"}
                minW={"40vh"}
                borderRadius={16}
                justifyContent={"center"}
                alignItems={"center"}
            >
                <AlertIcon size={200} color="#D23F63" />
                <Text fontSize={32} fontWeight={600}>
                    Oops! AI says
                </Text>
                <HStack px={4}>
                    <Text fontSize={14} fontWeight={400} textAlign={"center"}>
                        {description}
                    </Text>
                </HStack>
            </VStack>
        );
    }, [response]);

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            trapFocus={true}
            isCentered={true}
            closeOnOverlayClick={!isLoading}
        >
            <ModalOverlay />
            <ModalContent minH={"40vh"} minW={"40vh"} borderRadius={16}>
                {isLoading ? (
                    <Lottie
                        options={{
                            loop: true,
                            autoplay: true,
                            animationData: loaderAnimation,
                        }}
                    />
                ) : (
                    renderContent
                )}
            </ModalContent>
        </Modal>
    );
};
