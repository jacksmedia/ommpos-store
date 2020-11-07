import React, { Component } from 'react';
import MUIDataTable from "mui-datatables";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { FormControlLabel } from '@material-ui/core';

import stuff from './stuff.json';

class SortyTable extends Component {

	getMuiTheme = () => createMuiTheme({
		breakpoints: {
			values: {
		      xs: 0,
		      sm: 300,
		      md: 325,
		      lg: 768,
		      xl: 1100
		    }
		},
		overrides: {
			// some baseline styling to tweak Material-UI aesthetic ^_^
			MUIDataTableBody: {
				root: {
					width: "100vw",
				}
			},
			MUIDataTableToolbar: {
				root: {
				}
			},
			MUIDataTableHeadCell: {
				root: {
					color: "maroon",
				}
			},
			MUIDataTableBodyCell: {
				root: {
					backgroundColor: "snow",
					color: "navy",
				}
			},
			MUIDataTableBodyRow: {
				root: {
					border: "2px green solid",
				}
			},
		}
	});

	render(){
	const JSONdata = stuff;
	const JSONcolumns = [
	{
		name: "item",
		label: "Name of Item",
		options: {
		   filter: false,
		   sort: true,
		   customBodyRender: (value, tableMeta ) => (
	            <FormControlLabel
	               className="maxy"
	              control={
	              	<div>
	              	<span>{value}</span>
	              	</div>
	              }
	            />
           )
  		}
	},
	{
		name: "price",
		label: "Size",
		options: {
		   filter: true,
		   sort: true,
		   customBodyRender: (value, tableMeta ) => (
	            <FormControlLabel
	               className="maxy"
	              control={
	              	<span>{value+'g'}</span>
	              }
	            />
           )
  		}
	},
	{
		name: "category",
		label: "Type",
		options: {
		   filter: true,
		   sort: true,
		   customBodyRender: (value, tableMeta ) => (
	            <FormControlLabel
	               className="maxy"
	              control={
	              	<div className={""}>
	              	{value}
	              	</div>
	              }
	            />
           )
  		}
	},
	
	];
	const JSONoptions = {
	  filterType: "checkbox",
	  pagination: false,
	  selectableRows: "none",
	  onFilterChange: (changedColumn, filterList) => {
        console.log(changedColumn, filterList);
      },
	};
		return(
			<MuiThemeProvider theme={this.getMuiTheme()}>
				<MUIDataTable
				  title={"Store Inventory (Click 🔍 or 🥞 to Search ➡️)"}
				  data={JSONdata}
				  columns={JSONcolumns}
				  options={JSONoptions}
				/>
			</MuiThemeProvider>
		);
	}
}
export default SortyTable;