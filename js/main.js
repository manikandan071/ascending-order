var a=700;
var b=400;
var c=300;
var d=550;

if(a<b && a<c && a<d){
	if(b<c && b<d){
		if(c<d){
			console.log(d,c,b,a);
		}
		else{
			console.log(c,d,b,a);
		}
	}
	else if(c<b && c<d){
		if(b<d){
			console.log(d,b,c,a);
		}
		else{
			console.log(b,d,c,a);
		}
	}
	else if(d<b && d<c){
		if(b<c){
			console.log(c,b,d,a);
		}
		else{
			console.log(b,c,d,a);
		}
	}
}
else if(b<a && b<c && b<d){
	if(a<c && a<d){
		if(c<d){
			console.log(d,c,a,b);
		}
		else{
			console.log(c,d,a,b);
		}
	}
	else if(c<a && c<d){
		if(a<d){
			console.log(d,a,c,b);
		}
		else{
			console.log(a,d,c,b);
		}
	}
	else if(d<a && d<c){
		if(a<c){
			console.log(c,a,d,b);
		}
		else{
			console.log(a,c,d,b);
		}
	}
}
else if(c<a && c<b && c<d){
	if(a<b && a<d){
		if(b<d){
			console.log(d,b,a,c);
		}
		else{
			console.log(b,d,a,c);
		}
	}
	else if(b<a && b<d){
		if(a<d){
			console.log(d,a,b,c);
		}
		else{
			console.log(a,d,b,c);
		}
	}
	else if(d<a && d<b){
		if(a<b){
			console.log(b,a,d,c);
		}
		else{
			console.log(a,b,d,c);
		}
	}
}
else if(d<a && d<b && d<c){
	if(a<b && a<c){
		if(b<c){
			console.log(c,b,a,d);
		}
		else{
			console.log(b,c,a,d);
		}
	}
	else if(c<a && c<b){
		if(a<b){
			console.log(b,a,c,d);
		}
		else{
			console.log(a,b,c,d)
		}
	}
	else if(b<a && b<c){
		if(a<c){
			console.log(c,a,b,d);
		}
		else{
			console.log(a,c,b,d);
		}
	}
}

