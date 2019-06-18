const sieve = (max) => {
  const primes = [];
  for (const n = 2; n < max + 1; n++) {
    if (primes.some(p => (n % p) > 0)) {
      primes.push(n);
    }
  }
  return primes;
};

/*
Sieve of Eratosthenes
prime-sieve

Input:
    max: A positive int representing an upper bound.

Output:
    A list containing all primes up to and including max
*/
