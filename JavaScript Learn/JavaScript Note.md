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
- Apparent Integer : **float**
- Math : **Build in Object**
  - Provide Advanced Math Function
- parseInt() : **String => Integer**

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

- let : declare **block level** variables
- const : value **never intended** to change
- var : does not have **restriction**
- undefined : declare variable **without value**

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
- useful for **checking null objects** before accessing their attributes.

  > ```
  > var name = 0 && 0.getName()
  > ```

- `OR` for caching value

  > ```
  > var name = cachedName || (cachedName = getName());
  > ```

- **ternary operator** for conditional expression.

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
- simple collections of **name-variable pairs**

  1. Create an **empty Object**.

     > ```
     > var obj = new Object();
     > var obj = {};
     > ```

  2. Object Literal Syntax care of **JSON format**.

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

  3. Attributes access can be **chained**.

     > ```
     > obj.details.color => Orange
     > obj['details']['size'] => 12
     > ```

  4. Create an **object Prototype** (Person) & **Instance** of that prototype (You)

     > ```
     > # Object
     > function Person (name,age){
     >   this.name = name;
     >   this.age = age;
     > }
     > # Instance
     > var you = new Person ("You",24)
     > ```

  5. An object can be **accessed again**.

     > ```
     > #Example 1
     > obj.name = 'Simon';
     > var name = obj.name;
     >
     > #Example 2
     > obj['name'] = 'Simon';
     > var name = obj['name'];
     > ```

- can use a **variable to define** a key

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

- **query non-existent** array index

  > ```
  > typeof a[90] #undefined
  > ```

- **iterate over an array** using `for` loop

  > ```
  > for (var i = 0; i < a.length; i++) #It will loop all the array
  > ```

  **OR**

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
> 1. a.toString()
> 2. a.toLocaleString()
> 3. a.concat(item1[....,item2])
> 4. a.join(sep)
> 5. a.pop
> 6. a.push

```
