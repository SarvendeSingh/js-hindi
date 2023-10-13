let isLoggedIn = true;
if(isLoggedIn){

}

//nullish coalescing operator (??) : null undefined

let val1;

//val1 = 5 ?? 10;
//val1 = null ?? 20;
//val1 = null ?? null;
//val1 = null ?? undefined;
// val1 = null ?? [20, 30];
// val1 = undefined ?? [20, 30];
// val1 = {name: 'satyam'} ?? [20, 30];

// val1 =  [20, 30] ?? {name: 'satyam'} ;

// val1 =  undefined ?? 45 ;
// val1 =  undefined ?? '' ;
// val1 =  2 ?? '' ;
val1 =  ' ' ?? '' ;

console.log(val1);