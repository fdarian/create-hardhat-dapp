function removeTemplateQuotes(str: string) {
  str = str.replace('/"|<-r|/g', '')
  str = str.replace('/|r->|"/g', '')
  return str
}

export default removeTemplateQuotes
