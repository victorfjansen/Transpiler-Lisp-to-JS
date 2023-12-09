const LETTERS_REGEX = /[a-z]/i;
const WHITESPACE_REGEX = /\s/;
const NUMBERS_REGEX = /\d/

function tokenizer(input) {
    const tokens = [];
    let current = 0;
    while(current < input.length) {
        let char = input[current];
         if (char ===  '(' || char === ')') {
            tokens.push({
                type: 'paren',
                value: char     
              });
              current++;
              continue;
         }
         if(LETTERS_REGEX.test(char)){
            let value = '';
            while(LETTERS_REGEX.test(char)) {
                value += char;
                char = input[++current];
            }
            tokens.push({
                type: 'name',
                value
              });
              continue;
         }
        if(WHITESPACE_REGEX.test(char)) {
            current++;
            continue;
        }
        if(NUMBERS_REGEX.test(char)) {
            let value = '';
            while(NUMBERS_REGEX.test(char)) {
                value += char;
                char = input[++current];
            }
            tokens.push({
                type: 'number',
                value
            })
            continue;
        }
        throw new TypeError(`Unknown char: '${char}'`);
    }
    
    return tokens;
}

module.exports = tokenizer;

