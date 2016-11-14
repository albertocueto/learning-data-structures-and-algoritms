package main

import(
  "fmt"
  "primefact"
)

func main() {
  var x int64 = 204
  fmt.Printf("\n%v", primefact.Primefact(x))
  x = 20579
  fmt.Printf("\n%v", primefact.Primefact(x))
  x = 123456789012345678
  fmt.Printf("\n%v", primefact.Primefact(x))
  x = 1234567890123456789
  fmt.Printf("\n%v", primefact.Primefact(x))
  fmt.Printf("\n")
}
