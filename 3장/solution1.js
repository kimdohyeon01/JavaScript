const nums = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]


document.write(`<hr>`)
for (let i = 0; i<nums.length; i++)
{
    if (nums[i] > 10)
    {
        document.write(`${nums[i]},`);
    }
}


document.write(`<hr>`)

nums.forEach(function(num){

    if(num > 10){
        document.write(`${num},`);
    }
});


document.write(`<hr>`)

for (let num of nums)
{
    if(num > 10){
        document.write(`${num},`);
    }
}
