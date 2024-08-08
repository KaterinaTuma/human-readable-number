module.exports = function toReadable(num) {
  const ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  if (num < 10) return ones[num];
  if (num < 20) return teens[num % 10];
  if (num < 100) {
    const numTens = Math.floor(num / 10);
    const numOnes = num % 10;
    const phrase = `${tens[numTens]} ${numOnes !== 0 ? ones[numOnes] : ''}`;
    return phrase.trim();
  };
  if (num < 1000) {
    const numHundreds = Math.floor(num / 100);
    const numTensOnes = num % 100;
    const phrase = `${ones[numHundreds]} hundred ${numTensOnes !== 0 ? toReadable(num % 100) : ''}`
    return phrase.trim();
  };
  if (num < 10000) {
    const numThousands = Math.floor(num / 1000);
    const numTensOnesHundreds = num % 1000;
    const phrase = `${ones[numThousands]} thousand ${numTensOnesHundreds !== 0 ? toReadable(num % 1000) : ''}`
    return phrase.trim();
  }

  return 'Input number is out of the available range';
}
