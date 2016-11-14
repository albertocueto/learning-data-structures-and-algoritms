package main

import(
  "fmt"
)

func gcd(a int64, b int64) int64 {
  for b != 0 {
    remainder := a % b
    a = b
    b = remainder
  }
  return a
}

func main() {
  fmt.Printf("%d\n", gcd(75, 25))
  fmt.Printf("%d\n", gcd(78, 66))
  fmt.Printf("%d\n", gcd(1500, 32589))
  fmt.Printf("%d\n", gcd(56789, 12344567))
}
