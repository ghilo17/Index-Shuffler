<div style="text-align: center;">
  <h1>Index-Shuffler</h1>
  <a href="http://javascript.com"><img src="https://www.javascript.com/images/pages/shared/logo.svg"/></a>
  <img src="https://img.shields.io/npm/l/express.svg"/>
</div>

# Installation

```
function generateShuffleIndexes(numberOfIndexes){
	var randomIndexes = new Array();

//Initialize the first value of the array
randomIndexes[0] = Math.floor((Math.random() * numberOfIndexes));

....
}
```

Return an array of integers as shuffled starting from 0, to be used as indexes as an alternative of Collections.shuffle() which is not supported by JS
