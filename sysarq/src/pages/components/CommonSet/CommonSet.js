import React from "react";
import PropTypes from "prop-types";

import Grid from "@material-ui/core/Grid";

import DocumentDateInput from "../Inputs/DocumentDateInput";
import ReceivedDateInput from "../Inputs/ReceivedDateInput";
import DocumentTypeInput from "../Inputs/DocumentTypeInput";
import SenderUnitInput from "../Inputs/SenderUnitInput";
import NotesInput from "../Inputs/NotesInput";

const CommonSet = ({
	setDocumentDateHelperText,
	setDocumentDate,
	documentDate,
	documentDateHelperText,
	setReceivedDateHelperText,
	setReceivedDate,
	receivedDate,
	receivedDateHelperText,
	setDocumentTypeHelperText,
	setDocumentType,
	connectionError,
	documentType,
	documentTypeHelperText,
	setSenderUnitHelperText,
	setSenderUnit,
	senderUnit,
	units,
	senderUnitHelperText,
	setNotes,
	notes,
	isDetailPage,
}) => (
	<>
		<Grid item xs={12} sm={6} md={4}>
			<DocumentDateInput
				isDetailPage={isDetailPage}
				setHelperText={setDocumentDateHelperText}
				set={setDocumentDate}
				documentDate={documentDate}
				helperText={documentDateHelperText}
			/>
		</Grid>

		<Grid item xs={12} sm={6} md={4}>
			<ReceivedDateInput
				setHelperText={setReceivedDateHelperText}
				set={setReceivedDate}
				receivedDate={receivedDate}
				helperText={receivedDateHelperText}
				isDetailPage={isDetailPage}
			/>
		</Grid>

		<DocumentTypeInput
			setHelperText={setDocumentTypeHelperText}
			set={setDocumentType}
			connectionError={connectionError}
			documentType={documentType}
			documentTypeHelperText={documentTypeHelperText}
			isDetailPage={isDetailPage}
		/>

		<SenderUnitInput
			setHelperText={setSenderUnitHelperText}
			set={setSenderUnit}
			senderUnit={senderUnit}
			units={units}
			senderUnitHelperText={senderUnitHelperText}
			isDetailPage={isDetailPage}
		/>

		<NotesInput set={setNotes} notes={notes} isDetailPage={isDetailPage} />
	</>
);

CommonSet.propTypes = {
	setDocumentDateHelperText: PropTypes.func.isRequired,
	setDocumentDate: PropTypes.func.isRequired,
	documentDate: PropTypes.instanceOf(Date).isRequired,
	documentDateHelperText: PropTypes.string.isRequired,
	setReceivedDateHelperText: PropTypes.func.isRequired,
	setReceivedDate: PropTypes.func.isRequired,
	receivedDate: PropTypes.instanceOf(Date).isRequired,
	receivedDateHelperText: PropTypes.string.isRequired,
	setDocumentTypeHelperText: PropTypes.func.isRequired,
	setDocumentType: PropTypes.func.isRequired,
	connectionError: PropTypes.func.isRequired,
	documentType: PropTypes.string.isRequired,
	documentTypeHelperText: PropTypes.string.isRequired,
	setSenderUnitHelperText: PropTypes.func.isRequired,
	setSenderUnit: PropTypes.func.isRequired,
	senderUnit: PropTypes.string.isRequired,
	units: PropTypes.arrayOf(PropTypes.string).isRequired,
	senderUnitHelperText: PropTypes.string.isRequired,
	setNotes: PropTypes.func.isRequired,
	notes: PropTypes.string.isRequired,
	isDetailPage: PropTypes.string.isRequired,
};

export default CommonSet;
