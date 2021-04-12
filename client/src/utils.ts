import { Position, Range, SymbolKind, TextDocument } from "vscode";

type SymbolResult = {
	type: string;
	range: Range;
	kind: SymbolKind;
}

export function getSymbols(document: TextDocument): SymbolResult[] {
	const results: SymbolResult[] = [];

	return results;
}
