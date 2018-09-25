module.exports = function getZerosCount(number, base) {
	var pr={};
	var i=2;
	var j=k=s=0;
	var ch=base;
	var numb=num=number;
	while (ch>=i){
		if(ch%i==0){
		j=0;
		while (ch%i==0){
			j++;
			ch=ch/i;
}
		pr[i]=j;
}
		i++;
}
	for(k in pr){
		numb=number;
		s=0;
		while(numb>=k){
			numb=parseInt(numb/k);
			s=s+numb;
}
		if (num>parseInt(s/pr[k])) {
			num=(parseInt(s/pr[k]))

};
		
};

return(num);

}