console.log("star pattern");

// Pattern 1: Print nxn Star Square
// Print a square pattern of stars (*) of size n x n.

// Output
// * * * *
// * * * *
// * * * *
// * * * *

let n = 4;
for(let i = 0; i<n; i++)
{
    let row = "";
    for(let j = 0; j<n; j++)
    {
        row += " *";
    }
    // console.log(row);
}

// Pattern 2: Right-Angled Star Triangle
// Print a right-angled triangle of stars with n rows.

// Output
// *
// * *
// * * *
// * * * *

for(let i = 0; i<n; i++)
{
    let row = "";
    for(let j = 0; j<=i; j++)
    {
        row += " *";
    }
    // console.log(row);
}

// Pattern 3: Print a Right-Angled Number Triangle
// Write a program that prints a right-angled triangle of numbers of heightn.

// Output
// 1
// 1 2
// 1 2 3
// 1 2 3 4

for(let i = 0; i<n; i++)
{
    let row = "";
    for(let j = 0; j<=i; j++)
    {
        row += " " + (j+1);
    }
    // console.log(row);
}

// Pattern 4: Print a Right-Angled Triangle of Repeated Numbers
// Write a program that prints a right-angled triangle where each row contains the same number repeated.

// Output
// 1
// 2 2
// 3 3 3
// 4 4 4 4

for(let i = 0; i<n; i++)
{
    let row = "";
    for(let j = 0; j<=i; j++)
    {
        row += " " + (i+1);
    }
    // console.log(row);
}

// Pattern 5: Print a Reverse Right-Angled Triangle of Increasing Numbers
// Write a program that prints a reverse right-angled triangle where each row starts from 1 and the number of elements decreases with each row.

// Output
// 1 2 3 4
// 1 2 3
// 1 2
// 1

for(let i = 0; i<n; i++)
{
    let row = "";
    for(let j = 0; j<n-i; j++)
    {
        row += " " + (j+1);
    }
    // console.log(row);
}

// Pattern 6: Print a Right-Aligned Right-Angled Triangle of Stars
// Write a program that prints a right-aligned triangle of stars increasing row by row, with leading spaces for alignment.

// Output
//       *
//     * *
//   * * *
// * * * *

