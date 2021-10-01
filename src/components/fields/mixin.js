export default {
 props: {
  title :{
    type:String,
    default: ''
  },
  modelValue: {
   type:String,
   default: ''
  },
  items: {
   type:Array,
   // array 반환을 위해서는 팩토리함수 (객체와 배열을 반환하는 함수)
   default: () => ([]) 
  }
 },
 emits: ['update:modelValue']
}