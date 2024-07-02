From and of operator in angular is used to convert data to observable format. From operator is used for complex data while of operator is used for simple data. For dynamic data we use from operator and for static data we use of operator.
Subscriber used to recieve data from observable.

ofObservable = of(1,2,3,4,5,6,7,8,9);
constructor(){
this.ofObservable.subscribe((result:any)=>{
console.log("Result ", result)
})
}

how many parameters used in of operator that many times the subscriber will work . Here 9 times the subscriber will work.

fromObservable = from('Helloworld');
constructor(){
this.fromObservable.subscribe((data:any)=>{
console.log("From operator Data", data)
})
}
from operator will take as 1 argument as value . In the above example Helloworld will be splitted into each letter. Output as follows
From operator Data H
 From operator Data e
From operator Data l
 From operator Data o
 From operator Data w
 From operator Data o
 From operator Data r
aFrom operator Data l
 From operator Data d