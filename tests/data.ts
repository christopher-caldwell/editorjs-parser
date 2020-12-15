import { EditorJsBlock } from '../src/interfaces/'

export const data: EditorJsBlock[] = [
  {
    type: 'header',
    data: {
      level: 3,
      text: 'Mickey, mickey, mickey, cant you see. Sometimes your pins just hypnotize me.'
    }
  },
  {
    type: 'paragraph',
    data: {
      text: "I'm just sitting here spending all money on these pins."
    }
  },
  {
    type: 'paragraph',
    data: {
      text: 'This is some great stuff, I mean <b>great stuff.</b>'
    }
  },
  {
    type: 'paragraph',
    data: {
      text: 'Check out some other cool stuff <a href="https://google.com">here</a>'
    }
  }
]