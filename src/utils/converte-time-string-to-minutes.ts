export function convertTimeStringToMinutes(timeString: string) {
  const [hour, minutes] = timeString.split(':').map(Number)

  return hour * 60 + minutes
}
