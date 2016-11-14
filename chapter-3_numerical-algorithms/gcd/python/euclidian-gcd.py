def gcd(a, b):
    while b != 0:
        remainder = a % b
        a = b
        b = remainder
    return a

print(gcd(25, 75))
print(gcd(78, 66))
print(gcd(1500, 32589))
print(gcd(56789, 12344567))
