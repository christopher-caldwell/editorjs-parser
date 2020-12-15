import { EmbedParser } from '../interfaces/'

const iFrameOptions =
  'frameborder="0" allow="accelerometer; autoplay; clipboard-write;' +
  'encrypted - media; gyroscope; picture -in -picture" allowfullscreen'

export const handleEmbed: EmbedParser = (data, config) => {
  const title = data.caption ? `title="${data.caption}"` : ''
  const height = config?.height ? config.height : data.height
  const width = config?.width ? config.width : data.width

  return `<iframe ${title} width="${width}" height="${height}" src="${data.embed}" ${iFrameOptions} />`
}
