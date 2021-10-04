<template>
  <Modal
    v-model="isShow"
    closeable>
    <template #activator>
      <button>On Modal!</button>
    </template>
    <h3>App.vue</h3>
    <textarea
      ref="editor"
      v-model="msg"></textarea>
    <button @click="submit">
      submit
    </button>
  </Modal>
  <Hello />
</template>
<script>
import Hello from '~/components/Hello'
import Modal from '~/components/Modal'

export default {
  components: {
    Hello,
    Modal
  },
  data() {
    return {
      msg: 'Hello Vue...',
      isShow: false
    }
  },
  watch: {
    isShow(newValue) {
      if(newValue){
        // 실행에 따른 순서로 nextTick을 통해 돔 생성 후 함수를 부를 수 있다.
        this.$nextTick(() => {
          this.$refs.editor.focus()
        })
      }
    }
  },
  methods: {
    submit() {
      console.log(this.msg)
    }
  }
}
</script>
