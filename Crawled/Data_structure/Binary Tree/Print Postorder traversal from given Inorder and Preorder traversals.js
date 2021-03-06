We have discussed a simple iterative postorder traversal using two stacks in the previous post. In this post, an approach with only one stack is discussed.The idea is to move down to leftmost node using left pointer.  While moving down, push root and root’s right child to stack.  Once we reach leftmost node, print it if it doesn’t have a right child. If it has a right child, then change root so that the right child is processed before. Following is detailed algorithm.Let us consider the following tree
Following are the steps to print postorder traversal of the above tree using one stack.

1. Right child of 1 exists. 
   Push 3 to stack. Push 1 to stack. Move to left child.
        Stack: 3, 1

2. Right child of 2 exists. 
   Push 5 to stack. Push 2 to stack. Move to left child.
        Stack: 3, 1, 5, 2

3. Right child of 4 doesn't exist. '
   Push 4 to stack. Move to left child.
        Stack: 3, 1, 5, 2, 4

4. Current node is NULL. 
   Pop 4 from stack. Right child of 4 doesn't exist. 
   Print 4. Set current node to NULL.
        Stack: 3, 1, 5, 2

5. Current node is NULL. 
    Pop 2 from stack. Since right child of 2 equals stack top element, 
    pop 5 from stack. Now push 2 to stack.     
    Move current node to right child of 2 i.e. 5
        Stack: 3, 1, 2

6. Right child of 5 doesn't exist. Push 5 to stack. Move to left child.
        Stack: 3, 1, 2, 5

7. Current node is NULL. Pop 5 from stack. Right child of 5 doesn't exist. 
   Print 5. Set current node to NULL.
        Stack: 3, 1, 2

8. Current node is NULL. Pop 2 from stack. 
   Right child of 2 is not equal to stack top element. 
   Print 2. Set current node to NULL.
        Stack: 3, 1

9. Current node is NULL. Pop 1 from stack. 
   Since right child of 1 equals stack top element, pop 3 from stack. 
   Now push 1 to stack. Move current node to right child of 1 i.e. 3
        Stack: 1

10. Repeat the same as above steps and Print 6, 7 and 3. 
    Pop 1 and Print 1.

// C program for iterative postorder traversal using one stack
#include <stdio.h>
#include <stdlib.h>

// Maximum stack size
#define MAX_SIZE 100

// A tree node
struct Node
{
    int data;
    struct Node *left, *right;
};

// Stack type
struct Stack
{
    int size;
    int top;
    struct Node* *array;
};

// A utility function to create a new tree node
struct Node* newNode(int data)
{
    struct Node* node = (struct Node*) malloc(sizeof(struct Node));
    node->data = data;
    node->left = node->right = NULL;
    return node;
}

// A utility function to create a stack of given size
struct Stack* createStack(int size)
{
    struct Stack* stack = (struct Stack*) malloc(sizeof(struct Stack));
    stack->size = size;
    stack->top = -1;
    stack->array = (struct Node**) malloc(stack->size * sizeof(struct Node*));
    return stack;
}

// BASIC OPERATIONS OF STACK
int isFull(struct Stack* stack)
{  return stack->top - 1 == stack->size; }

int isEmpty(struct Stack* stack)
{  return stack->top == -1; }

void push(struct Stack* stack, struct Node* node)
{
    if (isFull(stack))
        return;
    stack->array[++stack->top] = node;
}

struct Node* pop(struct Stack* stack)
{
    if (isEmpty(stack))
        return NULL;
    return stack->array[stack->top--];
}

struct Node* peek(struct Stack* stack)
{
    if (isEmpty(stack))
        return NULL;
    return stack->array[stack->top];
}

// An iterative function to do postorder traversal of a given binary tree
void postOrderIterative(struct Node* root)
{
    // Check for empty tree
    if (root == NULL)
        return;
    
    struct Stack* stack = createStack(MAX_SIZE);
    do
    {
        // Move to leftmost node
        while (root)
        {
            // Push root's right child and then root to stack.
            if (root->right)
                push(stack, root->right);
            push(stack, root);

            // Set root as root's left child  
            root = root->left;
        }

        // Pop an item from stack and set it as root    
        root = pop(stack);

        // If the popped item has a right child and the right child is not
        // processed yet, then make sure right child is processed before root
        if (root->right && peek(stack) == root->right)
        {
            pop(stack);  // remove right child from stack
            push(stack, root);  // push root back to stack
            root = root->right; // change root so that the right 
                                // child is processed next
        }
        else  // Else print root's data and set root as NULL
        {
            printf("%d ", root->data);
            root = NULL;
        }
    } while (!isEmpty(stack));
}

// Driver program to test above functions
int main()
{
    // Let us construct the tree shown in above figure
    struct Node* root = NULL;
    root = newNode(1);
    root->left = newNode(2);
    root->right = newNode(3);
    root->left->left = newNode(4);
    root->left->right = newNode(5);
    root->right->left = newNode(6);
    root->right->right = newNode(7);

    postOrderIterative(root);

    return 0;
}

Output:
4 5 2 6 7 3 1
This article is compiled by Aashish Barnwal. Please write comments if you find anything incorrect, or you want to share more information about the topic discussed aboveTags: stack