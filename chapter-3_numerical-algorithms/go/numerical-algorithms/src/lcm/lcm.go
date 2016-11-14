package lcm

import(
  "egcd"
)

func Lcm(a int64, b int64) int64 {
  return ((a / egcd.Gcd(a, b)) * b)
}
