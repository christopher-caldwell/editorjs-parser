import { BaseConfig, ImageConfig, EmbedConfig } from './parser-config'

export type AllowableCategory = 'delimiter' | 'header' | 'paragraph' | 'list' | 'image' | 'embed'

export type HeaderParser = (data: HeaderBlock) => string
export type ParagraphParser = (data: ParagraphBlock, config?: BaseConfig) => string
export type ListParser = (data: ListBlock, config?: BaseConfig) => string
export type ImageParser = (data: ImageBlock, config?: ImageConfig) => string
export type EmbedParser = (data: EmbedBlock, config?: EmbedConfig) => string

export type ParserFunctionMap = {
  delimiter: () => string
  header: HeaderParser
  paragraph: ParagraphParser
  list: ListParser
  image: ImageParser
  embed: EmbedParser
}

export interface ParagraphBlock {
  /** The text inside of the HTML element */
  text: string
}

export interface HeaderBlock {
  /** The number that the header element is eg 1 = h1 */
  level: 1|2|3|4|5|6
  /** The text inside of the HTML element */
  text: string
}

export interface ListBlock {
  /** Whether or not the list is ordered */
  style?: 'unordered' | 'ordered'
  /** `<li>` elements within the list */
  items?: string[]
}

export interface ImageBlock {
  file?: {
    url: string
  }
}

export interface EmbedBlock {
  caption?: string
  /** Link specifically used for embedding */
  embed: string
  height: number
  width: number
  /** Raw URL of the posted source */
  source: string
  /** Internal key name of the embedded service */
  service:
    | 'youtube'
    | 'codepen'
    | 'coub'
    | 'imgur'
    | 'gfycat'
    | 'vimeo'
    | 'vine'
    | 'twitter'
    | 'instagram'
    | 'twitch-video'
    | 'twitch-channel'
    | 'yandex-music-track'
    | 'yandex-music-album'
    | 'yandex-music-playlist'
}

export interface EditorJsBlock {
  data: ImageBlock | ListBlock | HeaderBlock | ParagraphBlock | EmbedBlock
  type: AllowableCategory
}


