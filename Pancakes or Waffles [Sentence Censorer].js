function censor(sentence) {
    function asterics(n){
        
    }
  let array=sentence.split(' ');
  for(let i in array){
    if(array[i]==='pancakes' || array[i]==='flapjacks' || array[i]==='slapjacks'||array[i]==='hotcakes'){
      let wordLength=array[i].length
       array[i]='*'.repeat(wordLength)}
      if( array[i]==='waffles'|| array[i]==='crepes'||array[i]==='blintzes'){
        array[i]=`**${array[i]}**`
    }
    if(array[i]==='syrup'||array[i]==='honey'|| array[i]==='jam'|| array[i]==='butter'||array[i]==='chocolate'||array[i]==='margarine'){
            //   array[i]=`**${array[i]}**`
                  let worldLength=array[i].length
                  array[i]='*'.repeat(worldLength)

    }
  }
  return array.join(' ')
}
