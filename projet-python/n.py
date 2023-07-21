import turtle as t
import colorsys
t.bgcolor('pink')
h: float =0.8
t.pensize(4)
t.tracer(50)
t.speed(100000)

for i in range(310):
    c: tuple[float, float, float] =colorsys.hsv_to_rgb(h,1,1)
    h +=0.005
    t.color(c)
    t.bgcolor('yellow')
    for j in range(5):
        t.forward(i)
        t.bgcolor('black')
        t.left(90)
        t.right(10)
    t.right(30)
    t.left(50)
    t.bgcolor('white')
    t.circle(1)
    t.bgcolor('green')
    
t.done()