export type AllowableCategory = 'delimiter' | 'header' | 'paragraph' | 'list' | 'image'

export type ParserFunctionMap = {
  [key in AllowableCategory]: ParserFunction
}

export interface BlockOfData {
  /** The number that the header element is eg 1 = h1 */
  level?: number
  /** The text inside of the HTML element */
  text?: string
  /** Whether or not the list is ordered */
  style?: 'unordered' | 'ordered'
  items?: string[]
  file?: {
    url: string
  }
}

export interface EditorJsBlock {
  data: BlockOfData
  type: AllowableCategory
}

export type ParserFunction = (data: BlockOfData) => string