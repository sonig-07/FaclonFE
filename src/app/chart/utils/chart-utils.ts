export function linePoints(series:any[]){
 return series.map((s,i)=>`${i*100},${300-s.value*3}`).join(' ');
}
