// Return an array, where the first element is the count of positives numbers and the second element is sum of
// negative numbers. 0 is neither positive nor negative.

package kata

import "fmt"

func CountPositivesSumNegatives(numbers []int) []int {
	var res []int = []int{0, 0}
	for i := 0; i < len(numbers); i++ {
		if numbers[i] > 0 {
			res[0]++
		} else if numbers[i] < 0 {
			res[1] += numbers[i]
		}
	}

	return res // your code here
}
func main() {
	n := []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15}
	fmt.Println(CountPositivesSumNegatives(n))
}
