export const shadow = (name) => ({ colors, shadows }) => {
  const s = shadows[name]
  if (!s) return ''

  return [].concat(s).map(
    shadow => Object
      .entries(colors)
      .reduce((acc, [k, v]) => acc.replace(new RegExp(k, 'g'), v), shadow)
  )
}
