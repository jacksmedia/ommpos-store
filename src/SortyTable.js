import React from 'react';
import MUIDataTable from "mui-datatables";

import stuff from './stuff.json';

export default function SortyTable() {

	const JSONcolumns = ["Name", "ImageSrc", "When", "Found", "BaseSellPrice"];
	const JSONdata = stuff;
	const JSONoptions = {
	  filterType: 'checkbox',
	};

	return(
		<MUIDataTable
		  title={"Employee List"}
		  data={JSONdata}
		  columns={JSONcolumns}
		  options={JSONoptions}
		/>
	);
}