import { parseEditorJsIntoHtmlStrings } from '../src/'
import { data } from './data'

describe('Parsing EditorJS data blocks', () => {
  test('Parsing data works', () => {
      const parsedData = parseEditorJsIntoHtmlStrings(data)
      console.log(parsedData)
      expect(parsedData.length).toBe(4)
  })
})