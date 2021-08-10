Vue Reactive 不生效的场景：
    1. Vue 无法检测实例被创建时不存在于 data 中的 property;
       原因：由于 Vue 会在初始化实例时对 property 执行 getter/setter 转化，所以 property 必须在 data 对象上存在才能让 Vue 将它转换为响应式的
       解决方法: 将 property 在 vue 初始化实例之前，就放到 data 中
    
    2. Vue 无线检测 Object property 的新增和删除
       原因: JS 无法对属性的新增和删除方法做代理，所以检测不到 property 的新增和删除
       解决方法: 无
    
    3. Vue 不能检测通过数组索引直接修改一个数组项
       原因：如果对每个数组元素都进行 响应式 改造，性能代价太大
       解决方法：vm.$set(ary, index, value)
    
    4. Vue 不能监测直接修改数组长度的变化，即：vm.ary.length = 2; 不是响应式的
       原因: JS 限制
       解决方法：vm.ary.splice()
    
    5. Vue 渲染页面是异步的，修改 JS 数据后，立马从 DOM 获取修改的后值是获取不到的
       解决方法：Vue.nextTick(function(){});  // nextTick() 的作用是，在 Vue 完成一次 DOM 渲染后，执行参数中的 callback
    
    6. 实在不更新 
       解决方法： vm.$forceUpdate()
    
    7. 相同路由，路由参数变化，页面数据不更新
       解决方法：watch $router
    
    
    
    
    
