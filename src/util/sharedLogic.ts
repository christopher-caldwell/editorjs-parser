import { BaseConfig } from '../interfaces/parser-config'

const handleLinkAttributes = <TypeOfConfig extends BaseConfig>(config?: TypeOfConfig): string => {
  if (!config) return ''
  const willAddNoOpener = config.linkOptions && config.linkOptions.addRelNoOpener
  const willAddTargetBlank = config.linkOptions && config.linkOptions.addTargetBlank

  const noOpener = willAddNoOpener ? 'rel="no-opener"' : ''
  const targetBlank = willAddTargetBlank ? 'target="_blank"' : ''

  return [noOpener, targetBlank].join(' ')
}

export const handleOptionalAttributes = <TypeOfConfig extends BaseConfig>(
  text: string,
  config?: TypeOfConfig
): string => {
  const linkAttributes = handleLinkAttributes<TypeOfConfig>(config)
  text = text.replace('<a', `<a ${linkAttributes}`)
  return text
}
