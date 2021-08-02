function removeTemplateQuotes(str: string) {
  str = str.replace(/(.<#)|(#>.)/g, '')
  return str
}

export default removeTemplateQuotes
