/*
  versions<index> - route
*/
import { Request, Response } from "express"
import { catchReponseMessage } from "../../utils/catchResponse"

export interface ColorType {
  name_color: string;
  hex_color: string;
  gradient_css: string[];
  version: string;
  preview_image: string;
}

export interface ExtensionType {
  name: string;
  g_version: string | number;
  versions: ColorType[];
  features: string[];
  repoGithub: string;
}

export const extension = async (
	_req: Request,
	res: Response
): Promise<void> => {
  // eslint-disable-line
	try {
		const data: ExtensionType = (await import("../../data/versions-ext.json"))
			.default,
			code = 200
		res.json(
			catchReponseMessage(Object.assign({}, { code: code, options: data }))
		)
	} catch (e) {
		const code = 400
		res.json(catchReponseMessage({ code, message: "something went wrong" }))
	}
}
