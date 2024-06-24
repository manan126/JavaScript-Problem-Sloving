function fibonacciSequence(numTerms) {
    let sequence = [];
 
    if (numTerms === 0) {
        return sequence;
    }

    sequence.push(0);
    if (numTerms > 1) {
        sequence.push(1);
    }

    for (let i = 2; i < numTerms; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    
    return sequence;
}

