"""
Write a program that asks the user to enter an integer and
prints two integers, root and pwr, such that 0 < pwr < 6 and
root**pwr is equal to the integer entered by the user. If no
such pair of integers exists, it should print a message to that effect.
"""

target = int(input("Enter an integer:\n"))
pwrs = [5, 4, 3, 2, 1]
is_neg = False
if target < 0:
    is_neg = True

for pwr in pwrs:
    root = 0
    while abs(root**pwr) < abs(target):
        if is_neg:
            root -= 1
        else:
            root += 1
    if root**pwr == target:
        print(str(target) + " is equal to: " + str(root) + "^" + str(pwr))
        break
