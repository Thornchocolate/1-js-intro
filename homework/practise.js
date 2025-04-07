function order(words){
    const senten = [];
    const text = words.split(" ");
    let count = 1;
    for (let i = 0; count < text.length; i++) {
      if (text[i].includes(count)){
        senten.push(text[i]);
        count++;
      };
    return senten;
    };
  }