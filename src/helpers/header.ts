import { HeaderParser } from '../interfaces/'

export const handleHeader: HeaderParser = data => {
  return `<h${data.level}> ${data.text} </h${data.level}>`
}