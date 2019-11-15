const curves = {
  pow: x => x ** 2,
  linear: x => x,
  sqrt: x => Math.sqrt(x),
};

const samplesFromCurve = (samples, curve) =>
  Array.from({ length: samples }, (_, i) =>
    Number(curves[curve](i / (samples - 1)).toFixed(2)),
  );

export default samplesFromCurve;
