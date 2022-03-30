// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';



export function modifyText(type: string) {
	const editor = vscode.window.activeTextEditor;
        if (!editor) {
            // show error message
            vscode.window.showErrorMessage('No Text was selected');
            return;
        } else {
			const curr = editor.document.getText(editor.selection);
			const position = editor.selection.active;
			console.log(position);
			let a = position.line;
			let b = position.character;
	
			editor.edit(editBuilder => {
				editBuilder.insert(new vscode.Position(a,b), type);
			});
		}
}
export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "codebump" is now active!');
	let disposable = vscode.commands.registerCommand('codebump.helloWorld', () => {
		vscode.window.showInformationMessage("Welcome to CodeBump.");	
	});

	let largestHeading = vscode.commands.registerCommand('codebump.largestHeading', () => {
		vscode.window.showInformationMessage("Formatted into Largest Heading ...");
		modifyText("#");
	});

	let secondHeading = vscode.commands.registerCommand('codebump.secondHeading', () => {
		vscode.window.showInformationMessage("Formatted into second largest heading ...");
		modifyText("##");
	});

	let smallHeading = vscode.commands.registerCommand('codebump.smallHeading', () => {
		vscode.window.showInformationMessage("Formatted into smallest heading ...");
		modifyText("###");
	});

	let boldText = vscode.commands.registerCommand('codebump.boldText', () => {
		vscode.window.showInformationMessage("Formatted into Bold text ...");
		modifyText("**");
	});

	let italic = vscode.commands.registerCommand('codebump.italic', () => {
		vscode.window.showInformationMessage("Formatted into italic text ...");
		modifyText("* *");
	});

	let strikethrough = vscode.commands.registerCommand('codebump.strikethrough', () => {
		vscode.window.showInformationMessage("Formatted into Strikethrough text ...");
		modifyText("~~ ~~");
	});

	let boldItalic = vscode.commands.registerCommand('codebump.boldItalic', () => {
		vscode.window.showInformationMessage("Formatted into Bold and nested italic text ...");
		modifyText("** **");
	});

	let allBoldItalic = vscode.commands.registerCommand('codebump.allBoldItalic', () => {
		vscode.window.showInformationMessage("Formatted into All bold and italic text ...");
		modifyText("*** ***");
	});


	let quoting = vscode.commands.registerCommand('codebump.quoting', () => {
		vscode.window.showInformationMessage("Formatted into quoting text ...");
		modifyText(">");
	});


	context.subscriptions.push(disposable);
	context.subscriptions.push(largestHeading);
	context.subscriptions.push(secondHeading);
	context.subscriptions.push(smallHeading);
	
	context.subscriptions.push(boldText);
	context.subscriptions.push(italic);
	context.subscriptions.push(strikethrough);
	context.subscriptions.push(boldItalic);
	context.subscriptions.push(allBoldItalic);

	context.subscriptions.push(quoting);
	





}


export function deactivate() {}
