import React from "react"
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react"

export default function OptModal({ children, Title, isOpen, onClose, gaDisable, gaEnable }) {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{Title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{children}</ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={gaEnable}>
              Accept & Close
            </Button>
            <Button colorScheme="red" variant="ghost" onClick={gaDisable}>
              Delete cookies
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
