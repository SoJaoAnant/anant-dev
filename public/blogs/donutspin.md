# How to make a Donut Spin in your CMD Shell
---
## How a viewer sees an object in 3D space through a screen

say the screen is z' units away from the viewer and the object is z units away
if the object's position is (x,y) then the viewer would see the object at (x',y')

![Projection Diagram](/blogs/projection_diagram.png)

by applying mafs and the similarity of the triangles we can say that,

y' = z'y/z
x' = z'x/z

because z' will always be constant, thus we can assign it a constant name K1

thus (x',y') = (K1x/z, K1y/z)

Z-Buffer, stores the z-coordinate so every point is plotted on the same depth.
1/z = 0 means infinity 

for the torus (aka the donut) it is simply a 2D circle rotated around the center axis of the torus 
the circle in question is a circle or radius r1 with the center (r2,0,0)
thus coordinates of the circle is:
(x,y,z) = (r2 + r1cosA, r1sinA, 0)
where A is a sweeping angle with values 0 to 2pi.

to make it rotate around the 3-axis, we can multiply the coordinates of the circle with one of the following rotation matrix depending on the axis of rotation.
![my image](/blogs/rotation_matrix.png)

we can introduce another constant K2 which would decide the distance of the donut from the viewer.

a recap, 
K1 -> field of view of the donut 
K2 -> distance of donut from the user

thus a revised coordinates of the projection coordinates,

(x', y') = (K1x/(K2 + z), K1y/(K2 + z))

## illumination 
to calculate which point of the donut illuminates how much, we may need to know its surface normal (aka a perpendicular angle from the surface of the point), then we can take the dot product of the surface normal and our arbitary light direction and that can tell us in magnitude how much a point shines :) 

If the dot product (say D),
D > 0, then the point is facing the light.
if D < 0, then the point is facing away from the light.
higher the value the more intense it is.

## Surface Normal
I cannot really grasp this logic but our surface normal is the coordinate where our specific point is in the 3D space. 
so the surface normal for all coordinates in our torus is,
(Nx, Ny, Nz) = (r2 + r1cosA, r1sinA, 0) x Rx x Ry x Rz

## Dot Product
we will be putting the illuminating lighting of our space at the coordinate (0,1,-1) which is above and behind the viewer.
thus the illumination at any point will be,

D = (Nx, Ny, Nz) . (0,1-1)

## The Code
Go on, save this in your cpp file and run this in your CMD shell hehe :p
to run on your command shell:
- open a CMD shell whereever your donut code is
- type : g++ donut.cpp -o donut.exe
- type : donut.exe
- viola! your donut will be spinning now! :D

---
```
#include <iostream>
#include <cmath>
#include <cstring>
#include <windows.h>

using namespace std;

int main()
{
    float A = 0, B = 0;
    float i, j;
    int k;

    float z[1760];
    char b[1760];

    while (true)
    {
        system("cls");

        memset(b, 32, 1760);
        memset(z, 0, 7040);

        for (j = 0; j < 6.28; j += 0.07)
        {
            for (i = 0; i < 6.28; i += 0.02)
            {

                float c = sin(i);
                float d = cos(j);
                float e = sin(A);
                float f = sin(j);
                float g = cos(A);
                float h = d + 2;
                float D = 1 / (c * h * e + f * g + 5);
                float l = cos(i);
                float m = cos(B);
                float n = sin(B);
                float t = c * h * g - f * e;

                int x = 40 + 30 * D * (l * h * m - t * n);
                int y = 12 + 15 * D * (l * h * n + t * m);
                int o = x + 80 * y;

                int N = 8 * ((f * e - c * d * g) * m - c * d * e - f * g - l * d * n);

                if (y < 22 && y >= 0 && x >= 0 && x < 80 && D > z[o])
                {
                    z[o] = D;
                    b[o] = ".,-~:;=!*#$@"[max(0, N)];
                }
            }
        }

        for (k = 0; k < 1760; k++)
        {
            cout << (k % 80 ? b[k] : '\n');
        }

        A += 0.04;
        B += 0.02;

        Sleep(30);
    }

    return 0;
}
```