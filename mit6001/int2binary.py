"""
Convert a positive integer number to binary
"""

num = int(input("Input a positive integer:\n"))
binary = ''

if num == 0:
    binary = '0'

while num != 0:
    bit = num % 2
    num = num // 2
    binary = str(bit) + binary

print("The input in binary is: " + binary)
