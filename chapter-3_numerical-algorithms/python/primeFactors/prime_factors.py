import math

def primeFactors(x):
    factors = []
    while((x % 2) == 0):
        factors.append(2)
        x /= 2
    factor = 3
    stopAt = math.sqrt(x)
    while((x % factor) == 0):
        factors.append(factor)
        x /= factor
        stopAt = math.sqrt(x)
    factor += 2
    if(x > 1):
        factors.append(x)
    return factors, x
