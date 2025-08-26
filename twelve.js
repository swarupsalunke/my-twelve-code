function isValid(s) {
    let stack = [];
    let map = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of s) {
        
        if (map[char]) {
            
            let top = stack.pop() || '#';
            if (top !== map[char]) {
                return false;
            }
        } else {

            stack.push(char);
        }
    }

    
    return stack.length === 0;
}
console.log(isValid("[{()}]")); 
console.log(isValid("([)]"));   
console.log(isValid("{[]}"));   
console.log(isValid("((("));    
