#include <stdio.h>
#include <math.h>

extern "C" {

int int_sqrt(int x) {
printf("This is a c function calling from js!");
  return sqrt(x);
}

int add(int x, int y) {

  return x+y;
}

int proc(unsigned char *y, int w, int h, int c) {
for(int i = 0;i<h;i++){
	for(int j = 0;j<w;j++){
int r = *(y + i*w*c + j*c + 0);
int g = *(y + i*w*c + j*c + 1);
int b = *(y + i*w*c + j*c + 2);
int nr;
if((r>1.8*g) && (r>b) && (b>10) && (r>40)){
 nr = (g>>1) + (b>>1);
}else{
 nr = r;
}


*(y + i*w*c + j*c + 0)=(unsigned char)nr;//r
*(y + i*w*c + j*c + 1)=(unsigned char)g;//g
*(y + i*w*c + j*c + 2)=(unsigned char)b;//b
}
}

  return w*h*c;
}

}

