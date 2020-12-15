import { ImageParser } from '../interfaces/'
import { ImageConfig } from '../interfaces/parser-config'

const handleHeightAndWidthOverrides = (config?: ImageConfig): string => {
  if (!config) return ''
  const heightOverride = config.height ? `height: ${config.height};` : ''
  const widthOverride = config.width ? `width: ${config.width};` : ''

  return heightOverride !== '' || widthOverride !== '' ? `style="${widthOverride}${heightOverride}"` : ''
}

export const handleImage: ImageParser = (data, config) => {
  const styles = handleHeightAndWidthOverrides(config)
  const altText = config?.altText ? `alt="${config.altText}"` : ''

  return `<img ${styles} ${altText} src="${data.file?.url}" />`
}
