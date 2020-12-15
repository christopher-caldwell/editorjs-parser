export interface LinkConfig {
  addTargetBlank?: boolean
  addRelNoOpener?: boolean
}

export interface BaseConfig {
  /** Set of behaviors when `<a>` tags are encountered */
  linkOptions?: LinkConfig
}

export interface EmbedConfig extends BaseConfig {
  /** Override the provided height value */
  height: number
  /** Override the provided width value */
  width: number
}

export interface ImageConfig extends BaseConfig {
  altText?: string
  /** Valid CSS height eg `%`, `px`, `vh` */
  height: string
  /** Valid CSS width eg `%`, `px`, `vh` */
  width: string
}

export interface Config {
  list?: BaseConfig
  paragraph?: BaseConfig
  image?: ImageConfig
  embed?: EmbedConfig
}
