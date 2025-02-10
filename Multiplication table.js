function multiplicationTable(size) {
  let array=[]
//   let rows=size;
//   let cols=size;
//   let array=Array.from({length:rows},() =>new Array(cols).fill(0));
  for(let i=0;i<=size-1;i++){
    array[i]=[]
    for(let y=0;y<=size-1;y++){
      array[i][y] = (i + 1) * (y + 1);
    }
  }
    return array

  }
