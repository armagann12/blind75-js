# Encode and Decode Strings
# https://www.lintcode.com/problem/659/

def encode(strs):
    res = ""
    for s in strs:
        res += str(len(s)) + "#" + s
    return res

def decode(s):
    res, i = [], 0

    while i < len(s):
        j = i
        while s[j] != "#":
            j += 1
        length = int(s[i:j])
        res.append(s[j + 1: j + 1 + length])
        i = j + 1 + length
    return res

arr = ["lint","code","love","you"]
str = encode(arr)
print(str) # 4#lint4#code4#love3#you
res = decode(str)
print(res)