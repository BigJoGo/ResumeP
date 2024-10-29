function dnaStrand(dna) {
    const replacementMap = {
      'A': 'T',
      'T': 'A',
      'C': 'G',
      'G': 'C'
    };
  
    // Використовуємо регулярний вираз для знаходження A, T, C, G
    const newDna = dna.replace(/[ATC]/g, (match) => replacementMap[match]);
  
    return newDna;
  }
  
console.log(dnaStrand("ATTGC")); // Виведе: "TAACG"
console.log(dnaStrand("GTAT"));  // Виведе: "CATA"
