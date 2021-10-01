export default{
 install(app, options){
  // 하나의 Vue Component에서 어디든 사용 할 수 있도록 설정. 
  app.config.globalProperties[options.pluginName || '$fetch'] = (url, opts) => {
   return fetch(url, opts).then(res=>res.json())
  }
 }
}