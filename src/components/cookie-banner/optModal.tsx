import React, { FC, PropsWithChildren } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from '@chakra-ui/react';

interface IOptModal {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  gaDisable: () => void;
  gaEnable: () => void;
}

const OptModal: FC<PropsWithChildren<IOptModal>> = ({
  children,
  title,
  isOpen,
  onClose,
  gaDisable,
  gaEnable,
}) => (
  <>
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader fontSize="md" fontWeight="bold">
          {title}
        </ModalHeader>
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
);

export default OptModal;
