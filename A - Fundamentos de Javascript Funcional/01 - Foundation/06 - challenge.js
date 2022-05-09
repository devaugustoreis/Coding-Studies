function range(...nums) {
    if (nums.length == 1) {
        let arraySize = nums[0]
        for (let i = 1; i < arraySize; i++) {
            nums.push(i)
        }
        nums.shift()
        nums.push(arraySize)
    } else {
        let initial = nums[0]
        let final = nums[1]
        let passo = 1
        if (nums.length === 3) passo = nums[2]
        nums = []
        if (initial < final) {
            for (let n = initial; n <= final; n += passo) {
                nums.push(n)
            }
        } else if (initial > final) {
            for (let n = initial; n >= final; n -= passo) {
                nums.push(n)
            }
        }
    }
    console.log(nums)
}

range(5)
range(6, 11)
range(10, 19, 2)
range(6, 2)
range(8, -3, 4)