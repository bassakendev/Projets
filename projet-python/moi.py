import turtle as t
import colorsys
t.bgcolor('black')
t.tracer(10000)
h = 0
t.pensize(3)
t.up
t.goto(-230,-230)
t.down()
t.lt(80)
t.fd(250)
for i in range(500):
    c = colorsys.hsv_to_rgb(h, 1, 1)
    h += 0.08
    t.pencolor(c)
    t.lt(i)
    t.fd(3)
    t.fd(1)
    t.write('POSEIDON',
font = ('Verdana',50,'bold'))
t.done
