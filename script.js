let user = {
   name: "Aziz", // string
   surname: 'Adams',
   age: 15, // number
   isMarried: true, // boolean
   girls: ['nargiza', 'malika', 'karina', 'aziza'],
   passport: {
       serries: 'AC',
       number: 213123213
   },


}
let wallet = {
   cash: 19000,
   card: {
       password: 7777,
       cash: 13532
   }
}

let types = {
   number: [],

   string: [],
   object: [],
   boolean: []
}
let user_new = Object.assign(user, wallet)

let values = Object.values(user_new)

let keys = Object.keys(user_new)

let filtered = []
filtered = values.concat(keys)

filtered.filter(item => {
   if (typeof (item) === 'number') {
       types.number.push(item)
   } else if (typeof (item) === 'string') {
       types.string.push(item)
   } else if (typeof (item) === 'object') {
       types.object.push(item)
   } else if (typeof (item) === 'boolean') {
       types.boolean.push(item)
   }
})
console.log(user_new);
console.log(values);
console.log(keys);
console.log(types);

