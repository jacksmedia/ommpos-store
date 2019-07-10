import React, { Component } from 'react';
import ReactDOM from "react-dom";
import MUIDataTable from "mui-datatables";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { FormControlLabel, TextField } from '@material-ui/core';

import stuff from './stuff.json';

class SortyTable extends Component {

	getMuiTheme = () => createMuiTheme({
		overrides: {
			// some baseline styling to obfuscate Material-UI aesthetic ^_^
			MUIDataTableBody: {
				root: {
					maxWidth: "100vw",
				}
			},
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
					border: "2px brown solid",
					borderRadius: "6px",
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
		   customBodyRender: (value, tableMeta ) => (
	            <FormControlLabel
	               className="wheat-fade"
	              control={
	              	<div>
	              	<img src={require('./img/' + value.replace(/ /g,"_") + '.png')} className='ikon'/>
	              	<span>{value}</span>
	              	</div>
	              }
	            />
           )
  		}
	},
	{
		name: "BaseSellPrice",
		label: "BaseSellPrice",
		options: {
		   filter: true,
		   sort: true,
		   customBodyRender: (value, tableMeta ) => (
	            <FormControlLabel
	               className="wheat-fade maxy"
	              control={
	              	<span>{value+'g'}</span>
	              }
	            />
           )
  		}
	},
	{
		name: "When",
		label: "Season",
		options: {
		   filter: true,
		   sort: true,
		   customBodyRender: (value, tableMeta ) => (
	            <FormControlLabel
	              control={
	              	<div className={""+ value +" maxy"}>
	              	{value}
	              	</div>
	              }
	            />
           )
  		}
	},
	{
		name: "Type",
		label: "Type",
		options: {
		   filter: true,
		   sort: true,
		   customBodyRender: (value, tableMeta ) => (
	            <FormControlLabel
	               className="wheat-fade maxy"
	              control={
	              	<div className={""+ value +""}>
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