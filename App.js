


const parent = React.createElement("div",{id:'parent'},
[
    React.createElement("div",{id:'child'},[
        React.createElement("h1",{},'Hi I am heading'),
        React.createElement("h1",{},'Hi I am heading')
     ]),
     React.createElement("div",{id:'child2'},[
        React.createElement("h1",{},'Hi I am heading'),
        React.createElement("h1",{},'Hi I am heading')
     ])
])
 const root = ReactDOM.createRoot(document.getElementById('root'));

 root.render(parent);
