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
	```
	<script src="indexShuffler.js"></script>
	```
</ol>

# How to Use?

The method:
```
function generateShuffleIndexes(numberOfIndexes){
	var randomIndexes = new Array();

//Initialize the first value of the array
randomIndexes[0] = Math.floor((Math.random() * numberOfIndexes));

....
}
```

Implementation:

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

Return an array of integers as shuffled starting from 0, to be used as indexes as an alternative of Collections.shuffle() which is not supported by JS
