const marks = [ 99 , 50 ,180 ,70 ,60,40,302,403,950,458,2890,47,90,458 ]

let sum = 0;

for (let i = 0; i <marks.length ; i ++ )
{
   if (marks [i] %2 == 1)
{
sum += marks [i ]
}
}

console.log ( ` sum : ${sum} `)


