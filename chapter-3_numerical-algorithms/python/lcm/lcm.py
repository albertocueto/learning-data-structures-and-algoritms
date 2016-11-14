import sys
sys.path.insert(0, '../gcd/')

from euclidian_gcd import gcd

def lcm(a, b):
    return int((a / gcd(a, b)) * b)
