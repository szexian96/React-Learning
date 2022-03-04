# JavaScript

## Thing need to Learn for react・先决条件

- function
- object
- array
- **class**
- **arrow function**
  > ```
  > const example1 = (a,b) => (a+b+100)
  > > #will return this
  >
  > cosnt example2 = () => {};
  > > #in react.js variable = filename
  > ```
- **class**
- **let**
- **const**

## Type in JavaScript

1. var, let, const

- Number
- String
- Boolean
- Object
  - Function
  - Array
  - Date
  - RegExp
- Null
- Undefined

## Number

- 64bit binary format IEEE
  > ```
  > ①　3/2 = 1.5
  > ②　Math.floor(3/2) = 1
  > ```
- Apparent Integer : ==float==
- Math : ==Build in Object==
  - Provide Advanced Math Function
- parseInt() : ==String => Integer==

  > ```
  > parseInt('123',10)
  > parseInt('String',Base)
  > ```

- Number.isNan() : Not a number
- isFinite() : Check whether is infinity or not

## String

- Unicode Characters
- 16 bit numbers
- length = To find the length of String
- Use String like this format: `objects_name.method_name`
  > 1. xxxx.charAt(0)
  > 2. xxxx.replace('原本','要改的')
  > 3. xxxx.toUpperCase()

## Other Types

- null : non value
- undefined : uninitialized variable
- Boolean type = `False` //初期値
  > ```
  > 1. Boolean("); //False
  > 2. Boolean(234)l //True
  > ```
- Types that categorized as `False`:
  > false, 0, (""), Nan, null, undefined

## Variables

- let : declare ==block level== variables
- const : value ==never intended== to change
- var : does not have ==restriction==
- undefined : declare variable ==without value==

## Operators

- numeric operators : **+,-,\*,/,%**

  > ```
  > + => x=x+y
  > - => x=x-y
  > ```

- '+' operator : String Concatenation

  > ```
  > '3' + 4 + 5 => "345" #如果前面是concanate的话，过后都会变成concanate
  > 3 + 4 + '5' => "75" #前面是正常+-
  > ```

- Comparisons : **<,>,<=,>=**
- Different type comparision

  > ```
  > 123 == "123" //True
  > 123 === "123" //False #avoid type coercian use ===
  > ```

- !== and !=
- bitwise operator

## Control Structure

- Conditional Statement
- **if...else**

  > ```
  > if (name === 'puppies'){
  >   ...
  > }else if (name === 'kittens'){
  >   ...
  > }else{
  >   ...
  > }
  > ```

- **while, do...while**

  > ```
  > # While Loop
  > while(true){
  >    ...
  > }
  > # Do...While Loop
  > var input;
  > do{
  >    input = get_input()
  > }while
  > ```

- **for...loop**

  > ```
  > for ( var i = 0; i < 5; i++){
  >  //will execute  5 times
  > }
  > ```

- **for...of**

  > ```
  > for (let [value] of [array]){
  >     //do...something
  > }
  > ```

- **for...in**
- iterates over all enum properties of an object that keyed by String.

  > ```
  > # Hashmap
  > const object = {
  >   a = 1,
  >   b = 2,
  >   c = 3
  > };
  >
  > #property : key
  > #object[property] : object inside key
  >
  > for (const [property] in [object]){
  >   console.log("${property}:${object[property]}");
  > }
  >
  > Expected Output : a:1, b:2, c:3
  > ```

- **&& and || Operator**
- useful for ==checking null objects== before accessing their attributes.

  > ```
  > var name = 0 && 0.getName()
  > ```

- `OR` for caching value

  > ```
  > var name = cachedName || (cachedName = getName());
  > ```

- ==ternary operator== for conditional expression.

  > ```
  > var allowed = (age > 18)? 'yes' : 'no' ;
  > ```

- **Switch Statement**

  > ```
  > switch (action){
  >     case 'draw':
  >         drawIt();
  >     break;
  >     case 'eat':
  >         eatIt();
  >     break;
  >     default:
  >         doNothing();
  > }
  > ```

- **Object**
- simple collections of ==name-variable pairs==

  1. Create an ==empty Object==.

     > ```
     > var obj = new Object();
     > var obj = {};
     > ```

  2. Object Literal Syntax care of ==JSON format==.

     > ```
     > var obj = {
     >   name : 'Carrot',
     >     _for : 'Max',
     >    details:{
     >      color:'Orange',
     >        size:12
     >     }
     > };
     > ```

  3. Attributes access can be ==chained==.

     > ```
     > obj.details.color => Orange
     > obj['details']['size'] => 12
     > ```

  4. Create an ==object Prototype==(Person) & ==Instance== of that prototype (You)

     > ```
     > # Object
     > function Person (name,age){
     >   this.name = name;
     >   this.age = age;
     > }
     > # Instance
     > var you = new Person ("You",24)
     > ```

  5. An object can be ==accessed again==.

     > ```
     > #Example 1
     > obj.name = 'Simon';
     > var name = obj.name;
     >
     > #Example 2
     > obj['name'] = 'Simon';
     > var name = obj['name'];
     > ```

- can use a ==variable to define== a key

  > ```
  > # Store key inside var user
  > var user = prompt('What is your key?')
  >
  > # Inside this key what value you want to store inside it
  > obj [user] = prompt('What is your value?)
  > ```

## Arrays

- magic property called `length`

  > ```
  > var a = new Array(); #Create new length
  > a[0] = 'dog';
  > a[1] = 'cat';
  > a[2] = 'hen';
  > a.length # show length = 3
  > ```
  >
  > **OR**
  >
  > ```
  > var a = ['dog','cat','hen']
  > a[100] = 'fox';
  > a.length; # show length = 101
  > ```

- ==query non-existent== array index

  > ```
  > typeof a[90] #undefined
  > ```

- ==iterate over an array== using `for` loop

  > ```
  > for (var i = 0; i < a.length; i++) #It will loop all the array
  > ```
  >
  > **OR**
  >
  > ```
  > for (const currentValue of a) # Put in 1 by 1
  > ```

- Another way of iterate over array elements `forEach()`

  > ```
  > ['dog','cat','hen'].forEach(function(currentValue,index,array){
  >   console.log(currentValue); #Show 1 by 1
  > })
  > ```

- forEach(`currentValue`,`index`,`array`)

  - currentValue : current array value
  - index : current index value
  - array : show all content inside array

- append an new item

  > ```
  > a.push(item);
  > ```

- method of array
  > ```
  > 1. a.toString() : return a string
  > 2. a.toLocaleString() : return a string
  > 3. a.concat(item1[....,item2]) : return a new array with item
  > 4. a.join(sep) : convert array to string and delimited with param seperator
  > 5. a.pop : remove last item
  > 6. a.push(item1,...,itemN) : append item to end of array
  > 7. a.shift : remove 1st item
  > 8. a.unshift(item1,....,itemN) : append item to 1st of array
  > 9. a.slice(start[,end]) : return a sub array
  > 10. a.sort([cmpfn]) : takes an optional comparison function and sort
  > 11. a.splice : modify certian part and put new items
  > 12. a.reverse : reverse the array
  > ```

## Functions

> ```
> function add (x,y){
>   const total = x + y;
>   return total;
> }
>
> add() #Show undefined
> add(1,2) #3
> ```

- function have access to an ==additional variable== inside their body called `[arguments]`
- a function ==take as many as you want==

  > ```
  > #Example
  > function add(){
  >   let sum = 0;
  >   for (const item of arguments){ #for of loop
  >     sum += item;
  >   }
  >   return sum;
  > }
  > a
  > add(2,3,4,5,6) #take as many variables as I want
  > ```

- Rest parameter Syntax
- `...variable` and it will include within that ==variable the entire list\*\* of uncaptured arguments==.

  > ```
  > function avg(...args){
  >   let sum = 0;
  >   for (const item of args){
  >     sum += item;
  >   }
  >   return sum/args.length;
  >
  > avg(2,3,4,5); #3.5
  > }
  > ```

- Find the average of an array.

  > ```
  > avg ([2,3,4,5]) # => 3.5
  > ```

- apply() method of any function object

  > ```
  > avg.apply(null,[2,3,4,5]); #3.5
  > ```

- is a ==well prepared syntax== for javascript.

- Anonymous Functions **(Arrow Function)**

  > ```
  > const avg = function(){};
  > ```

- Recursive Functions
  - allow you to call function recursively.

## Custom Object

1. Before
   > ```
   > function makePerson (first,last){
   >   return{
   >     first: first,
   >     last: last,
   >     fullName: function(){
   >       return this.first + '' + this.last;
   >     };
   >   };
   > };
   >
   > const s = makePerson('Simon','Lim')
   > s.fullName #Simon Lim
   > ```

- use `this.〇〇` to improve function readability.
- above will keep create ==2 new objects(first,last)==.

2. After **(Final)** : Prototype

   > ```
   > function Person(first,last){
   >   this.first = first;
   >   this.last = last;
   > }
   >
   > Person.prototype.fullName = function(){
   >   return this.first + " " + this.last;
   > };
   > ```

- `Person.prototype` is an object shared by all instance of person can add extra methods to existing objects.就是可以一直換而不是做新的 object 出來。

- Example:

  > ```
  > p1
  > > x
  > > y
  > > prototype
  >
  > p2
  > > x
  > > y
  > > prototype
  >
  > Particle.prototype (p1 and p2 prototype will direct to this)
  > > show()
  > > _proto_
  > > > Object.prototype
  > > > > hasOwnProperty()
  >
  > p.hasOwnProperty('x'); #True : belong to p1 and p2
  > p.hasOwnProperty('show'); #False : belong to Prototype
  > ```

- 簡單來講就是一個 function() for 動作

## Closure

- Closure is like ==function use in React==.
- It is call as ==Data Encapsulation==.
- More memory, More computation.
- Heap Memory = Long Lived
- It act as an API (Function Factories)

  > ```
  > #Example1
  > for (var i = 0; i < 3; i++){
  >
  > →var will show in global
  > -----------closure--------------
  >   const log = () => {
  >     console.log(i);
  >   }
  > ----close over the variable-----
  >
  >   setTimeout(log,100)
  > }
  > ```

   <table>
   <th></th><th>Call Stack (No Closure)</th><th>Heap Memory (Closure)</th>
   <tr><td><strong>Type</strong></td><td>let</td><td>var</td></tr>
  <tr><td><strong>Result</strong></td><td>show 1,2,3</td><td>show 3,3,3</td></tr>
   <tr><td><strong>Reason</strong></td><td>let is a block scope so will show in 0,1,2</td><td>var is a global scope so will show 3,3,3 which is the result</td></tr>
   </table>

- Lexical Environment
  - Context when function was defined ==(做 function 的地方)==

> ```
> #Another Example for Closure like api a.k.a Self Contained
>
> function outer() {
>   let state = "rabbit"
>  a
>   function inner() {
>     return `Hello ${state}`;
>   }
>   return inner;
> }
> ```

- above code show that inner can access state ":rabbit:" but the outer part cannot access to inner, so at the last part of `return inner` will fail.

## Array Map

- Array.prototype.map()

  - Create a ==new Array[ ]==, by calling a ==function== on each element in a ==different Array[ ]==.
    > ```
    > #Concept
    > ['a','b','c'].map(fun)
    >   return a,b,c
    > ```

- Before (imperative programming: use statement to mutate state)

> ```
> #object
> const users = [
>   {name : 'A'},
>   {name : 'B'},
>   {name : 'C'},
> ];
>
> const usernames =[ ];
> for (const user of users){
>   usernames.push(user.name)
> }
>
> Output : usernames['A','B','C']
> ```

- After (declarative: use functions to describe state)

> ```
> #object
> const users = [
>   {name : 'A'},
>   {name : 'B'},
>   {name : 'C'},
> ];
>
> const usernames = users.map(user => user.name);
> usernames ['A','B','C']
> ```

React.js

> ```
> const ui = users.map(user =>
>   <h1>
>     {user.username}
>   </h1>
> )
> ```

- if you want planning for a ==new array then use map==.
- if not, ==loop==.

- Step

1. install node.js (newest version)
2. npx create-react [title]

   - Create React App will not settle about backend logic.
   - Build a frontend pipeline.

3. Delete file inside `/src : rm -f *`
4. Create React File `index.js` `index.css`
   > ```
   > Import React from 'react';
   > Import ReactDom from 'react-dom';
   > Import 'cssfile';
   > ```
5. npm start

- a declarative, efficient & flexible JS library for building UI.

  <table><th><strong><p style="text-align: center;">UI</style></strong></th>
  <tr><td>Components</td></tr><tr><td>Components</td></tr><tr><td>Components</td></tr>
  </table>

- React.Component subclasses

> ```
> class ShoppingList extends React.Component {
>   render(){
>     return {}
>       <div className="shopping-list">
>         <h1>Shopping list for {this.props.name}</h1>
>         <ul>
>           <li>Instagram</li>
>           <li>WhatsApp</li>
>           <li>Oculus</li>
>         </ul>
>       </div>
>      };
>   }
> }
> ```

## JavaScript `bind()`

- To set the value of a function `this` regardless of how it called.
- reference of an object

> ```
> var foo = {
>   x = 3
> }
>
> var bar = function() {
>   console.log(this.x);
> }
>
> bar(); #undefined
> var boundFunc = bar.bind(foo);
> boundFunc(); #Output = 3
> ```

- `this` set to `foo` 不是 `bind` 進去隨時`function` 合成為新的 `function`.
- refer to a `method` without ( )`onClick = this.handleClick`
- 看前面的`constructor`部分

- Way other then bind(), 2 ways

1. `handleClick( )`

    > ```
    > handleClick = () => {
    >   console.log('this is',this) # 寫在method裡面的function
    > }
    > ```

2. `render()`

    > ```
    > render(){
    >   return(
    >     <button onClick= { () => this.handleClick() })>
    >       Click Me!
    >     </button>    
    > }
    > ```
