"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var client_1 = require("react-dom/client");
// const heading = React.createElement(
//     "h1", 
//     {id: "heading"}, 
//     "Welcome to Food-Delivery!!"
// );
var parent = react_1.default.createElement('div', { id: 'parent' }, [
    react_1.default.createElement('div', { id: 'child1' }, [
        react_1.default.createElement('h1', {}, 'I am an h1 tag'),
        react_1.default.createElement('h2', {}, 'I am an h2 tag')
    ]),
    react_1.default.createElement('div', { id: 'child2' }, [
        react_1.default.createElement('h1', {}, 'I am an h1 tag'),
        react_1.default.createElement('h2', {}, 'I am an h2 tag')
    ])
]);
console.log(parent);
var root = client_1.default.createRoot(document.getElementById("root"));
root.render(parent);
exports.default = {};
