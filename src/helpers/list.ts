import { handleOptionalAttributes } from '../util/sharedLogic'
import { ListParser } from '../interfaces/'

export const handleList: ListParser = (data, config) => { 
  const items = data.items || []
  const listType = data.style === 'unordered' ? 'ul' : 'ol'
  const list = items.map(text => {
    const formattedText = handleOptionalAttributes(text, config)
    return `<li> ${formattedText} </li>`
  }).join('\n')
  return `<${listType}> ${list} </${listType}>`
}
