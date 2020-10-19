import { ParserFunctionMap } from '@/interfaces'


export const parserFunctionMap: ParserFunctionMap = {
  delimiter: () => {
    return `<br/>`
  },

  header: data => {
    return `<h${data.level}> ${data.text?.replace('<a', '<a target="_blank"')} </h${data.level}>`
  },

  paragraph: data => {
    return `<p> ${data.text?.replace('<a', '<a target="_blank"')} </p>`
  },

  list: data => {
    const items = data.items || []
    const listType = data.style === 'unordered' ? 'ul' : 'ol'
    const list = items.map(i => `<li> ${i.replace('<a', '<a target="_blank"')} </li>`).reduce((a, c) => a + c, '')
    return `<${listType}> ${list} </${listType}>`
  },

  image: data => {
    return `<img src="${data.file?.url}"  />`
  },
}
