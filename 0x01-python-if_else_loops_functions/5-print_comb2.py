#!/usr/bin/python3

for number in range(100):
    print("{:02}{}".format(number, ", " if number!= 99 else ""), end="\n" if number == 99 else "")
