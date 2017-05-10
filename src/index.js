function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];

  return out;
}

export default function(points) {
  const output = [];

  if (points.length > 0) {
    output.push(copy([0, 0], points[0]));
  }

  for (let i = 0; i < points.length - 1; i++) {
    let p0 = points[i];
    let p1 = points[i + 1];
    let p0x = p0[0];
    let p0y = p0[1];
    let p1x = p1[0];
    let p1y = p1[1];

    output.push([0.85 * p0x + 0.15 * p1x, 0.85 * p0y + 0.15 * p1y]);
    output.push([0.15 * p0x + 0.85 * p1x, 0.15 * p0y + 0.85 * p1y]);
  }

  if (points.length > 1) {
    output.push(copy([0, 0], points[ points.length-1 ]));
  }

  return output;
}
