#include "stdio.h"
#if !defined(ARRAY_SIZE)
	#define ARRAY_SIZE(x) (sizeof(x)/sizeof((x)[0]))
#endif
/*In C language, the length of a array lost when passing the array as a parameter;*/
void print(int array[],int start,int end)
{	
	int i = start;
	
	while(i<=end)
	{
		printf("%d\t",array[i]);
		i++;
	}
	printf("\n");
}
void printArray(int array[],int length)
{	
	
	printf("The result is:\n");
	print(array,0,length-1);
	printf("\n");
}
void quickSort(int array[],int left,int right)
{
	
		
		int base = array[left]; 
		int _left = left;
		int _right = right;
		while(_left<=_right){
			
			for (int j = _right; j >=_left; j--)
			{
				if (array[j]<base)
				{
					_right=j;
					break;
				}
			}
			for (int i = _left; i < _right; i++)
			{
				if (array[i]>base)
				{
					_left=i;
					break;
				}
			}
			
			
			if (array[_left]>array[_right])
			{
				
				int temp=array[_left];
				array[_left]=array[_right];
				array[_right]=temp;
				
			}
			
			if (_left==_right || _left==(_right-1))
			{
				break;
			}
			_left++;
			_right--;
			
		}
		

		print(array,left,right);
		if (array[left] > array[_left])
		{
			int temp=array[left];
			array[left]=array[_left];
			array[_left]=temp;
		
			
			
		}
		if (left!=_left && left!=_left-1)
		{
			quickSort(array,left,_left-1);
		}
		if (_left!=right && left!=right-1)
		{
			quickSort(array,_left,right);
		}
	
	

}
int main(int argc, char const *argv[])
{
	int N = 7;
	int array[N];

	printf("please input %d numbers:\n", N);
	for (int i = 0; i < N; ++i)
	{
		scanf("%d",&array[i]);
	}
	quickSort(array,0,N-1);
	printArray(array,N);
	return 0;
}

