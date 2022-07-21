function ending(value, textForms) {
    let hundredthPart = Math.abs(value) % 100;
    let decimalPart = value % 10;
    if (hundredthPart > 10 && hundredthPart < 20) {
        return textForms[2];
    }
    if (decimalPart > 1 && decimalPart < 5) {
        return textForms[1];
    }
    if (decimalPart === 1) {
        return textForms[0];
    }
    return textForms[2];
}

export default ending;
