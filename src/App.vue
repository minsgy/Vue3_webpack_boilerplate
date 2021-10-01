<template>
  <div v-if="!isEdit">
    {{ msg }}
    <button @click="onEdit">
      Edit!
    </button>
  </div>
  <div v-else>
    <input
      ref="editor"
      v-model="msg"
      @keyup.enter="isEdit=false" />
  </div>
</template>
<script>

export default {
  data() {
    return {
      isEdit: false,
      msg: 'Hello Vue...',
    }
  },
  methods: {
    onEdit(){
      this.isEdit = true
      // 버튼을 클릭하자마자 포커싱이 되도록 설정!
      // DOM 업데이트 주기 이후 실행 될 콜백을 연기합니다. refs랑 같이 사용
      this.$nextTick(() => {
        this.$refs.editor.focus()
      })
    }
  }
}
</script>
