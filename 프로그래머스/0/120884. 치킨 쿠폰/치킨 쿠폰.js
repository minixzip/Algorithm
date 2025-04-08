function solution(chicken) {
  let coupon = chicken; // 치킨 수 만큼 쿠폰을 받음 
  let service = 0;

  while (coupon >= 10) {
    let free = Math.floor(coupon / 10); 
    service += free; 
    coupon = (coupon % 10) + free; // 10장씩 서비스 쿠폰 제외 후 남은 쿠폰 + (서비스 치킨 = 쿠폰) 
  }

  return service; 
}


