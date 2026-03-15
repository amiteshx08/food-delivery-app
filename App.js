"use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
// const heading = React.createElement(
//     "h1", 
//     {id: "heading"}, 
//     "Welcome to Food-Delivery!!"
// );
var parent = React.createElement('div', { id: 'parent' }, [
    React.createElement('div', { id: 'child1' }, [
        React.createElement('h1', {}, 'I am an h1 tag'),
        React.createElement('h2', {}, 'I am an h2 tag')
    ]),
    React.createElement('div', { id: 'child2' }, [
        React.createElement('h1', {}, 'I am an h1 tag'),
        React.createElement('h2', {}, 'I am an h2 tag')
    ])
]);
console.log(parent);
var root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
// exports.default = {};
