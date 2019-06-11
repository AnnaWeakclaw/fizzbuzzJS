describe("FizzBuuz", function() {
  var word;

  beforeEach(function() {
    game = new FizzBuzz();
  });

  it("should say fizz if the number is divisible by 3 and not by 5", function() {
    expect(game.fizzbuzz(3)).toBe(console.info("1 2 fizz"));
  });
  it("should say buzz if the number is divisible by 5 and not by 3", function() {
    expect(game.fizzbuzz(5)).toBe(console.info("1 2 fizz 4 buzz"));
  });

  it("should say fizzbuzz if the number is divisible by 5 and by 3", function() {
    expect(game.fizzbuzz(100)).toBe(console.info("FizzBuzz"));
  });
  it("should say fizzbuzz if the number is not divisible by 5 nor by 3", function() {
    expect(game.fizzbuzz(2)).toBe(console.info("1 2"));
  });

  it("should print the words in order", function() {
    
    expect(game.fizzbuzz(6)).toBe(console.info("1 2 fizz 4 buzz fizz 7"));
  });
  });