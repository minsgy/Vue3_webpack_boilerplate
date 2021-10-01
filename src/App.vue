<template>
  <!-- 클릭 시 컴포넌트 변경 -->
  <!-- 동적 컴포넌트를 통해서 렌더링 비용을 높일 지, 낮출 지는 생각해야합니다. -->
  <h1 @click="currentComponent = 'Hello'">
    Hello
  </h1>
  <h1 @click="currentComponent = 'World'">
    World
  </h1>
  <!-- 컴포넌트를 동적으로 바꿀 수 있습니다. -->
  <!-- keep-alive를 통해서 동적 컴포넌트를 렌더링하자면 재 렌더링을 방지 할 수 있습니다.-->
  <!-- 단점 : 그만큼 캐싱되기때문에 메모리가 많이 참조됨 -->
  <!-- 자주 변경된다면 사용 추천! -->
  <keep-alive>
    <component :is="currentComponent" />
  </keep-alive>
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
      // default 컴포넌트 설정
      currentComponent: 'Hello'
    }
  },
}
</script>
