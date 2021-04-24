![questions-banner](https://user-images.githubusercontent.com/16836599/49394245-5e3ce800-f759-11e8-9a88-a4853a998d67.png)

1. Selecting odd numbers - Given a list of numbers, select the ones that are odd.
[1,2,3,4,5,3] => [1,3,5,3]

2. Selecting even numbers - Given a list of numbers, select the ones that are even.
[1,2,3,4,5,3] => [2,4]

3. Sum of a list of numbers - Given a list of numbers, find the sum of all these numbers.
[1,2,3,4,5,3] => 18

4. Printing reverse - Given a list of numbers, PRINT the list in reverse order.
[1,2,3,4,5,3] => [3,5,4,3,2,1]

5. Selecting every second element - Given a list of numbers, select every second one.
[1,2,5,-1,2,4,3,1] => [1,5,2,3]

6. Reverse Fibonacci - Generate a fibonacci sequence of length n in reverse order.
fiboReverse(8) => [13,8,5,3,2,1,1,0]

7. Greatest number in a list - Given a list of numbers, find the greatest number in that sequence.
[1,26,3,5] => 26

8. Lowest number in a list - Given a list of numbers, find the lowest number in that sequence.
[26,3,1,5] => 1

9. Average of a list - Given a list of numbers, find the average of that list.
[1,2,3,4,5,3] => 3

10. Mapping lengths - Given a list of names, generate another array that contains the length of 
each of the names.
["mary","had","a","little","lamb"] => [4, 3, 1, 6, 4]

11. Counting odd numbers - Write a function to count how many odd numbers are present in an array.
[1,2,3,4,5,3] => 4

12. Counting even numbers - Write a function to count how many even numbers are present in an array.
[1,2,3,4,5,3] => 2

13. Count how many numbers above a certain threshold in an array.
([1,2,3,4,5,3],3) => 2

14. Count how many numbers below a certain threshold in an array.
([1,2,3,4,5,3],4) => 3

15. Reversing an Array - Given an array, write a function that provides a reversed version of 
the same array *without* changing the contents of the original array.
[1,2,3,4,5,3] => [3,5,4,3,2,1]

16. Index of a Number - Given an array of numbers find the first position of a specified number.
([1,2,3,4,5,3],3) => 2

17. Ascending order - Given an array of numbers, check if the array is in ascending order.
[1,2,3,4,5] => true
[1,2,3,4,5,3] => false

18. Descending order - Given an array of numbers, check if the array is in descending order.
[5,4,3,2,1] => true
[3,5,4,3,2,1] => false

19. Extract digits - Given a number, extract the digits of a number into an array.
20345 => [2,0,3,4,5]

20. Unique - Given an array, remove duplicate elements and return an array of only unique elements.
[1,2,3,4,5,3] => [1,2,3,4,5]

21. Union - Given two arrays, generate a new array consisting of unique elements across both 
those arrays.
([1,2,3,4,5,3], [3,4,5,6]) => [1,2,3,4,5,6]

22. Intersection - Given two arrays, generate a new array consisting of unique elements that 
are contained in both arrays.
([1,2,3,4,5,3], [3,4,5,6]) => [3,4,5]

23. Difference - Given two arrays, generate a new array that consists of unique elements that 
are present in the first array, but not in the second.
([1,2,3,4,5,3], [3,4,5,6]) => [1,2,6]

24. isSubset - Given two arrays, check if the second is a proper subset of the first.
([1,2,3,4,5,3], [3,4,5]) => true
([1,2,3,4,5,3], [3,4,5,6]) => false

25. Zip - insert elements from two arrays as follows:
let a = [1,2,3]
let b = [4,5,6] 
zip(a,b) => [[1,4],[2,5],[3,6]]
There must be only as many elements as the shorter array.
let a = [1,2,3]
let b = [4,5,] 
zip(a,b) => [[1,4],[2,5]]

26. Rotate - creates a new array by rotating elements from the given array.
rotate([1,2,3,4,5],2) => [3,4,5,1,2]
rotate([1,2,3,4,5],4) => [5,1,2,3,4]
rotate([1,2,3,4,5],5) => [1,2,3,4,5]

27. Partition - Given an array of numbers, it returns a partitioned array consisting of 
numbers above a certain number and below a certain number.
([1,2,7,4,9,10,5],5) => [[1,2,4,5], [7,9,10]]
