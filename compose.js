function compose(fns) {
    return function(arg) {
	fns.reverse.reduce((acc,fn) => fn(acc),arg);
    } 
}