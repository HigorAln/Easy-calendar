import React from 'react'
import { CalendarStep } from './CalendarStep'
import { ConfirmStep } from './ConfirmStep'

export function ScheduleForm() {
  const [selectedDateTime, setSelectedDateTime] = React.useState<Date | null>()

  function handleClearSelectedDateTime() {
    console.log('entrou')
    setSelectedDateTime(null)
  }

  if (selectedDateTime) {
    return (
      <ConfirmStep
        schedulingDate={selectedDateTime}
        onCancelConfirmation={handleClearSelectedDateTime}
      />
    )
  }

  return (
    <CalendarStep
      onSelectDateTime={setSelectedDateTime}
      onCloseList={handleClearSelectedDateTime}
    />
  )
}
