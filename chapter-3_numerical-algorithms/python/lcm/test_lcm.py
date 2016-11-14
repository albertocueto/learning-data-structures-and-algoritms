import sys
sys.path.insert(0, '../gcd/')

from lcm import lcm
from euclidian_gcd import gcd

print(gcd(25, 75))
print(lcm(25, 75))

print(gcd(78, 66))
print(lcm(78, 66))

print(gcd(1500, 32589))
print(lcm(1500, 32589))

print(gcd(56789, 12344567))
print(lcm(56789, 12344567))

print(gcd(12, 15))
print(lcm(12, 15))
