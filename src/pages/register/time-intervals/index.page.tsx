import {
  Button,
  Checkbox,
  Heading,
  MultiStep,
  Text,
  TextInput,
} from '@ignite-ui/react'
import { Container, Header } from '../styles'
import * as S from './styles'
import { ArrowRight } from 'phosphor-react'
import { Controller, useFieldArray, useForm } from 'react-hook-form'
import { z } from 'zod'
import { getWeekDays } from '@/utils/get-week-days'
import { zodResolver } from '@hookform/resolvers/zod'
import { convertTimeStringToMinutes } from '@/utils/converte-time-string-to-minutes'
import { api } from '@/lib/axios'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'

const timeIntervalsFormSchema = z.object({
  intervals: z
    .array(
      z.object({
        weekDay: z.number().min(0).max(6),
        enabled: z.boolean(),
        startTime: z.string(),
        endTime: z.string(),
      }),
    )
    .length(7)
    .transform((intervals) => intervals.filter((interval) => interval.enabled))
    .refine((intervals) => intervals.length > 0, {
      message: 'Você precisa selecionar pelo menos 1 dia da semana!',
    })
    .transform((intervals) => {
      return intervals.map((interval) => ({
        weekDay: interval.weekDay,
        startTimeInMinutes: convertTimeStringToMinutes(interval.startTime),
        endTimeInMinutes: convertTimeStringToMinutes(interval.endTime),
      }))
    })
    .refine(
      (intervals) => {
        return intervals.every(
          (interval) =>
            interval.endTimeInMinutes - 60 >= interval.startTimeInMinutes,
        )
      },
      {
        message:
          'O horário de término deve ser pelo menos 1hr distante do inicio',
      },
    ),
})

type TimeIntervalFormInput = z.input<typeof timeIntervalsFormSchema>
type TimeIntervalFormOutput = z.output<typeof timeIntervalsFormSchema>

export default function TimeIntervals() {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { isSubmitting, errors },
  } = useForm<TimeIntervalFormInput, TimeIntervalFormOutput>({
    resolver: zodResolver(timeIntervalsFormSchema),
    defaultValues: {
      intervals: [
        { weekDay: 0, enabled: false, startTime: '08:00', endTime: '17:00' },
        { weekDay: 1, enabled: true, startTime: '08:00', endTime: '17:00' },
        { weekDay: 2, enabled: true, startTime: '08:00', endTime: '17:00' },
        { weekDay: 3, enabled: true, startTime: '08:00', endTime: '17:00' },
        { weekDay: 4, enabled: true, startTime: '08:00', endTime: '17:00' },
        { weekDay: 5, enabled: true, startTime: '08:00', endTime: '17:00' },
        { weekDay: 6, enabled: false, startTime: '08:00', endTime: '17:00' },
      ],
    },
  })

  const intervals = watch('intervals')

  const weekDays = getWeekDays()

  const { fields } = useFieldArray({
    name: 'intervals',
    control,
  })

  async function handleSetTimeIntervals(data: TimeIntervalFormOutput) {
    await api.post('/users/time-intervals', data)
    router.push('/register/update-profile')
  }

  return (
    <>
      <NextSeo title="Selecione sua disponibilidade | Easy Calendar" noindex />
      <Container>
        <Header>
          <Heading as="strong">Quase lá</Heading>
          <Text>
            Defina o intervalo de horários que você está disponível em cada dia
            da semana.
          </Text>

          <MultiStep size={4} currentStep={3} />
        </Header>

        <S.IntervalBox
          as="form"
          onSubmit={handleSubmit(handleSetTimeIntervals as any)}
        >
          <S.IntervalContainer>
            {fields.map((field, index) => {
              return (
                <S.IntervalItem key={field.id}>
                  <S.IntervalDay>
                    <Controller
                      name={`intervals.${index}.enabled`}
                      control={control}
                      render={({ field }) => {
                        return (
                          <Checkbox
                            onCheckedChange={(checked) =>
                              field.onChange(checked === true)
                            }
                            checked={field.value}
                          />
                        )
                      }}
                    />
                    <Text>{weekDays[field.weekDay]}</Text>
                  </S.IntervalDay>

                  <S.IntervalInputs>
                    <TextInput
                      size="sm"
                      type="time"
                      step={60}
                      disabled={intervals[index].enabled === false}
                      {...register(`intervals.${index}.startTime`)}
                    />
                    <TextInput
                      size="sm"
                      type="time"
                      step={60}
                      disabled={intervals[index].enabled === false}
                      {...register(`intervals.${index}.endTime`)}
                    />
                  </S.IntervalInputs>
                </S.IntervalItem>
              )
            })}
          </S.IntervalContainer>

          {errors.intervals?.message && (
            <S.FormError size="sm">{errors.intervals.message}</S.FormError>
          )}
          <Button type="submit" disabled={isSubmitting}>
            Próximo passo
            <ArrowRight />
          </Button>
        </S.IntervalBox>
      </Container>
    </>
  )
}
