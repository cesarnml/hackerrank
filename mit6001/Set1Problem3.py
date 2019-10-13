"""
Assume s is a string of lower case characters.

Write a program that prints the longest substring of s in which
the letters occur in alphabetical order.
For example, if s = 'azcbobobegghakl', then your program should print

Longest substring in alphabetical order is: beggh
In the case of ties, print the first substring.
For example, if s = 'abcbcd', then your program should print

Longest substring in alphabetical order is: abc
Note: This problem may be challenging. We encourage you to work smart.
If you've spent more than a few hours on this problem,
we suggest that you move on to a different part of the course.
If you have time, come back to this problem
after you've had a break and cleared your head
"""
s = input("Prove a lower case string:\n")

max_string = ''
for i in range(len(s)):
    j = i
    count = 0
    string = s[j]
    while j <= len(s) - 2 and s[j] <= s[j+1]:
        string += s[j+1]
        count += 1
        j += 1
    if len(string) > len(max_string):
        max_string = string
print("Longest substring in alphabetical order is: " + max_string)
