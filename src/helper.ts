import * as vscode from 'vscode';

export function enterText(text: string) {
    const editor = vscode.window.activeTextEditor;
    if (editor) {
        editor.edit(editBuilder => {
            editBuilder.insert(editor.selection.active, text);
        });
    }
}

export function makeFrame()
{
    const activeEditor = vscode.window.activeTextEditor;
    if (activeEditor) {
        activeEditor.selection.active.line;
    }
}


