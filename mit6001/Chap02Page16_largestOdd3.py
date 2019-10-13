"""
Largest odd number among three variables
"""

import math
inputs = [int(x)
          for x in input('Enter 3 integers, space-seprated:\n').split()]
max_odd = -math.inf

for num in inputs:
    if num % 2 != 0 and num >= max_odd:
        max_odd = num
if (max_odd != -math.inf):
    print(max_odd)
else:
    print("No odd number found.")
