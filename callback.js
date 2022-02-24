// first class citizen: enable to be a variable, enable to be a return value of a function 
// 함수가 다른 함수에 input 값으로 들어가서 호출이 된다. -> callback 함수다. 

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

function myfilter(origin, callback){
    var result = [];
    for( var i = 0; i < origin.length; i++){
        var current = origin[i];
        if(callback(current)){
            result.push(current);
        }
    }
    return result;
}

// newWords = words.filter( element=>element.length > 6);
newWords = myfilter(words, element=>element.length > 6);
console.log(newWords);