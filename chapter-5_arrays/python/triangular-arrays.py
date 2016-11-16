import math

arrCities = []

arrCities.append([0, 790, 1745, 1852])
arrCities.append([790, 0, 2776, 2564])
arrCities.append([1745, 2776, 0, 381])
arrCities.append([1852, 2564, 381, 0])

print(arrCities)

triangularArraySize = math.fabs(((len(arrCities) * (len(arrCities) - 1))/2))
count = 0
triangularArray = []
while count < triangularArraySize:
    triangularArray.append(None)
    count += 1

print('The size of the triangular array will be {}'.format(len(triangularArray)))
print(triangularArray)

for i, item in enumerate(arrCities):
    for j, item2 in enumerate(item):
        if i < j:
            index = int(((j*(j-1))/2) + i)
            triangularArray[index] = item2

print(triangularArray)
