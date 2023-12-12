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
		case "about":
			return `I am a Full Stack Developer with a passion for creating web applications that are both functional and beautiful. I am a quick learner and a team player who is always looking to learn new skills and technologies. I have experience working with JavaScript, TypeScript, React, Redux, Node.js, Express, MongoDB, HTML, CSS, SCSS, Bootstrap, Material UI, and more.`;
		case "contact":
			return `Email:`;
		case "color":
			return switchColor(input, setFontColor);
		default:
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
