import {
  Input,
  Box,
  FormControl,
  FormLabel,
  List,
  ListItem,
  Button,
  FormErrorMessage,
  Switch,
  Image,
  Flex,
  Spacer,
  VisuallyHiddenInput
} from '@chakra-ui/react'

import { useRef } from 'react'
import { useFormCreateUpdateLinks } from '@/hooks/form'
import { TravelinkRequestType, Profile } from '@/types/db'
import { InputDate } from '@/components/Inputs/InputDate'
import { IconCamera, IconPlus, IconReturn } from '@/components/Icons'
import { CardLink } from '@/components/Cards'

type FormCreateUpdateLinksProps = {
  formType: 'create' | 'update'
  travelinkData?: TravelinkRequestType
  ownerProfile?: Profile
  isOwner?: boolean
}

export const FormCreateUpdateLinks = ({
  formType,
  travelinkData,
  ownerProfile,
  isOwner
}: FormCreateUpdateLinksProps) => {
  const {
    register,
    handleSubmit,
    fields,
    append,
    remove,
    control,
    onSubmit,
    errors,
    disabled,
    image,
    handleChangeImage
  } = useFormCreateUpdateLinks(formType, travelinkData, ownerProfile)

  const inputRef = useRef<HTMLInputElement>(null)
  const onClickButton = () => {
    inputRef.current?.click()
  }

  return (
    <Box>
      <Flex w={'100%'} h={'6.3rem'} justify={'center'} align={'center'}>
        <IconReturn w={'2.2rem'} h={'2.2rem'} />
        <Spacer />
        <Box color={'black'} fontSize={'md'} fontWeight={'bold'}>
          新しいトラベリンクを作成
        </Box>
        <Spacer />
        <Box w={'2.2rem'} h={'2.2rem'} />
      </Flex>

      <FormControl isInvalid={errors.title ? true : false}>
        <FormLabel marginTop={'1.5rem'} fontSize={'sm'} color={'#2D2D2D'}>
          旅の名前
        </FormLabel>
        <Input
          variant={'filled'}
          h={'4.6rem'}
          marginTop={'0.8rem'}
          borderRightRadius={'10rem'}
          borderLeftRadius={'10rem'}
          bgColor={'white'}
          filter={'drop-shadow(0.4rem 0.4rem 1rem #E4EBEE)'}
          {...register('title')}
          placeholder={'例）ともだちとの一泊二日の旅行'}
        />
        <FormErrorMessage>
          {errors.title && errors.title.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={errors.date ? true : false}>
        <FormLabel marginTop={'1.6rem'} fontSize={'sm'} color={'#2D2D2D'}>
          日時（任意）
        </FormLabel>
        {/* <Input
          variant={'filled'}
          h={'4.6rem'}
          borderRightRadius={'10rem'}
          borderLeftRadius={'10rem'}
          bgColor={'white'}
          filter={'drop-shadow(0.4rem 0.4rem 1rem #E4EBEE);'}
          {...register('title')}
          placeholder={'2022/01/23 ~ 2022/01/25'}
          {...register('date')}
        />
        <FormErrorMessage>
          {errors.date && errors.date.message}
        </FormErrorMessage> */}

        {/* TODO:　どうにかする */}
        <InputDate control={control} name={'date'} />
      </FormControl>

      <FormControl>
        <FormLabel marginTop={'1.6rem'} fontSize={'sm'} color={'#2D2D2D'}>
          サムネイル画像（任意）
        </FormLabel>
        <VisuallyHiddenInput
          ref={inputRef}
          type={'file'}
          accept="image/*"
          onChange={handleChangeImage}
        />
        <Box
          marginTop={'0.8rem'}
          bgImage={image ? URL.createObjectURL(image) : ''}
          onClick={onClickButton}
          w={'100%'}
          h={'12.9rem'}
          borderRadius={'1rem'}
          bgColor={'#D2D6E1'}
          filter={'drop-shadow(0.4rem 0.4rem 1rem #E4EBEE)'}
        >
          <Flex h={'12.9rem'} align={'center'} justify={'center'}>
            <IconCamera zIndex={1} w={'4.8rem'} h={'4.8rem'} color={'white'} />
          </Flex>
        </Box>
      </FormControl>

      <Box margin={'1.6rem 0 0.8rem 0'}>リンク</Box>
      <CardLink
        label={'ぷるりく'}
        url={'https://github.com/traveli-dev/traveli-web/pull/96'}
      />
      <CardLink
        label={'ぷるりく'}
        url={'https://github.com/traveli-dev/traveli-web/pull/96'}
      />

      <FormControl>
        <Box
          marginTop={'0.4rem'}
          padding={'2.4rem 1.6rem 0 1.6rem'}
          w={'100%'}
          h={'20.1rem'}
          borderRadius={'1.5rem'}
          bgColor={'white'}
          filter={'drop-shadow(0.4rem 0.4rem 1rem #E4EBEE)'}
        >
          <List>

            {fields.map((item, index) => {
              return (
                <ListItem key={item.id}>
                  <FormControl isInvalid={!!errors.links}>
                  <FormLabel h={'1.6rem'} fontSize={'sm'} color={'#2D2D2D'}>
              URL
            </FormLabel>
                    <Input
                      marginTop={'0.3rem'}
                      marginBottom={'1.6rem'}
                      variant={'outline'}
                      borderColor={'#ACC1CA'}
                      w={'100%'}
                      h={'4.4rem'}
                      borderRightRadius={'10rem'}
                      borderLeftRadius={'10rem'}
                      isInvalid={errors.links?.[index] ? true : false}
                      {...register(`links.${index}.url`)}
                      defaultValue={item.url}
                      placeholder={'https://'}
                    />
                    <FormErrorMessage>
                      {errors.links?.[index] &&
                        errors.links?.[index].url?.message}
                    </FormErrorMessage>
                  </FormControl>

                  <FormLabel
              display={'flex'}
              h={'1.6rem'}
              fontSize={'sm'}
              color={'#2D2D2D'}
            >
              <Box>ラベル</Box>
              <Box color={'gray'}>（任意）</Box>
            </FormLabel>
                  <Input
                    marginTop={'0.3rem'}
                    variant={'outline'}
                    borderColor={'#ACC1CA'}
                    w={'100%'}
                    h={'4.4rem'}
                    borderRightRadius={'10rem'}
                    borderLeftRadius={'10rem'}
                    {...register(`links.${index}.label`)}
                    defaultValue={item.label}
                    placeholder={'例）宿泊先'}
                  />
                </ListItem>
              )
            })}
          </List>
        </Box>

        {/* Add List */}
        <Flex
          align={'center'}
          justify={'center'}
          marginTop={'1.6rem'}
          color={'brandBlue'}
        >
          <Box
          bgImage={'/images/plus.svg'}
          w={'2.4rem'}
          h={'2.4rem'}
          />
            <Box fontSize={'md'}>リストの追加</Box>
        </Flex>
        <button
          type="button"
          onClick={() => {
            append({ url: '', label: '' })
          }}
        >
          append
        </button>
        <button
          type="button"
          onClick={() => {
            remove(1)
          }}
        >
          remove
        </button>
        {(isOwner || formType === 'create') && (
          <FormControl
            display={'flex'}
            alignItems={'center'}
            paddingTop={'3rem'}
          >
            <Switch
              paddingRight={'2.2rem'}
              size={'lg'}
              colorScheme={'brandBlue-switch'}
              {...register('canEdit')}
              defaultChecked={travelinkData?.canEdit}
            />
            <FormLabel>他のユーザに編集を許可する</FormLabel>
          </FormControl>
        )}
      </FormControl>

        <Flex justify={'center'} margin={'3rem 0 3.5rem 0'}>
      <Button
        disabled={disabled}
        variant={'round'}
        onClick={handleSubmit(onSubmit)}
      >
        作成する
      </Button>
      </Flex>
    </Box>
  )
}
