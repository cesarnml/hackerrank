import math

def polysum(n, s):
    area = (0.25*n*s**2)/math.tan(math.pi/n)
    perimeter = (n*s)**2
    return area + perimeter
    