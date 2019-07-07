import React, { Component } from 'react';
import MUIDataTable from "mui-datatables";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

import stuff from './stuff.json';

class SortyTable extends Component {

	getMuiTheme = () => createMuiTheme({
		overrides: {
			// special styling to obfuscate Material-UI aesthetic ^_^
			MUIDataTableToolbar: {
				root: {
					backgroundColor: "wheat",
				}
			},
			MUIDataTableHeadCell: {
				root: {
					color: "maroon",
				}
			},
			MUIDataTableBodyCell: {
				root: {
					backgroundColor: "ivory",
					color: "navy",
				}
			},
			MUIDataTableBodyRow: {
				root: {
					border: "3px solid forestgreen",
				}
			},
		}
	});

	render(){
	const JSONdata = stuff;
	const JSONcolumns = [
	{
		name: "Name",
		label: "Name of Item",
		options: {
		   filter: false,
		   sort: true,
  		}
	},
	{
		name: "ImageSrc",
		label: "Image raw filename",
		options: {
		   filter: false,
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
		   filter: false,
		   sort: true,
  		}
	}
	];
	const JSONoptions = {
	  filterType: "checkbox",
	  pagination: false,
	  selectableRows: "none",
	};
		return(
			<MuiThemeProvider theme={this.getMuiTheme()}>
				<MUIDataTable
				  title={"Stardew Stuff"}
				  data={JSONdata}
				  columns={JSONcolumns}
				  options={JSONoptions}
				/>
			</MuiThemeProvider>
		);
	}
}
export default SortyTable;