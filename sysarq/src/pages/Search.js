import React, { useState } from "react";
import {
	TextField,
	Button,
	Grid,
	ThemeProvider,
	createTheme,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import imgBox from "./assets/logo.png";

import "./Search.css";

const useStyles = makeStyles({
	input: {
		marginTop: 30,
		width: 650,
	},

	button: {
		marginTop: 50,
		marginLeft: 10,
		borderRadius: 4,
	},

	select: {
		marginTop: 50,
		marginLeft: 100,
	},

	select_box: {
		minWidth: 200,
		height: 40,
	},

	select_label: {
		marginTop: -15.5,
		marginLeft: 20,
	},
});

export default function Search() {
	const classes = useStyles();
	const [value, setValue] = useState("");
	const [show, setShow] = useState(false);
	const handleShow = () => setShow(true);
	const [show2, setShow2] = useState(false);
	const handleShow2 = () => setShow2(true);
	const handleClose = () => {
		setShow(false);
		setShow2(false);
	};
	const [inputValue, setInputValue] = useState("");
	const [urllist, setUrllist] = useState("");
	const [isDisabled, setIsDisabled] = useState(false);

	const theme = createTheme({
		palette: {
			primary: {
				main: "#5289B5",
			},
		},
	});

	const handleSelect = (event) => {
		handleClose();
		setValue(event.target.value);
		const valueChange = `${event.target.value}/${inputValue}`;
		setUrllist(`search/list/${valueChange}`);
	};

	const onchangeInputValue = (event) => {
		handleClose();
		setInputValue(event.target.value);
		const valueChange = `${value}/${event.target.value}`;
		setUrllist(`search/list/${valueChange}`);
	};

	const handleButton = () => {
		if (inputValue === "") {
			handleShow2();
			return;
		}
		if (value === "") {
			handleShow();
			return;
		}

		window.location = urllist;
	};

	const handleClick = () => {
		setIsDisabled(false);
		if (
			inputValue === "Eliminado" ||
			inputValue === "Arquivado" ||
			inputValue === "Desarquivado"
		) {
			setInputValue("");
		}
	};

	const handleClickEliminated = () => {
		setIsDisabled(true);
		setInputValue("Eliminado");
	};

	const handleClickFiled = () => {
		setIsDisabled(true);
		setInputValue("Arquivado");
	};

	const handleClickUnfiled = () => {
		setIsDisabled(true);
		setInputValue("Desarquivado");
	};

	return (
		<div>
			<body id="body">
				<img id="logo" src={imgBox} alt="Logo" />
				<h1 id="search_title">Arquivo Geral da Pol??cia Civil de Goi??s</h1>
				{show === true ? (
					<Alert severity="error">Selecione algum filtro</Alert>
				) : (
					""
				)}
				{show2 === true ? (
					<Alert severity="error">Pesquise por algum valor</Alert>
				) : (
					""
				)}

				<ThemeProvider theme={theme}>
					<TextField
						className={classes.input}
						value={inputValue}
						onChange={onchangeInputValue}
						type="text"
						placeholder="Pesquisar"
						variant="outlined"
						color="primary"
						inputProps={{ "data-testid": "InputBox" }}
						disabled={isDisabled}
					/>
				</ThemeProvider>

				<Grid item xs={12} sm={12} md={12}>
					<ThemeProvider theme={theme}>
						<Button
							onClick={handleButton}
							className={classes.button}
							color="primary"
							variant="contained"
							id="button"
							size="large"
						>
							Ir
						</Button>

						<FormControl
							sx={{ m: 1, minWidth: 120 }}
							className={classes.select}
						>
							<InputLabel id="selectLabel" className={classes.select_label}>
								Filtrar por:
							</InputLabel>
							<Select
								className={classes.select_box}
								value={value}
								onChange={handleSelect}
								variant="outlined"
								labelId="selectLabel"
								inputProps={{ "data-testid": "FilterSelect" }}
							>
								<MenuItem value="process_number" onClick={handleClick}>
									N??mero de processo
								</MenuItem>
								<MenuItem value="interested" onClick={handleClick}>
									Interessado
								</MenuItem>
								<MenuItem value="person_id" onClick={handleClick}>
									Servidor
								</MenuItem>
								<MenuItem value="sender_user" onClick={handleClick}>
									Servidor que encaminhou
								</MenuItem>
								<MenuItem value="subject_id" onClick={handleClick}>
									Assunto do documento
								</MenuItem>
								<MenuItem value="document_type_id" onClick={handleClick}>
									Tipo do documento
								</MenuItem>
								<MenuItem value="sender_unity" onClick={handleClick}>
									Unidade que encaminhou
								</MenuItem>
								<MenuItem value="temporality_date" onClick={handleClick}>
									Temporalidade
								</MenuItem>
								<MenuItem value="abbreviation_id" onClick={handleClick}>
									Caixa
								</MenuItem>
								<MenuItem value="shelf_id" onClick={handleClick}>
									Estante
								</MenuItem>
								<MenuItem value="is_filed/true" onClick={handleClickFiled}>
									Arquivado
								</MenuItem>
								<MenuItem value="is_filed/false" onClick={handleClickUnfiled}>
									Desarquivado
								</MenuItem>
								<MenuItem
									value="is_eliminated/true"
									onClick={handleClickEliminated}
								>
									Eliminado
								</MenuItem>
							</Select>
						</FormControl>
					</ThemeProvider>
				</Grid>
			</body>
		</div>
	);
}
