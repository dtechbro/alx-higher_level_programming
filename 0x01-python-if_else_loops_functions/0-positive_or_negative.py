#!/usr/bin/python3

import random
number = random.randint(-10, 10)

print(number)

if number > 0:
    positive = " is positive"
elif number == 0:
    zero = " is zero"
else:
    negative = " is negative"

print(number + positive)
print(number + zero)
print(number + negative)
