function solution(brown, yellow) {
    // 전체 카펫 격자 수
    let entireCarpet = brown + yellow;
    
    // 카펫의 최소 높이는 3 -> 노란색 격자가 생기기 위한 최소 수
    for(let i = 3; i < entireCarpet; i++) {
        let width = entireCarpet / i;
        let height = i;
        
        // 노란색 개수 -> 카펫의 모양을 만족하는 가로, 세로 조건
        if((width - 2) * (height - 2) === yellow) {
            return [width, height]
        }
    }
}