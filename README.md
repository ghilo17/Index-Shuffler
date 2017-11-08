<div align="center">
  <h1 align="center">Index-Shuffler</h1>
  <a align="center" href="http://javascript.com"><img src="https://www.javascript.com/images/favicon.ico"/></a>
	<br/>
  <img align="center" src="https://img.shields.io/npm/l/express.svg"/>
</div>

# Installation

<ol>
	<li>Download or Clone this repository</li>
	<li>Import the js file to your site</li>
</ol>

```
<script src="indexShuffler.js"></script>	
```

# How to Use?

The method:
```
function generateShuffleIndexes(numberOfIndexes){
	var randomIndexes = new Array();

//Initialize the first value of the array
randomIndexes[0] = Math.floor((Math.random() * numberOfIndexes));

....
}

function ShuffleArray(array){
	var shuffleIndexes = generateShuffleIndexes(array.length);	
	var shuffledArray = new Array();
	for(var i = 0; i <= array.length - 1; i++){
		shuffledArray[i] = array[shuffleIndexes[i]];
	}
	return shuffledArray;
}
```

Implementation:

<h4>If you only want to gain shuffled indexes</h4>

```
console.log(generateShuffleIndexes(20));
```

Possible Output:
```
0:2
1:15
2:17
3:6
4:1
5:10
6:9
7:11
8:13
9:19
10:18
11:14
12:4
13:5
14:12
15:16
16:8
17:7
18:0
19:3
```

<h4>If you want to output the shuffled array</h4>

```
var myArray = ["Array1", "Array2", "Array3", "Array4", "Array5"];
console.log(ShuffleArray(myArray));
```

Possible Output:
```
0:"Array2"
1:"Array1"
2:"Array4"
3:"Array5"
4:"Array3"
```

<h2>Check this <a href="https://ghilo17.github.io/Index-Shuffler/">DEMO</a></h2>
Return an array of integers as shuffled starting from 0, to be used as indexes as an alternative of Collections.shuffle() which is not supported by JS
