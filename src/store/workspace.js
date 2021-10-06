import router from '~/routes'

export default {
  namespaced: true,
  state(){
   return { 
    workspaces: [],
    currentWorkspace: {},
    currentWorkspacePath: []
   }
  },
  getters:{},
  mutations:{
    assignState(state, payload){
      Object.keys(payload).forEach(key => {
        state[key] = payload[key]
      })
    }
  },
  actions: {
    async createWorkspace({ dispatch }, payload = {}) {
      const { parentId } = payload
      const workspace = await _request({
        method: 'POST',
        body: JSON.stringify({
          title: '',
          parent: parentId
        })
      })
      await dispatch('readWorkspaces')
      router.push({
        name: 'Workspace',
        params: {
          id: workspace.id
        }
      })
    },
    async readWorkspaces({ dispatch , commit }) {
      const workspaces = await _request({
        method: 'GET',
      })
      commit('assignState', {
         workspaces
      })
      dispatch('findWorkspacePath')
      if( !workspaces.length ) {
        dispatch('createWorkspace')
      }
    },
    async readWorkspace({ commit }, payload) {
      const { id } = payload
      try {
        const workspace = await _request({
        id,
        method: 'GET',
      })
        commit('assignState', {
          currentWorkspace: workspace
        })
      } catch (error) {
        router.push('/error')
      }
    },
    async updateWorkspace({ dispatch }, payload){
      const { id, title, content } = payload
      await _request({ 
        id,
        method: 'PUT',
        body: JSON.stringify({
          title,
          content
        })
      })
      await dispatch('readWorkspaces')
    },
    async deleteWorkspace({ state, dispatch }, payload){
      const { id } = payload
      await _request({ 
        id,
        method: 'DELETE',
      })
      await dispatch('readWorkspaces')
      if ( id === parseInt(router.currentRoute.value.params.id, 10)) {
        router.push({
          name: 'Workspace',
          params: {
            id: state.workspace[0].id
          }
        })
      }
    },
    // 어떠한 경로를 타고 내려왔는지 확인 할 수 있습니다.
    findWorkspacePath({state, commit}){
      const currentWorkspaceId = parseInt(router.currentRoute.value.params.id, 10)
      function _find(workspace, parents){ 
        if (currentWorkspaceId === workspace.id) {
          commit('assignState', {
            currentWorkspacePath: [...parents, workspace]
          })
        }
        if(workspace.documents) { // 하위 문서가 존재할 경우
          // recursive 
          workspace.documents.forEach(ws => _find(ws, [...parents, workspace]))
        }
      }
      state.workspaces.forEach(workspace => _find(workspace, []))
    }
  }
}

async function _request(options) {
  const { id = '' } = options
  return await fetch(`https://kdt.roto.codes/documents/${id}`,{ 
    ...options,
    headers: {
      'Content-Type': 'application/json',
      'x-username': 'minsgy'
    },
  }).then(res => res.json())
}