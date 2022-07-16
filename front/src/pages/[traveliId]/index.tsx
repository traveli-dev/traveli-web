import { Flex, Image, Text, Spacer, Box } from '@chakra-ui/react'
import { useGetTravelink } from '@/hooks/firestore'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {
  IconQr,
  IconSave,
  IconShare,
  IconViewGrid,
  IconViewList
} from '@/components/Icons'
import { ButtonIconRound, ButtonViewChange } from '@/components/Buttons'
import { CardLink } from '@/components/Cards'

const LinkList = () => {
  const router = useRouter()
  const { travelink } = useGetTravelink()
  console.log(travelink)

  return (
    <>
      {!travelink ? (
        <>ローディングアイコン</>
      ) : (
        <>
          <Box
            position={'absolute'}
            bgRepeat={'no-repeat'}
            bgSize={'cover'}
            top={'0'}
            left={'0'}
            w={'100vw'}
            bgImage={travelink.thumbnail}
            // w={'auto'}
            h={'24rem'}
          />
          <Box
            position={'absolute'}
            top={'18rem'}
            left={'0'}
            w={'100vw'}
            h={'30%'}
            bgColor={'white'}
            borderRadius={'3.0rem 3.0rem 0 0'}
          />
          <Flex w={'100%'} h={'6.3rem'} justify={'center'} align={'center'}>
            <Link href={router.basePath + '/home'}>
              <ButtonIconRound iconType="return" />
            </Link>
            <Spacer />
            <ButtonIconRound iconType="edit" />
          </Flex>
          <Box>
            <Image
              borderRadius="full"
              boxSize={'12rem'}
              src={travelink.thumbnail}
              alt={'img'}
              margin={'6rem auto 0 auto'}
              border={'solid white 0.4rem'}
            />
            {/* <ButtonViewChange /> */}
            <Text
              fontSize={'2rem'}
              fontWeight={'bold'}
              textAlign={'center'}
              marginTop={'1rem'}
            >
              {travelink.title}
            </Text>
            <Text fontSize={'1.2rem'} color={'gray'} textAlign={'center'}>
              {travelink.date}
            </Text>
            <Flex w={'70%'} margin={'0.9rem auto'}>
              <Box>
                <IconSave w={'2.5rem'} h={'2.5rem'} margin={'0 auto'} />
                <Text>保存</Text>
              </Box>
              <Spacer />
              <Box>
                <IconQr w={'2.5rem'} h={'2.5rem'} margin={'0 auto'} />
                <Text>QRコード</Text>
              </Box>
              <Spacer />
              <Box>
                <IconShare w={'2.5rem'} h={'2.5rem'} margin={'0 auto'} />
                <Text>共有</Text>
              </Box>
            </Flex>
            <Box>
              {travelink.links.map(({ url, label }, index) => (
                <CardLink label={label} url={url} key ={index}/>
              ))}
            </Box>
          </Box>
        </>
      )}
    </>
  )
}

export default LinkList
