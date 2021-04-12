import TextRange from "./TextRange";
import { ParameterTypes } from "./types";

export default interface Token {
	label: string;
	body?: string;
	range: TextRange;
	isValid: boolean;
	arguments?: Token[];
	type: ParameterTypes;
	labelRange: TextRange;
	signatureIndex?: number;
}
