//Baby Steps
var array = process.argv;
var sum = 0;
i = 2;
while (array.length > i) {
	sum += Number(array[i]);
	i++;
}

console.log(sum);
