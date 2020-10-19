import { EditorJsBlock } from './interfaces'
import { parserFunctionMap } from './helpers/parser'

export const parseEditorJsIntoHtmlStrings = (blocks: EditorJsBlock[]): string[] => {
  return blocks.map(({ type, data }) => {
    const htmlString = parserFunctionMap[type](data)
    return htmlString
  })
}