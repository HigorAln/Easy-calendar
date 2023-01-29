import { Heading, Text } from '@ignite-ui/react'
import * as S from './styles'

import previewImage from '../../assets/app-preview.png'
import Image from 'next/image'
import { ClaimUsernameForm } from './components/ClaimUsernameForm'

export default function Home() {
  return (
    <S.Container>
      <S.Hero>
        <Heading as="h1" size="4xl">
          Agendamento descomplicado
        </Heading>
        <Text size="xl">
          Conecte seu calendário e permita que as pessoas marquem agendamentos
          no seu tempo livre.
        </Text>

        <ClaimUsernameForm />
      </S.Hero>

      <S.Preview>
        <Image
          src={previewImage}
          height={400}
          quality={100}
          alt="Calendário simbolizando aplicação em funcionamento!"
          priority
        />
      </S.Preview>
    </S.Container>
  )
}
