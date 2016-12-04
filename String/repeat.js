String.prototype.repeat = function(repeat){
  var endString = '';
  for(var i = 0; i<repeat; i+=1){
    endString += this;
  }
  return endString;
}
