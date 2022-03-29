// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as helper from './helper';

export function createHTML(promt: string) {

	return `the selected text is ${promt}`;
}

export function getWorld(): string {
	const editor = vscode.window.activeTextEditor;
	if (!editor) {
		// show error message
		vscode.window.showErrorMessage('hmmm......');
		return "N";
	}
	return editor.document.getText(editor.selection);
}

export function showResult(data: string) {
	const panel = vscode.window.createWebviewPanel( 'myPanel', 'My Panel', vscode.ViewColumn.One, { enableScripts: true } ); panel.webview.html = `<!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8"> <meta http-equiv="Content-Security-Policy" content="default-src 'self' 'unsafe-inline' vscode-resource: https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js;"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>My Panel</title> </head> <body> <h1>Hello World! ffjdflkgfdjgfjdgkfdjglk</h1> </body> </html>`;
}

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "codebump" is now active!');
	let disposable = vscode.commands.registerCommand('codebump.helloWorld', () => {
		vscode.window.showInformationMessage("Launching CodeBump ...");
		
	});

	let disposable2 = vscode.commands.registerCommand('codebump.helloWorld2', () => {

		vscode.window.showInformationMessage("Searching about the function ... ");

		let selectedWord =  getWorld();
		let searchresult = createHTML(selectedWord);
		showResult(searchresult);
	});

	context.subscriptions.push(disposable);
	context.subscriptions.push(disposable2);
}


export function deactivate() {}
