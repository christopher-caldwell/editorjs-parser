import { EditorJsBlock, HeaderBlock, ListBlock, EmbedBlock, ImageBlock, ParagraphBlock } from './interfaces'
import { Config} from './interfaces/parser-config'
import { parserFunctionMap } from './helpers/parser'

export const parseEditorJsIntoHtmlStrings = (blocks: EditorJsBlock[], config?: Config): string[] => {
  return blocks.map(({ type, data }) => {
    switch (type) {
      case 'delimiter':
        return parserFunctionMap.delimiter()
      case 'header':
        return parserFunctionMap.header(data as HeaderBlock)
      case 'paragraph':
        return parserFunctionMap.paragraph(data as ParagraphBlock, config?.paragraph)
      case 'list':
        return parserFunctionMap.list(data as ListBlock, config?.list)
      case 'image':
        return parserFunctionMap.image(data as ImageBlock, config?.image)
      case 'embed':
        return parserFunctionMap.embed(data as EmbedBlock, config?.embed)
      default:
        throw new Error(`Unsupported Editor block type: "${type}"`)
    }
  })
}

export {
  Config,
  EditorJsBlock
}