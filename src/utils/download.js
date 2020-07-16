export const download = (name, id, clean = i => i) => {
  const outerHtml = document
    .getElementById(id)
    .outerHTML

  const contents = clean(outerHtml)
  const element = document.createElement('a')
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(contents))
  element.setAttribute('download', name)

  element.style.display = 'none'
  document.body.appendChild(element)

  element.click()

  document.body.removeChild(element)
}
