var sumTotal = 0;

for (var i = 2; i < process.argv.length; i++) {
	sumTotal += +process.argv[i];
}

console.log(sumTotal);