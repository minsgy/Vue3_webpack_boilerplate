<template>
  <h1>설문조사</h1>

  <component
    :is="field.component"
    v-for="field in fields"
    :key="'component-'+field.title" 
    v-model="field.value"
    :title="field.title"
    :items="field.items" />
  <h1>결과</h1>
  <div
    v-for="field in fields"
    :key="'result-'+field.title">
    {{ field.value }}
  </div>
  <button @click="submit">
    제출
  </button>
</template>
<script>
import * as FieldComponents from '~/components/fields/index.js'

export default {
  components: {
    ...FieldComponents,
  },
  data() {
    return {
      fields: [
        {
          component: 'TextField',
          title: '이름',
          value: ''
        },
        {
          component: 'SimpleRadio',
          title: '나이대',
          value: '',
          items: ['20대','30대','40대','50대']
        }
      ]
    }
  },
  methods: {
    submit() {
      const results = this.fields.map(({title, value}) => ({
        title,
        value
      }))
      console.log(results)
    }
  }
}
</script>
