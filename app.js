//1.Assignment variable
const fname = "Mark Zuckaberg"

//2.Function
function Hello() {
    return(
        <div>
            <h1 className="text">Welcome to ReactJS!</h1>
            <hr />
            <h1 className="text2">Hello, World! {fname}</h1>
        </div>
    ) 
}


// const domContainer = document.querySelector('#root');
const domContainer = document.getElementById('root');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Hello />);