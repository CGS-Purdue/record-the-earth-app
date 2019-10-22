export default (html) => {
  return html.trim()
    .replace(/\n/g,'')
    .replace(/>\s*</g,'><')
    .replace(/\s+/g,' ')
}
