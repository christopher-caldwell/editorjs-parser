import { OutputBlockData } from '@editorjs/editorjs'

export type AllowableCategory = 'delimiter' | 'header' | 'paragraph' | 'list' | 'image'

export type ParserFunction = (data: OutputBlockData) => string

export interface ParserFunctionMap {
  delimiter: ParserFunction
  header: ParserFunction
  paragraph: ParserFunction
  list: ParserFunction
  image: ParserFunction
}
