import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import MenuCard from "../pages/components/MenuCard/Fields";

const renderMenuCard = (icon, title, createUrl, listUrl) => {
	render(
		<MenuCard
			icon={icon}
			title={title}
			createUrl={createUrl}
			listUrl={listUrl}
		/>
	);
};

const testClick = (testText) => {
	const clickCreate = screen.getByTestId("click-criar");
	expect(fireEvent.click(clickCreate)).toBe(true);
	expect(screen.getByText(testText)).toBeInTheDocument();

	const clickList = screen.getByTestId("click-listar");
	expect(fireEvent.click(clickList)).toBe(true);
	expect(screen.getByText(testText)).toBeInTheDocument();
};

const obj = [
	{
		icon: "icone-assunto",
		title: "Assunto do Documento",
		createUrl: "/fields-register/document-subject/create",
		listUrl: "/fields-register/document-subject",
	},
	{
		icon: "icone-sigla-da-caixa",
		title: "Sigla da Caixa",
		createUrl: "/fields-register/box-abbreviation/create",
		listUrl: "/fields-register/box-abbreviation",
	},
	{
		icon: "icone-unidade",
		title: "Unidade",
		createUrl: "/fields-register/unity/create",
		listUrl: "/fields-register/unity",
	},
	{
		icon: "icone-tipo-de-documento",
		title: "Tipo de Documento",
		createUrl: "/fields-register/document-type/create",
		listUrl: "/fields-register/document-type",
	},
	{
		icon: "icone-status",
		title: "Status",
		createUrl: "/fields-register/status/create",
		listUrl: "/fields-register/status",
	},
	{
		icon: "icone-estante-prateleira",
		title: "Estante e Prateleira",
		createUrl: "/fields-register/shelf/create",
		listUrl: "/fields-register/shelf",
	},
];
describe("Button test", () => {
	obj.forEach((element) => {
		it(element.icon, () => {
			renderMenuCard(
				element.icon,
				element.title,
				element.createUrl,
				element.listUrl
			);
			testClick(element.title);
		});
	});
});
