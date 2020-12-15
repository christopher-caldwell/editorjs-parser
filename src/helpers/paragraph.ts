import { handleOptionalAttributes } from '../util/sharedLogic'
import { ParagraphParser } from '../interfaces/'

export const handleParagraph: ParagraphParser = (data, config) => {
  const text = handleOptionalAttributes(data.text, config)
  return `<p>${text}</p>`
}
