<template>
  <div class="container">
    <h1 class="card" v-color.blink.hovered="'red'">Кастомные директивы во VUE</h1>

    <form class="card form-control">
      <label>
        <input v-focus type="text" placeholder="Input name">
      </label>
      <button class="btn">Send</button>
    </form>
  </div>

</template>

<script>
import colorDirective from './directives/colorDirective';
import focusDirective from './directives/focusDirective';

export default {
  directives: {
    focus: focusDirective,
    color: colorDirective
  }
}
</script>
