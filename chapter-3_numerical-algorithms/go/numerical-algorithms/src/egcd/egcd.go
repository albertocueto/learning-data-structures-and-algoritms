package egcd

func Gcd(a int64, b int64) int64 {
  for b != 0 {
    remainder := a % b
    a = b
    b = remainder
  }
  return a
}
