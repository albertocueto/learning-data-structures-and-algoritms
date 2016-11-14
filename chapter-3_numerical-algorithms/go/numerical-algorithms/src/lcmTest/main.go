package main

import(
  "fmt"
  "lcm"
)

func main() {
  fmt.Printf("%d\n", lcm.Lcm(75, 25))
  fmt.Printf("%d\n", lcm.Lcm(78, 66))
  fmt.Printf("%d\n", lcm.Lcm(1500, 32589))
  fmt.Printf("%d\n", lcm.Lcm(56789, 12344567))
}
