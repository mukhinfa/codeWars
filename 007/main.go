// Create a method to see whether the string is ALL CAPS.
package main

import "unicode"

type MyString string

func (s MyString) IsUpperCase() bool {

	rs := []rune(s)
	for i := 0; i < len(rs); i++ {
		if !unicode.IsUpper(rs[i]) && rs[i] != ' ' {
			return false
		}
	}
	return true
}
func main() {

}
