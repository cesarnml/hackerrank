"""
Assume s is a string of lower case characters.

Write a program that prints the number of times the string 'bob' occurs in s.
For example, if s = 'azcbobobegghakl', then your program should print
"""

s = input("Prove a lower case string")

count = 0

for i in range(len(s)):
    if s[i:i+3] == 'bob':
        count += 1
print("Number of times bob occurs is: " + str(count))
