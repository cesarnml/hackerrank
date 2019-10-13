"""
Convert positive decimal to binary
"""


def int2binary(num):
    result = ''
    if num == 0:
        result = '0'
    while num > 0:
        result = str(num % 2) + result
        num = num // 2
    return result


num = float(input("Input a positive decimal:\n"))

result = ''
integer = int(num)
decimal = num - int(num)
p = 0

while ((decimal * 2**p) % 1 != 0):
    print('Remainder = ' + str((decimal * 2**p) - int((decimal * 2**p))))
    p += 1

print("p is: " + str(p))
num2 = int(decimal * 2 ** p)
part1 = int2binary(integer)
part2 = int2binary(num2)

print(part1 + "." + "0" * (p - len(part2)) + part2)
