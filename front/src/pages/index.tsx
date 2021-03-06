import Link from 'next/link'
import { useSignInAnonymously } from '@/hooks/auth'
import { Button } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'

const Index = () => {
  const { signInAnonymouslyHandler, disabled } = useSignInAnonymously()

  return (
    <>
      <Text fontWeight="bold">indexページ</Text>
      <Link href="/signin" passHref>
        <a href="replace">
          <p>/signin</p>
        </a>
      </Link>
      <Link href="/signup" passHref>
        <a href="replace">
          <p>/signup</p>
        </a>
      </Link>
      <Button
        bgColor={'brandBlue'}
        disabled={disabled}
        onClick={() => signInAnonymouslyHandler()}
      >
        登録せず利用
      </Button>
    </>
  )
}

export default Index
