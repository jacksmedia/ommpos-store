import React from 'react';
import MUIDataTable from "mui-datatables";

import stuff from './stuff.json';

export default function SortyTable() {

	const JSONcolumns = [
	{
		name: "Name",
		label: "Name of Item",
		options: {
		   filter: true,
		   sort: true,
  		}
	},
	{
		name: "ImageSrc",
		label: "Image raw filename",
		options: {
		   filter: true,
		   sort: false,
  		}
	},
	{
		name: "When",
		label: "Season",
		options: {
		   filter: true,
		   sort: true,
  		}
	},
	{
		name: "Found",
		label: "Acquired by",
		options: {
		   filter: true,
		   sort: true,
  		}
	},
	{
		name: "BaseSellPrice",
		label: "BaseSellPrice",
		options: {
		   filter: true,
		   sort: true,
  		}
	}
	];
	const JSONdata = stuff;
	const JSONoptions = {
	  filterType: 'textField',
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