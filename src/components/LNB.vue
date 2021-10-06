<!-- Left nav Bar -->
<template>
  <nav 
    ref="nav"
    :style="{ width : `${navWidth}px`}">
    <div class="header">
      <div class="user-profile"></div>
      Minseok's Notion
    </div>
    <ul>
      <WorkspaceItem
        v-for="workspace in workspaces"
        :key="workspace.id"
        :workspace="workspace" />
    </ul>
    <div class="actions">
      <div
        class="action"
        @click="$store.dispatch('workspace/createWorkspace')">
        <span class="material-icons">add</span>
        새로운 페이지
      </div>
    </div>
    <!-- dblclick (더블클릭 이벤트) -->
    <div
      ref="resizeHandle"
      class="resize-handle"
      @dblclick="navWidth = 240"></div>
  </nav>
</template>

<script>
import interact from 'interactjs'
import WorkspaceItem from '~/components/WorkspaceItem'
export default {
  components: {
    WorkspaceItem
  },
  data(){ 
    return {
      navWidth: 240
    }
  },
  computed: {
    workspaces() {
      return this.$store.state.workspace.workspaces
    }
  },
  created(){
    this.workspacesInit()
  },
  mounted() {
    // created 이후로는 갱신이 도지 않아서 불가능합니다. 그래서 mount이후!
    this.navInit()
  },
  methods: {
    async workspacesInit() {
      await this.$store.dispatch('workspace/readWorkspaces')
      console.log(this.$store.state.workspace.currentWorkspacePath)
    },
    navInit() {
      interact(this.$refs.nav)
        .resizable({
          edges: {
            right: this.$refs.resizeHandle
          }
        })
        .on('resizemove', e => {
          this.navWidth = e.rect.width
        })
    }
  }
}
</script>

<style lang="scss" scoped>

nav{ 
 height: 100%;
 max-width: 500px;
 min-width: 160px;
 background-color: $color-background;
 display: flex;
 flex-direction: column;
 position: relative; // 양쪽 스크롤을 위한.
 .header{
  padding: 14px;
  font-weight: 700;
  display: flex;
  .user-profile{
   width: 20px;
   height: 20px;
   border-radius: 4px;
   margin-right: 10px;
   background-image: url("https://avatars.githubusercontent.com/u/60251579?v=4");
   background-size: cover;
  }
 }
 ul{
  flex-grow: 1;
  overflow-x: hidden;
  overflow-y: auto;
 }
 .actions{
   border-top: 1px solid $color-border;
   .action{ 
     height: 45px;
     display: flex;
     align-items: center;
     padding: 0 14px;
     color: $color-icon;
     cursor: pointer;
     &:hover {
       background-color: $color-background--hover1;
     }
     .material-icons {
       margin-right: 4px;
       color: $color-icon;
     }
   }
 }
 .resize-handle{
   width: 4px;
   height: 100%;
   position: absolute;
   top: 0;
   right: 0;
   cursor: col-resize; // 수평 아이콘
   transition: .4s;
   &:hover {
     background-color: $color-border;
   }
 }
}
 
</style>