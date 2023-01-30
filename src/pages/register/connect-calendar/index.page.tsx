import { Button, Heading, MultiStep, Text } from '@ignite-ui/react'
import { Container, Header } from '../styles'
import * as S from './styles'
import { ArrowRight } from 'phosphor-react'

export default function Register() {
  // async function handleRegister(data: registerFormData) {

  // }
  return (
    <Container>
      <Header>
        <Heading as="strong">Conecte sua agenda!</Heading>

        <Text>
          Conecte o seu calendário para verificar automaticamente as horas
          ocupadas e os novos eventos à medida em que são agendados.
        </Text>

        <MultiStep size={4} currentStep={2} />
      </Header>

      <S.ConnectBox>
        <S.ConnectItem>
          <Text>Google Calendar</Text>
          <Button variant={'secondary'} size="sm">
            Conectar
            <ArrowRight />
          </Button>
        </S.ConnectItem>
        <Button type="submit">Próximo passo</Button>
      </S.ConnectBox>
    </Container>
  )
}
