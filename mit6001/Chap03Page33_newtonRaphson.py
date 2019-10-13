"""
Newton-Raphson for square root
Fix x such that x**2 - 24 is within epsilon of 0
"""

epsilon = 0.01
k = 24.0
guess = k/2.0
while abs(guess*guess - k) >= epsilon:
    guess = guess - (((guess**2) - k) / (2*guess))
print('square root of', k, 'is about', guess)
