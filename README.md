# tags.js
A lightweight JavaScript library used for popping javascript into your html.
Here is how you can use tags:
first, import it. 
```
<script src = 'https://cdn.jsdelivr.net/gh/hermanboxcar5/tags.js/tags.js'>
```
Now, create a script:
```
<script>

</script>
```
You can also link it to another file:
```
<script src="script.js"></script>
```
## How to use a code snippet in HTML
## Javascript Variables
In your script (in the tag or external file), make a variable. 
```
let myvar = 'hello world'
```
Then, in your HTML, add a tag. 
```
<p></p>
```
Inside, you will put a snippet tag:
```
<p>#(())</p>
```
put the name of your variable inside. 
```
<p>#((myvar))</p>
```
** Note: ** only 
your `p` element should now contain `hello world` as its content. 
## Expressions
You can put any JS expressions, such as `5+5`, or `'hello' + ' ' + 'world'` inside. You can combine variables. 

