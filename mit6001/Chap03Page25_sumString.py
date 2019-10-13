"""
Let s be a string that contains a sequence of decimal numbers
separated by commas, e.g., s= "1.23, 2.4, 3.123". Write a program that prints
the sum of the numbers in s.
"""

inputs = [float(x) for x in input(
    "Enter a comma-separated sequence of numbers:\n").split(',')]

total = 0
for num in inputs:
    total += num
print(total)
