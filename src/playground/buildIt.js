class BuildIt extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        };
    }
    handleToggleVisibility(){
        this.setState((prevState) => {
            return{
                visibility: !prevState.visibility
            };
        });
    }
    render(){
        return(
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>
                    {this.state.visibility ? 'Hide Details' : 'Show Details'}
                </button>
                <div>
                    <p>Hey! This is a secret message</p>
                </div>
            </div>
        );
    }
}

ReactDOM.return(<BuildIt />, document.getElementById('app'));





// const appContent = {
//     title: "Visibility Toggle",
//     secret: "You have discovered my terrible secret!"
// };
//
// let show = false;
//
// const toggle = () => {
//     show = !show;
//     render();
// };
//
// const render = () => {
//     const jsx = (
//         <div>
//             <h1>{appContent.title}</h1>
//             <button onClick={toggle}>
//                 {show ? 'Hide details' : 'Show details'}
//             </button>
//             {show && (
//                 <div>
//                     <p>{appContent.secret}</p>
//                 </div>
//
//             )}
//         </div>
//     );
//
//     ReactDOM.render(jsx, document.getElementById('app'));
// };
//
// render();