#!/usr/bin/python3
# alphabet = ""

# for ascii_value in range(ord('a'), ord('z') + 1):
#     char = chr(ascii_value)
#     alphabet += char

# output = "{}".format(alphabet)
# print(output)

for character in range(97, 123):
    print("{:c}".format(character), end='')