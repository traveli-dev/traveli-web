import Link from 'next/Link'

const Signin = () => {
  return (
    <>
      <p>signinページ</p>
      <Link href="/home" passHref>
        <a href="replace">
          <p>/home</p>
        </a>
      </Link>
    </>
  )
}

export default Signin
