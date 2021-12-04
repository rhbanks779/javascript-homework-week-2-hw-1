//print a triangle with nested loops
/* example, column dependent upon row, 1row=1column, as row increases/column does
1
22
333
4444
55555*/
for( r=1; r<=5; r++){
    for( c=1; c<=r; c++){
        process.stdout.write(r.toString() + '\t')//or (r + "\t")
        console.log()//empty console will bring control to the next line
    }
}
