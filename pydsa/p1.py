# //write a function that search for an element in an array and return the index value if the element is not present then return -1
def findElement(arr,x):
    for i in range(len(arr)):
        if arr[i] == x:
            return i
    return -1
arr=[2,6,8,4,9,3]
print(findElement(arr,2))