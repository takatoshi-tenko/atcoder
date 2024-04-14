// B問題
// ユークリッド距離を計算する関数
function euclideanDistance(x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
}

// 各点からの最大距離を計算する関数
function maxDistancePoints(input) {
  const lines = input.trim().split("\n");
  const N = parseInt(lines[0]);
  const points = [];
  for (let i = 1; i <= N; i++) {
      const [x, y] = lines[i].split(" ").map(Number);
      points.push([x, y]);
  }

  const maxDistances = [];
  for (let i = 0; i < points.length; i++) {
      let maxDistance = 0;
      let maxIndex = 0;
      for (let j = 0; j < points.length; j++) {
          if (i !== j) {
              const distance = euclideanDistance(points[i][0], points[i][1], points[j][0], points[j][1]);
              if (distance > maxDistance) {
                  maxDistance = distance;
                  maxIndex = j + 1;
              }
          }
      }
      maxDistances.push(maxIndex);
  }
  return maxDistances.join('\n');
}

// 入力文字列
const input = `
4
0 0
2 4
5 0
3 4
`;

// 最大距離を持つ点の番号を出力
console.log(maxDistancePoints(input));
