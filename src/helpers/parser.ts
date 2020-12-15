import { ParserFunctionMap } from '@/interfaces'
import { handleHeader } from './header'
import { handleParagraph } from './paragraph'
import { handleList } from './list'
import { handleImage } from './image'
import { handleEmbed } from './embed'

export const parserFunctionMap: ParserFunctionMap = {
  delimiter: () => {
    return `<br/>`
  },
  header: handleHeader,
  paragraph: handleParagraph,
  list: handleList,
  image: handleImage,
  embed: handleEmbed
}
