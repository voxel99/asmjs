var Module = require('./a.out.js');
var w = 4;
var h = 4;
var c = 3;
var size = w*h*c;
var p1 = new ArrayBuffer(size);
var p2 = new Uint8Array(p1);
var p3 = new Uint8Array(p1);
console.log(p2.length);
for(var i = 0; i <p2.length; i++){
p2[i] = i;
}
for(var i = 0; i <p2.length/3; i++){
p2[i*3] = 255;
//console.log(p3[i]);
}
var buf = Module._malloc(size);

var heapBytes= new Uint8Array(Module.HEAPU8.buffer, buf, size);
        
        // copy data into heapBytes
        heapBytes.set(new Uint8Array(p2.buffer));


//Module.HEAPU8.set(p2,buf);

var p3 = Module.ccall('proc', 'number', ['number'],[buf,w,h,c]);

  var heapFloats= new Uint8Array(Module.HEAPU8.buffer, buf, size);
console.log( p3);

for(var i = 0; i <p2.length; i++){
console.log(heapFloats[i]);
}



Module._free(buf);

