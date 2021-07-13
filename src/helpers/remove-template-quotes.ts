function removeTemplateQuotes(str: string) {
  str = str.replaceAll('"|<-r|', '')
  str = str.replaceAll('|r->|"', '')
  return str
}

export default removeTemplateQuotes
