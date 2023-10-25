// '*'.repeat(phone_number.length - 4)
// 주어진 번호의 마지막 4자리수 뺀 값을 '*'로 반복하여 교체해줌
// phone_number.slice(-4)
// 주어진 번호의 마지막 부터 4번째 까지의 값
// 둘을 더해주면 값 return
const solution = (phone_number) => '*'.repeat(phone_number.length - 4) + phone_number.slice(-4);