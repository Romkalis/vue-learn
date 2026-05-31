let interval
const mouseover = (evt) => {
  evt.target.style.color = 'pink'
}
const mouseout = (evt) => {
  evt.target.style.color = 'blue'
}
export default {
  mounted(el, binding) {
    // if (binding.modifiers.blink) {
    //   let flag = true
    //   interval = setInterval(() => {
    //     el.style.color = flag ? 'wheat' : binding.value
    //     flag = !flag
    //   }, 1000)
    // }

    if (binding.modifiers.hovered) {
      console.log(binding)
      console.log(el)
      el.addEventListener('mouseover', mouseover)
      el.addEventListener('mouseout', mouseout)
    }
  },
  umounted(el) {
    if (el.bindings.modifier.blink) {
      clearInterval(interval)
    }
    if (el.bindings.modifier.hovered) {
      el.removeEventListener('mouseover', mouseover)
      el.removeEventListener('mouseout', mouseout)
    }
  },
}
