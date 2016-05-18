function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  var arr1 = collection_a;
  var arr2 = collection_b;
  var arr3=[];
  for(var s in arr1){
    for(var x in arr2){
      if(arr1[s]==arr2[x]){
        arr3.push(arr1[s]);
      }
    }
  }
  return arr3;
}

module.exports = collect_same_elements;
