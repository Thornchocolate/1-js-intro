const text = `students: John, Jane, maRko, ANA.`;
function correctSentence(text) {
  const words = text.split(", ");
  const correctedWords = words.map(word => {
    if (word.length > 1) {
      return word[0].toUpperCase() + word.slice(1).toLowerCase();
    }
    return word.toUpperCase();
  });
  const correctedText = correctedWords.join(", ");
  return correctedText;
}
console.log(correctSentence(text));