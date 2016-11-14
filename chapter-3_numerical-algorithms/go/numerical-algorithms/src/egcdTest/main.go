package main

import(
  "fmt"
  "egcd"
)

func main() {
  fmt.Printf("%d\n", egcd.Gcd(75, 25))
  fmt.Printf("%d\n", egcd.Gcd(78, 66))
  fmt.Printf("%d\n", egcd.Gcd(1500, 32589))
  fmt.Printf("%d\n", egcd.Gcd(56789, 12344567))
}
