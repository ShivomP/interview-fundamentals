/** Given a string, find the character that is used the 
 * maximum number of times.
 *
 * @example
 * maxCharacter('aabbbccd') === 'b'
 * maxCharacter('foo 111123') === '1'
 */

const maxCharacter = (str) => {
    // const charMap = {}
    // const maxChar = ""
    // const max = 0   
    // for (let char of str){
    //     charMap[char] = charMap[char] + 1 || 1
    // }
    // for (let char in charMap){
    //     if(charMap[char] > max){
    //         max = charMap[char]
    //         maxChar = char
    //     }
    // }
    // return maxChar

    const charMap = new Map()
    let maxChar=''
    let max = 0
    for(const char of str){
        const count = charMap.get(char)
        charMap.set(char, count +1 || 1)
    }
    for (const [char, count] of charMap){
        if (count > max){
            max = count
            maxChar = char
        }
    }
    return maxChar
};

module.exports = maxCharacter;
