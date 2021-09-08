import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import CreateDocumentSubject from "./pages/FieldsRegister/CreateDocumentSubject";

describe("Componente principal", () => {
	it("Mostrar o título da página", () => {
		render(<CreateDocumentSubject />);

		expect(screen.getByText("Assunto do Documento")).toBeInTheDocument();
	});
});

describe("Garantir que os campos de input do assunto do documento existam", () => {
	it("Nome do documento", () => {
		render(<CreateDocumentSubject />);

		expect(screen.getByText("Nome do documento")).toBeInTheDocument();

		const input = screen.getByLabelText("Nome do documento");
		fireEvent.change(input, { target: { value: "Novo Processo" } });
		const valor = screen.getByLabelText("Nome do documento").value;
		expect(valor == "Novo Processo").toBe(true);
	});

	it("Temporalidade", () => {
		render(<CreateDocumentSubject />);

		expect(screen.getByText("Temporalidade")).toBeInTheDocument();

		const input = screen.getByLabelText("Temporalidade");
		fireEvent.change(input, { target: { value: "2021" } });
		const valor = screen.getByLabelText("Temporalidade").value;
		expect(valor == "2021").toBe(true);
	});
});

describe("Teste do botão", () => {
	it("Botão de salvar", () => {
		render(<CreateDocumentSubject />);

		const click = screen.getByTestId("click");
		expect(fireEvent.click(click)).toBe(true);
	});
});
