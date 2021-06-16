import React, { useState, useEffect } from "react"
import Cookies from "js-cookie"
import { Button, Stack, Flex, Text, Center, useDisclosure, Progress, Box } from "@chakra-ui/react"
import { ScrollProgress } from "../../utils/ScrollProgress"
import OptModal from "./optModal"
import config from "../../../config/website"

const cookieName = `gatsby-gdpr-google-analytics`

export type CookieBannerProps = {
  debug?: boolean
}

interface ScrollProps {
  pos: number
  scrollPerc?: number
}

function CookieBannerApp({ debug = false }: CookieBannerProps) {
  const [isVisible, setVisible] = useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { pos, scrollPerc }: ScrollProps = ScrollProgress()

  function disableTrack() {
    Cookies.set(cookieName, false)
    window[`ga-disable-${config.googleAnalyticsID}}`] = true
    onClose()
    setVisible(false)
  }

  function gaEnable() {
    Cookies.set(cookieName, true)
    onClose()
    setVisible(false)
  }

  useEffect(() => {
    // Check if there is a cookie in local storage or debug phase
    if (Cookies.get(cookieName) === undefined || debug) {
      setVisible(true)
    }
    // After 70% of scroll && GDPR is false it will automatically accept the cookies
    if (
      scrollPerc !== undefined && // TS: check if var comes undefined
      scrollPerc > 70 &&
      Cookies.get(cookieName) === undefined &&
      !Cookies.get(cookieName)
    ) {
      setVisible(false)
      Cookies.set(cookieName, true)
    }
  }, [isVisible, debug, pos, scrollPerc])

  if (!isVisible) {
    return null
  }

  return (
    <Center>
      <Box w="90%" pos="fixed" bottom={6} zIndex="sticky">
        <Progress value={scrollPerc} size="xs" mb="-1" rounded="md" />
        <Box px={4} py={8} bgGradient="linear(to-tr, primary.800, primary.900)" boxShadow="xl" rounded="md">
          <Flex flexDir={[`column`, null, `row`]} alignItems="center" justifyContent="space-between">
            <Text color="white" fontSize="lg" fontWeight="semibold" w={[`100%`, null, `77%`]} pb={[4, null, null, 0]}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quibusdam repellat rem at maxime
              repudiandae cumque nam officia cum labore fugiat impedit consectetur soluta quo quia, nostrum praesentium
              amet itaque.
            </Text>
            <Stack spacing={4} direction="row">
              <Button variant="secondary" color="#000" size="lg" onClick={gaEnable}>
                Accept
              </Button>
              <Button colorScheme="primary" color="white" variant="link" onClick={onOpen}>
                Change settings
              </Button>
            </Stack>
          </Flex>
        </Box>
      </Box>

      <OptModal Title="Cookies Settings" isOpen={isOpen} onClose={onClose} gaEnable={gaEnable} gaDisable={disableTrack}>
        <Text color="black.light" fontSize="lg" fontWeight="semibold" pb={4}>
          Feel free to cancel and delete the cookies.
        </Text>
      </OptModal>
    </Center>
  )
}

export const CookieBanner: React.FC<CookieBannerProps> = ({ debug }) =>
  !Cookies.get(cookieName) || debug ? <CookieBannerApp debug /> : null
