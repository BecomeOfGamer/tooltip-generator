const txtTooltip = document.querySelector('#txtTooltip')
const tmplTooltip = document.querySelector('#tmplTooltip')

txtTooltip.addEventListener('focusout', e => {
    const value = String(e.target.value).trim()
    txtTooltip.value = value
    tmplTooltip.innerHTML = value.replace('\n', '')
})

window.onload = () => tmplTooltip.innerHTML = String(txtTooltip.value).replace('\n', '').trim()