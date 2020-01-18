//import { Map } from 'immutable';
const { Map, fromJS, isIndexed } = require('immutable');
let a = Map({
  select: 'users',
  filter: Map({ name: 'Cam' })
})
let b = a.set('select', 'people');//select value setted to people instead of users
console.log(b.get('select'));

console.log( a === b); // false
console.log( a.get('filter') === b.get('filter')); // true


const obj = fromJS({a:'123',b:'234'},
                function (key, value, path) {
                    console.log('key--',key,'value--',value, 'path--',path)
                    return isIndexed(value) ? value.toList() : value.toOrderedMap()
                }
            )

