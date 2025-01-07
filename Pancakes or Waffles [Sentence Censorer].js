function censor(sentence) {
    let array = sentence.split(' ');
    for (let i in array) {
        let word = array[i];
        let lowerWord = word.toLowerCase(); // Convert to lowercase for comparison

        if (lowerWord === 'pancakes' || lowerWord === 'flapjacks' || lowerWord === 'slapjacks' || lowerWord === 'hotcakes') {
            array[i] = '*'.repeat(word.length); // Replace with asterisks
        } else if (lowerWord === 'waffles' || lowerWord === 'crepes' || lowerWord === 'blintzes') {
            array[i] = `**${word}**`; // Add double asterisks
        } else if (lowerWord === 'syrup' || lowerWord === 'honey' || lowerWord === 'jam' || lowerWord === 'butter' || lowerWord ==='chocolate' || lowerWord === 'margarine') {
          array[i] = `**${word}**`;
        }
    }
  console.log(array.join(' '))
    return array.join(' ');
}
