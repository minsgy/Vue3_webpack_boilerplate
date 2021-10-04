<template>
  <div @click="onModal">
    <slot name="activator"></slot>
  </div>
  <template v-if="modelValue">
    <div
      class="modal"
      @click="offModal">
      <div
        :style="{ width: `${parseInt(width, 10)}px`}"
        class="modal__inner"
        @click.stop>
        <button
          v-if="closeable"
          class="close"
          @click="offModal">
          x
        </button>
        <slot></slot>
      </div>
    </div>
  </template>
</template>

<script>
export default {         
  props: {
    width: {
      type: [String, Number],
      default: 400
    },
    closeable: {
      type: Boolean,
      default: false
    },
    modelValue: {
      type: Boolean,
      default: false
    }
  },          
 emits:['update:modelValue'],
 watch: {
   modelValue(newValue) {
     if(newValue) {
       window.addEventListener('keyup', this.keyupHandler)
     } else {
       window.removeEventListener('keyup', this.keyupHandler)
     }
   }
 },                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
 methods:{
   keyupHandler(e){
     if(e.key === 'Escape'){
       console.log('종료!')
       this.offModal()
     }
   },
  onModal() {
    // 외부 데이터 사용하기 때문에. Emit을 활용해야합니다.
   this.$emit('update:modelValue', true)
  },
  offModal() {
   this.$emit('update:modelValue', false)
  }
 }
}
</script>

<style lang="scss" scoped>
.modal{
 background-color: rgba(black, .5);
 position: fixed;
 top: 0;
 bottom: 0;
 left: 0;
 right: 0;
 z-index: 9;
 display: flex;
 justify-content: center;
 align-items: center;
 &__inner {
  background-color: white;
  padding: 20px;
  border-radius: 6px;
  box-shadow: 0 10px 10px rgba(black, .2);
  button.close{
    float: right;
  }
 }
}
</style>