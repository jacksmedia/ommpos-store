import React, { Component } from 'react';
import MUIDataTable from "mui-datatables";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

import stuff from './stuff.json';

class SortyTable extends Component {


	getMuiTheme = () => createMuiTheme({
		overrides: {
			// special styling to obfuscate Material-UI aesthetic ^_^
			MUIDataTableBodyCell: {
				root: {
					backgroundColor: "ivory"
				}
			}
		}
	});

	render(){
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
	  filterType: 'checkbox',
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