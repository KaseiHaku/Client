/** todo Function Component 函数组件
 * 特征：
 * 1. 具有一个 props 参数，用于接收父 DOM 传递过来的参数
 * 2. 写成 Class Component 时，只具有一个 render 函数的类形式，可以转换成 函数组件
 * @param props 表示是父 DOM 对象传递过来的参数
 * */
function Square(props) {
    // todo 此处的 return 就相当于下面 类组件 render() 函数的 return
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}


/** todo Class Component 类组件：一个 JS class 是 React.Component 的子类，那么这个类就是 react 的类组件
 * @param props 表示是父 DOM 对象传递过来的参数
 * */
class Board extends React.Component {

    // todo 在 react 中，所有的 DOM 对象都是通过 render 方法渲染出来了的
    render() {
        return (
            <div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }

    // todo 渲染 Square 组件，并给其传值
    renderSquare(i) {
        return (
            // todo 该处的 <Square/> 标签对应的就是上面的 函数组件 Square
            <Square
                value={this.props.squares[i]}  // 此处的 value 属性对应上面 Square 组件 return 中的 {props.value}
                onClick={() => this.props.onClick(i)} // 此处同理 value，等价于 {props.onClick}
            />
        );
    }
}

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [
                {
                    squares: Array(9).fill(null)
                }
            ],
            stepNumber: 0,
            xIsNext: true
        };
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);

        const moves = history.map((step, move) => {
            const desc = move ?
                'Go to move #' + move :
                'Go to game start';
            return (
                <li key={move}>
                    <button onClick={() => this.jumpTo(move)}>{desc}</button>
                </li>
            );
        });

        let status;
        if (winner) {
            status = "Winner: " + winner;
        } else {
            status = "Next player: " + (this.state.xIsNext ? "X" : "O");
        }

        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={current.squares}
                        onClick={i => this.handleClick(i)}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }


    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? "X" : "O";
        this.setState({
            history: history.concat([
                {
                    squares: squares
                }
            ]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext
        });
    }

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0
        });
    }


}


/** todo React 根渲染
 * @param 1 在根元素下被渲染的组件
 * @param 2 根元素的 DOM 对象
 * */
ReactDOM.render(<Game />, document.getElementById("root")); // 渲染 Game 类


/** todo 游戏胜负判定 */
function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}
