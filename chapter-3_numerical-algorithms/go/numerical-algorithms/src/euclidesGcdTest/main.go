package main

import(
  "fmt"
  "euclidesGcd"
)

func main() {
  fmt.Printf("%d\n", euclidesGcd.Gcd(75, 25))
  fmt.Printf("%d\n", euclidesGcd.Gcd(78, 66))
  fmt.Printf("%d\n", euclidesGcd.Gcd(1500, 32589))
  fmt.Printf("%d\n", euclidesGcd.Gcd(56789, 12344567))
}
