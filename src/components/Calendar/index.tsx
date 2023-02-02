import { CaretLeft, CaretRight } from 'phosphor-react'
import * as S from './styles'
import { getWeekDays } from '@/utils/get-week-days'

export function Calendar() {
  const shortWeekDays = getWeekDays({ short: true })

  return (
    <S.CalendarContainer>
      <S.CalendarHeader>
        <S.CalendarTitle>
          Dezembro <span>2022</span>
        </S.CalendarTitle>

        <S.CalendarActions>
          <button>
            <CaretLeft />
          </button>
          <button>
            <CaretRight />
          </button>
        </S.CalendarActions>
      </S.CalendarHeader>

      <S.CalendarBody>
        <thead>
          <tr>
            {shortWeekDays.map((weekDay) => (
              <th key={(weekDay = '')}>{weekDay}.</th>
            ))}
          </tr>
        </thead>

        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <S.CalendarDay>1</S.CalendarDay>
            </td>
            <td>
              <S.CalendarDay>2</S.CalendarDay>
            </td>
            <td>
              <S.CalendarDay>3</S.CalendarDay>
            </td>
          </tr>
          <tr>
            <td>
              <S.CalendarDay>4</S.CalendarDay>
            </td>
            <td>
              <S.CalendarDay>5</S.CalendarDay>
            </td>
            <td>
              <S.CalendarDay>6</S.CalendarDay>
            </td>
            <td>
              <S.CalendarDay>7</S.CalendarDay>
            </td>
            <td>
              <S.CalendarDay>8</S.CalendarDay>
            </td>
            <td>
              <S.CalendarDay>9</S.CalendarDay>
            </td>
            <td>
              <S.CalendarDay>10</S.CalendarDay>
            </td>
          </tr>
        </tbody>
      </S.CalendarBody>
    </S.CalendarContainer>
  )
}
