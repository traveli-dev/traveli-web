import { colors } from '@/theme/colors'
import { Box } from '@chakra-ui/react'

const IconReturn = () => {
  return (
    <Box w="3rem" color={colors.black}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </Box>
  )
}

export default IconReturn
