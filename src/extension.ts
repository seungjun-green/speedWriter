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
			const start = editor.selection.start.line;
			const end = editor.selection.end.line;
			let a = position.line;
			let b = position.character;
			let c = editor.selection.start.character;

			if (start !== end) {
				editor.edit(editBuilder => {
					for (let i = start; i < end+1; i++) {
					console.log(i);
					editBuilder.insert(new vscode.Position(i,0), type);
				}
				});
			} else {
				editor.edit(editBuilder => {
					editBuilder.insert(new vscode.Position(a,c), type);
				});
			}
				
			
			
		}
}

export function modifyText2(type: string) {
	const editor = vscode.window.activeTextEditor;
        if (!editor) {
            // show error message
            vscode.window.showErrorMessage('No Text was selected');
            return;
        } else {
			const curr = editor.document.getText(editor.selection);
			const start = editor.selection.start.line;
			const end = editor.selection.end.line;

			const position = editor.selection.active;
			let a = position.line;
			let b = position.character;
			let c = editor.selection.start.character;
			let d = editor.selection.end.character;
			

			// get a text at specific line of selected text ..."
			


			if (start !== end) {
				editor.edit(editBuilder => {
					for (let i = start; i < end+1; i++) {
					console.log(i);
					let textL = editor.document.lineAt(i).text.length
					editBuilder.insert(new vscode.Position(i,0), type);
					editBuilder.insert(new vscode.Position(i, textL), type);
				}
				});
			} else {
				editor.edit(editBuilder => {
					editBuilder.insert(new vscode.Position(a,c), type);
					editBuilder.insert(new vscode.Position(a,d), type);
				});
			}
			
		}
}


export function quoteCode() {
	const editor = vscode.window.activeTextEditor;
        if (!editor) {
            // show error message
            vscode.window.showErrorMessage('No Text was selected');
            return;
        } else {
			const curr = editor.document.getText(editor.selection);
			const start = editor.selection.start.line;
			const end = editor.selection.end.line;

			editor.edit(editBuilder => {
				editBuilder.insert(new vscode.Position(start,0), "```\n");
				editBuilder.insert(new vscode.Position(end+1,0), "\n```");
			});
			
		}
}

export function addLink() {
	const editor = vscode.window.activeTextEditor;
        if (!editor) {
            // show error message
            vscode.window.showErrorMessage('No Text was selected');
            return;
        } else {
			const curr = editor.document.getText(editor.selection);
			const position = editor.selection.active;
			const start = editor.selection.start.line;
			const end = editor.selection.end.line;
			let a = position.line;
			let b = position.character;
			let c = editor.selection.start.character;
			let d = editor.selection.end.character;

			
			editor.edit(editBuilder => {
				editBuilder.insert(new vscode.Position(a,c), "[");
				editBuilder.insert(new vscode.Position(a,d+1), "](https://pages.github.com/)");

			});
			
				
			
			
		}
}

export function addImage() {
	const editor = vscode.window.activeTextEditor;
        if (!editor) {
            // show error message
            vscode.window.showErrorMessage('No Text was selected');
            return;
        } else {
			const curr = editor.document.getText(editor.selection);
			const position = editor.selection.active;
			const start = editor.selection.start.line;
			const end = editor.selection.end.line;
			let a = position.line;
			let b = position.character;
			let c = editor.selection.start.character;
			let d = editor.selection.end.character;

			
			editor.edit(editBuilder => {
				editBuilder.insert(new vscode.Position(a,c), "![");
				editBuilder.insert(new vscode.Position(a,d+1), "](https://myoctocat.com/assets/images/base-octocat.svg)");

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
		modifyText2("**");
	});

	let italic = vscode.commands.registerCommand('codebump.italic', () => {
		vscode.window.showInformationMessage("Formatted into italic text ...");
		modifyText2("* *");
	});

	let strikethrough = vscode.commands.registerCommand('codebump.strikethrough', () => {
		vscode.window.showInformationMessage("Formatted into Strikethrough text ...");
		modifyText2("~~ ~~");
	});

	let boldItalic = vscode.commands.registerCommand('codebump.boldItalic', () => {
		vscode.window.showInformationMessage("Formatted into Bold and nested italic text ...");
		modifyText2("** **");
	});

	let allBoldItalic = vscode.commands.registerCommand('codebump.allBoldItalic', () => {
		vscode.window.showInformationMessage("Formatted into All bold and italic text ...");
		modifyText2("*** ***");
	});


	let quoting = vscode.commands.registerCommand('codebump.quoting', () => {
		vscode.window.showInformationMessage("Formatted into quoting text ...");
		modifyText(">");
	});

	let quotingCode = vscode.commands.registerCommand('codebump.quotingCode', () => {
		vscode.window.showInformationMessage("Formatted into quoting code text ...");
		quoteCode();
	});

	let link = vscode.commands.registerCommand('codebump.addLink', () => {
		vscode.window.showInformationMessage("Added a link ...");
		addLink();
	});

	let image = vscode.commands.registerCommand('codebump.addImage', () => {
		vscode.window.showInformationMessage("Added a Image ...");
		addImage();
	});

	let list = vscode.commands.registerCommand('codebump.addList', () => {
		vscode.window.showInformationMessage("Mkaing it into a list ...");
		modifyText("-");
	});

	let task = vscode.commands.registerCommand('codebump.addTask', () => {
		vscode.window.showInformationMessage("Mkaing it into a list ...");
		modifyText("-[ ]");
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
	context.subscriptions.push(quotingCode);
	context.subscriptions.push(link);
	context.subscriptions.push(image);
	context.subscriptions.push(list);
	context.subscriptions.push(task);




}


export function deactivate() {}
