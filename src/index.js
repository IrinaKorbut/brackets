module.exports = function check(str, bracketsConfig) {
    let stack = [];
    for (let j = 0; j < str.length; j++) {
        for (let i = 0; i < bracketsConfig.length; i++) {
            if (
                stack.length &&
                str.charAt(j) == bracketsConfig[i][1] &&
                stack[stack.length - 1] == bracketsConfig[i][0]
            ) {
                stack.pop();
                break;
            }
            if (str.charAt(j) == bracketsConfig[i][0]) {
                stack.push(str.charAt(j));
                break;
            }
            if (str.charAt(j) == bracketsConfig[i][1] && stack.length == 0) {
                return false;
            }
        }
    }
    return !stack.length;
};
