export function hexToHSL(hex: string) {
	// Remove the leading # if present
	hex = hex.replace(/^#/, "");

	// Convert 3-digit hex to 6-digit hex
	if (hex.length === 3) {
		hex = hex
			.split("")
			.map((x) => x + x)
			.join("");
	}

	// Convert the hex values to RGB
	const bigint = parseInt(hex, 16);
	const r = (bigint >> 16) & 255;
	const g = (bigint >> 8) & 255;
	const b = bigint & 255;

	// Convert RGB to HSL
	const rNorm = r / 255;
	const gNorm = g / 255;
	const bNorm = b / 255;

	const max = Math.max(rNorm, gNorm, bNorm);
	const min = Math.min(rNorm, gNorm, bNorm);
	const delta = max - min;

	let h = 0;
	let s = 0;
	let l = (max + min) / 2;

	if (delta !== 0) {
		s = delta / (1 - Math.abs(2 * l - 1));

		switch (max) {
			case rNorm:
				h = ((gNorm - bNorm) / delta) % 6;
				break;
			case gNorm:
				h = (bNorm - rNorm) / delta + 2;
				break;
			case bNorm:
				h = (rNorm - gNorm) / delta + 4;
				break;
		}

		h = Math.round(h * 60);
		if (h < 0) h += 360;
	}

	s = +(s * 100).toFixed(1);
	l = +(l * 100).toFixed(1);

	return `${h} ${s}% ${l}%`;
}
