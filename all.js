var soundpack = [];
var soundpack_index = [1,1.5,2,2.5,3,3.5,4,4.5,5,5.5,6,6.5,7,8,8.5,9,9.5,10,11,11.5,12,12.5,13,13.5,14,15];

for(var i=0;i<soundpack_index.length;i++){
  console.log(i);
  soundpack.push({
    number: soundpack_index[i],
    url:`https://awiclass.monoame.com/pianosound/set/${soundpack_index[i]}.wav`
  })
}


var vm = new Vue({
  el: "#app",
  data:{
    sounddata : soundpack,
  }
  
})