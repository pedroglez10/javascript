Given an array of integers, determine the number of pairs where divisible by k.

example
arr = [1, 2, 3, 4, 5, 6]
k = 5

Three pairs meet the criteria:
(arr[0], arr[3]) --> 1 + 4 = 5 % 5 --> is divisible
(arr[1], arr[2]) --> 2 + 3 = 5 % 5 --> is divisible
(arr[3], arr[5]) --> 4 + 6 = 10 % 5 --> is divisible