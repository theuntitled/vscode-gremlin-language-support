import { CancellationToken, DocumentSymbol, DocumentSymbolProvider, TextDocument } from 'vscode';
import { getSymbols } from '../utils';

export default class GremlinDocumentSymbolProvider implements DocumentSymbolProvider {

	provideDocumentSymbols(document: TextDocument, token: CancellationToken) {
		return getSymbols(document).map((result) => {
			return new DocumentSymbol(document.getText(result.range), result.type, result.kind, result.range, result.range);
		});
	}
	
}
