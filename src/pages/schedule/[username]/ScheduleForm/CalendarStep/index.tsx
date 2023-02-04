import { Calendar } from '@/components/Calendar'
import * as S from './styles'
import React from 'react'
import dayjs from 'dayjs'
import { api } from '@/lib/axios'
import { useRouter } from 'next/router'
import { useQuery } from '@tanstack/react-query'
import { X } from 'phosphor-react'

interface Availability {
  possibleTimes: number[]
  availableTimes: number[]
}

interface CalendarStepProps {
  onSelectDateTime: (date: Date) => void
  onCloseList: () => void
}

export function CalendarStep({
  onSelectDateTime,
  onCloseList,
}: CalendarStepProps) {
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(null)
  const router = useRouter()

  const isDateSelected = React.useMemo(() => {
    return !!selectedDate
  }, [selectedDate])
  const username = String(router.query.username)

  const weekDay = selectedDate ? dayjs(selectedDate).format('dddd') : null
  const describedDate = selectedDate
    ? dayjs(selectedDate).format('DD[ de ]MMMM')
    : null

  const selectedDateWithoutTime = selectedDate
    ? dayjs(selectedDate).format('YYYY-MM-DD')
    : null

  const { data: availability } = useQuery<Availability>(
    ['availability', selectedDateWithoutTime],
    async () => {
      const response = await api.get(`/users/${username}/availability`, {
        params: {
          date: selectedDateWithoutTime,
        },
      })

      return response.data
    },
    {
      enabled: !!selectedDate,
    },
  )

  function handleSelectTime(hour: number) {
    const dateWithTime = dayjs(selectedDate)
      .set('hour', hour)
      .startOf('hour')
      .toDate()

    onSelectDateTime(dateWithTime)
  }

  function handleCloseListHours() {
    onCloseList()
    setSelectedDate(null)
  }

  return (
    <S.Container isTimePickerOpen={isDateSelected}>
      <Calendar selectedDate={selectedDate} onDateSelected={setSelectedDate} />

      {isDateSelected && (
        <S.TimePicker>
          <S.TimePickerWrapperHeader>
            <S.TimePickerHeader>
              {weekDay} <span>{describedDate}</span>
            </S.TimePickerHeader>
            <S.ButtonCloseHeader onClick={handleCloseListHours}>
              <X />
            </S.ButtonCloseHeader>
          </S.TimePickerWrapperHeader>

          <S.TimePickerList>
            {availability?.possibleTimes.map((hour) => {
              return (
                <S.TimePickerItem
                  key={hour}
                  onClick={() => handleSelectTime(hour)}
                  disabled={!availability.availableTimes.includes(hour)}
                >
                  {String(hour).padStart(2, '0')}:00h
                </S.TimePickerItem>
              )
            })}
          </S.TimePickerList>
        </S.TimePicker>
      )}
    </S.Container>
  )
}
