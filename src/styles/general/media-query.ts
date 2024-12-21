type Device = "miniSmartphone" | "portraitSmartphone" | "landscapeSmartphone";
type MediaQueryType = "min" | "max";

const breakPoints: Array<{ label: Device; value: number }> = [
  { label: "miniSmartphone", value: 360 },
  { label: "portraitSmartphone", value: 480 },
  { label: "landscapeSmartphone", value: 570 },
];

const mediaQuery = (device: Device, type: MediaQueryType): string => {
  const bp = breakPoints.findIndex(
    (bpItem: { label: Device; value: number }) => bpItem.label === device
  );
  if (bp < 0) return `@media (${type}-width:0px)`;
  return `@media (${type}-width:${breakPoints[bp].value}px)`;
};

export default mediaQuery;
