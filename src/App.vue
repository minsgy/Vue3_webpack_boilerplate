<template>
  <h1
    @click="slotName = 'abc'">
    {{ msg }}
  </h1>
  <Hello>
    <!-- default 기본 슬롯 => 값을 끌어와 사용합니다.-->
    <!-- 범위를 갖는 슬롯 - default만 사용가능하다~ -->
    <template
      #default="{
        hello
      }">
      <h2>
        Hello {{ hello }}
      </h2>
    </template>
    <!-- 여기선 확장 불가임. -->
    <template #[slotName]>
      <h2>
        ABC
      </h2>
    </template>
  </Hello>
</template>
<script>
import Hello from '~/components/Hello'

export default {
  components: {
    Hello,
  },
  data() {
    return {
      msg: 'Hello Vue...',
      slotName: 'xyz'
    }
  },
}
</script>
