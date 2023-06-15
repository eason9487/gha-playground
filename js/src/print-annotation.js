console.log( `::group::Annotation commands` );

console.log( `::error file=./js/src/app.js,line=7,endLine=7,col=8,endColumn=22::[no-unused-vars] 'unusedVariable' is assigned a value but never used.` );
console.log( `::error file=./js/src/app.js,line=7,endLine=7,col=25,endColumn=30::[prettier/prettier] Replace \`"hey"\` with \`'hey'\`` );
console.log( `::error file=./js/src/app.js,line=9,endLine=9,col=7,endColumn=8::[no-undef] 'a' is not defined.` );
console.log( `::error file=./js/src/app.js,line=9,endLine=9,col=9,endColumn=11,title=Howdy!::[eqeqeq] Expected '===' and instead saw '=='.` );

console.log( `::endgroup::` );

process.exit( 1 );
