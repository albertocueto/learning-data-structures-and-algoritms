import math

numList = [0, 1, 1, 2, 3, 5, 8, 13, 21]

print(numList)

min = 0
max = 0

for value in numList:
    if value < min:
        min = value
    if value > max:
        max = value

print('min: {}, max: {}'.format(min, max))

total = 0

for value in numList:
    total += value;

print('total: {}'.format(total))

average = total / len(numList)

print('average: {}'.format(average))

variance = 0

for value in numList:
    variance += math.pow(value - average, 2)

variance /= len(numList)

print('variance: {}'.format(variance))

stanDev = math.sqrt(variance)

print('standard deviation: {}'.format(stanDev))
