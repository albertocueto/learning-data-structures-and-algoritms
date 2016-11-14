package primefact

import(
  "math"
)

func Primefact(x int64) []int64 {
  factors := make([]int64, 0)
  for (x % 2) == 0 {
    factors = append(factors, 2)
    x = x / 2
  }
  var factor int64 = 3
  var stopAt float64 = math.Sqrt(float64(x))
  for factor <= int64(stopAt) {
    for (x % factor) == 0 {
      factors = append(factors, factor)
      x = x / factor
      stopAt = math.Sqrt(float64(x))
    }
    factor = factor + 2
  }
  if(x > 1) {
    factors = append(factors, x)
  }
  return factors

}
