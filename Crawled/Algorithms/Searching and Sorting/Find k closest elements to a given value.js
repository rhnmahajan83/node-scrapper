Minimizing the number of writes is useful when making writes to some huge data set is very expensive, such as with EEPROMs or Flash memory, where each write reduces the lifespan of the memory.Among the sorting algorithms that we generally study in our data structure and algorithm courses,  Selection Sort makes least number of writes (it makes O(n) swaps).   But, Cycle Sort almost always makes less number of writes compared to Selection Sort.  In Cycle Sort, each value is either written zero times, if it’s already in its correct  position, or written one time to its correct position. This matches the  minimal number of overwrites required for a completed in-place sort.Sources:
http://en.wikipedia.org/wiki/Cycle_sort
http://en.wikipedia.org/wiki/Selection_sortPlease write comments if you find anything incorrect, or you want to share more information about the topic discussed above.The selection sort algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) from unsorted part and putting it at the beginning. The algorithm maintains two subarrays in a given array.1) The subarray which is already sorted.
2) Remaining subarray which is unsorted.In every iteration of selection sort, the minimum element (considering ascending order) from the unsorted subarray  is picked and moved to the sorted subarray. Following example explains the above steps:Output:
Sorted array:
11 12 22 25 64
Time Complexity: O(n*n) as there are two nested loops.Auxiliary Space: O(1)The good thing about selection sort is it never makes more than O(n) swaps and can be useful when memory write is a costly operation. Please write comments if you find anything incorrect, or you want to share more information about the topic discussed above