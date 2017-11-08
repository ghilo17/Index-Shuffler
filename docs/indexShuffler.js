/*============================
Script Name: Index Shuffler
Author: Gimel C. Contillo
Version: 1.0
Shuffle Array (Randomize without repetition)

methodName -> generateShuffleIndexes()
paramameters -> 
                numberOfIndexes - how many numbers to be shuffled starting from 0
==============================*/

function generateShuffleIndexes(numberOfIndexes){
	var randomIndexes = new Array();

//Initialize the first value of the array
randomIndexes[0] = Math.floor((Math.random() * numberOfIndexes));

//check if the random array holder has size
if (randomIndexes.length > 0) {
	//start to shuffle the array
	var j = 0;
	while(j <= numberOfIndexes - 1){
		var index_exist = false;
		var generated_index = Math.floor((Math.random() * numberOfIndexes));

		for(var i = 0; i <= randomIndexes.length - 1; i++){
			if(randomIndexes[i] == generated_index){
				index_exist = true;
				break;
			}
		}
		if(!index_exist){
			randomIndexes[j] = generated_index;
			j++;
		}
	}
}
return randomIndexes;
}

function ShuffleArray(array){
	var shuffleIndexes = generateShuffleIndexes(array.length);	
	var shuffledArray = new Array();
	for(var i = 0; i <= array.length - 1; i++){
		shuffledArray[i] = array[shuffleIndexes[i]];
	}
	return shuffledArray;
}

