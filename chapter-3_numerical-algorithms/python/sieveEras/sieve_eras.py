def sieveEras(a, b):
    numList = list(range(a, b+1))
    #print(numList)

    firstTwoIndex = None
    count = 0
    while firstTwoIndex is None:
        currentNumber = numList[count]
        if (currentNumber != 2) and ((currentNumber % 2) == 0):
            firstTwoIndex = count
            numList[count] = None
        count += 1
    #print(numList)

    count = firstTwoIndex + 2
    while count < len(numList):
        numList[count] = None
        count += 2

    if numList[0] == 1:
        numList[0] = None
    #   print(numList)

    count = firstTwoIndex + 1
    while count < len(numList):
        #print(numList[count])
        if not numList[count] is None:
            if is_prime(numList[count]):
                #print(numList[count])
                multiple = numList[count] * numList[count]
                while multiple <= len(numList):
                    #print(multiple)
                    numList[multiple] = None
                    multiple += 2 * count
            else:
                #print(numList[count])
                numList[count] = None
        count += 1

    result = []
    count = 0
    while count < len(numList):
        if not (numList[count] is None):
            result.append(numList[count])
        count += 1
    print('Eratosthenes found {} prime numbers between {} and {}'.format(len(result), a, b));
    return (result)


def is_prime(n):
    if n == 2 or n == 3: return True
    if n < 2 or n%2 == 0: return False
    if n < 9: return True
    if n%3 == 0: return False
    r = int(n**0.5)
    f = 5
    while f <= r:
        if n%f == 0: return False
        if n%(f+2) == 0: return False
        f +=6
    return True
