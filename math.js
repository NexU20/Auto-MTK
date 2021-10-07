function sorter(a, b) {
    if (a < b) return -1;  // any negative number works
    if (a > b) return 1;   // any positive number works
    return 0; // equal values MUST yield zero
  }
  
  function kuartil(soal,data){
    data.sort(sorter);
    // return data;
    let k1, k2, k3;
    const jml = data.length;
    const mod = jml % 2;
    switch (mod) {
      case 1:
        k2 = data[Math.floor(jml/2)];
        k1 = data.splice(0, Math.floor(jml/2));
        k3 = data.splice(1);
        if(k1.length % 2 == 0){
          k1 = (k1[(k1.length/2) - 1] + k1[k1.length/2]) / 2;
        }else{
          k1 = k1[Math.floor(k1.length/2)]
        }
  
        if(k3.length % 2 == 0){
          k3 = (k3[(k3.length/2) - 1] + k3[k3.length/2]) / 2;
        }else{
          k3 = k3[Math.floor(k3.length/2)]
        }
        break;
    
      default:
        k2 = (data[(jml/2)-1] + data[(jml/2)]) / 2;
        // return data;
        k1 = data.splice(0, jml/2);
        // return k1;
        k3 = data;
        if(k1.length % 2 == 0){
          k1 = (k1[(k1.length/2) - 1] + k1[k1.length/2]) / 2;
          // return (k1[(k1.length/2) - 1] + k1[k1.length/2]);
        }else{
          k1 = k1[Math.floor(k1.length/2)]
        }
  
        if(k3.length % 2 == 0){
          k3 = (k3[(k3.length/2) - 1] + k3[k3.length/2]) / 2;
        }else{
          k3 = k3[Math.floor(k3.length/2)]
        }
        break;
    }
    const res = {kuartil1 : k1, kuartil2 : k2, kuartil3 : k3};
    return `${soal}\nQ1 = ${res.kuartil1}\nQ2 = ${res.kuartil2}\nQ3 = ${res.kuartil3}\n`;
  }
  
  // console.log(kuartil(1,[5,8,9,6,4,8,7,9,4]))
  // console.log(kuartil(2,[7,8,3,6,5,8,4,9,7,8]))
  // console.log(kuartil('bla',[4, 5, 6, 7, 8, 8]))
  // console.log(kuartil('aasd',[7,7,8,9,3,4,5,8,10,7,8,6]))
  // console.log(kuartil('g tau',[131,135,128,130,132,131,134]));
  
  // [4, 4, 5, 6, '7', 8, 8, 9, 9]
  // [3, 4, 5, 6, 7, 7, 8, 8, 8, 9]
  // [4, 5, 6, 7, 8, 8]
  // [3, 4, 5, 6, 7, 7, 7, 8, 8, 8, 9, 10]