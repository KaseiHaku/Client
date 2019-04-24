/** todo 主要介绍 React Component 的基本结构 */
class ComponentName extends React.Component {
    constructor(props){
        super(props);
        this.state = {};        // 该属性是必须要存在的，保存当前组件的状态，且修改该属性只能通过 this.setState() 方法
    }
    
    setState(){};               // 该方法是从父类继承过来的，不需要自己实现，直接用，并且不能覆写
    
    /** 以下方法都是 覆写 父类的方法 */
    componentDidMount() {
        console.log('组件生成时调用的方法，React 术语叫做 挂载 ');
    }
    componentWillUnmount() {
        console.log('组件删除时调用的方法，React 术语叫做 卸载 ');
    }
    render(){
    
        return (        // 适合只返回一个标签
            <div></div>
        );
        
        return [        // 适合返回多个标签
            <a onClick={this.setState({})}></a>     // 这里会报 setState() 方法未定义，原因是因为 onclick 属性中 this 指向的是 a 标签了，而不是 ComponentName 创建出来的实例   
            <label></label>
        ];
    }
    
    
}
