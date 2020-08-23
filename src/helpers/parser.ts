import { OutputBlockData } from '@editorjs/editorjs'
import { ParserFunctionMap } from '@/interfaces'

const parserFunctionMap: ParserFunctionMap = {
  delimiter: () => {
    return `<br/>`
  },

  header: ({ data }: OutputBlockData) => {
    return `<h${data.level}> ${data.text} </h${data.level}>`
  },

  paragraph: ({ data }: OutputBlockData) => {
    return `<p> ${data.text} </p>`
  },

  list: ({ data }: OutputBlockData) => {
    let style = data.style === 'unordered' ? 'ul' : 'ol'
    let list = data.items.map(i => `<li> ${i} </li>`).reduce((a, c) => a + c, '')
    return `<${style}> ${list} </${style}>`
  },

  image: ({ data }: OutputBlockData) => {
    let caption = data.caption ? data.caption : 'Image'
    return `<img src="${data.file.url}" alt="${caption}" />`
  },
}
