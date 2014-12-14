Given three linked lists, say a, b and c, find one node from each list such that the sum of the values of the nodes is equal to a given number. 
For example, if the three linked lists are 12->6->29, 23->5->8 and 90->20->59, and the given number is 101, the output should be tripel “6 5 90″.In the following solutions, size of all three linked lists is assumed same for simplicity of analysis. The following solutions work for linked lists of different sizes also.A simple method to solve this problem is to run three nested loops. The outermost loop picks an element from list a, the middle loop picks an element from b and the innermost loop picks from c. The innermost loop also checks whether the sum of values of current nodes of a, b and c is equal to given number. The time complexity of this method will be O(n^3).Sorting can be used to reduce the time complexity to O(n*n).  Following are the detailed steps.
1) Sort list b in ascending order, and list c in descending order.
2) After the b and c are sorted, one by one pick an element from list a and find the pair by traversing both b and c. See isSumSorted() in the following code.  The idea is similar to Quadratic algorithm of 3 sum problem.Following code implements step 2 only. The solution can be easily modified for unsorted lists by adding the merge sort code discussed here. Output:
Triplet Found: 15 2 8
Time complexity: The linked lists b and c can be sorted in O(nLogn) time using Merge Sort (See this). The step 2 takes O(n*n) time. So the overall time complexity is O(nlogn) + O(nlogn) + O(n*n) = O(n*n).  In this approach, the linked lists b and c are sorted first, so their original order will be lost. If we want to retain the original order of b and c, we can create copy of b and c. 
This article is compiled by Abhinav Priyadarshi and reviewed by GeeksforGeeks team. Please write comments if you find anything incorrect, or you want to share more information about the topic discussed above