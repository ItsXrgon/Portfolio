export default function getTerminalOuput(
	input: string,
	setFontColor: (color: string) => void,
): string {
	const command = input.split(" ")[0];
	switch (command) {
		case "help":
			return `Available commands:
					\n- help
					\n- about
					\n- contact
					\n- skills
					\n- projects
					\n- education
					\n- experience
					\n- clear
					\n- exit
					`;
		case "contact":
			return `Email:`;
		case "color":
			return switchColor(input, setFontColor);
		default:
			console.log(input)
			return `Command not found`;
	}
}

function switchColor(
	input: string,
	setFontColor: (color: string) => void,
): string {
	const color = input.split(" ")[1];
	switch (color) {
		case "red":
			setFontColor("red");
			break;
		case "green":
			setFontColor("green");
			break;
		case "blue":
			setFontColor("blue");
			break;
		case "yellow":
			setFontColor("yellow");
			break;
		case "purple":
			setFontColor("purple");
			break;
		case "white":
			setFontColor("white");
			break;
		case "black":
			setFontColor("black");
			break;
		default:
			setFontColor("white");
			break;
	}
	return `Font color changed to ${color}`;
}
