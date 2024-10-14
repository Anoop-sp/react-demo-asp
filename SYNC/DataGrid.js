import * as React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Toolbar, Edit, Filter } from '@syncfusion/ej2-react-grids';
import { data } from './data';
function CheckboxSelection() {
    const selectionsettings = { persistSelection: true };
    let gridInstance;
    const filterSettings = { type: 'Excel' };
    const toolbarOptions = ['Delete'];
    const editSettings = { allowDeleting: true };
    return (<div className='control-pane'>
            <div className='control-section'>
                <GridComponent dataSource={data} ref={grid => gridInstance = grid} enableHover={false} allowPaging={true} pageSettings={{ pageCount: 5 }} allowFiltering={true} filterSettings={filterSettings} selectionSettings={selectionsettings} toolbar={toolbarOptions} editSettings={editSettings}>
                    <ColumnsDirective>
                        <ColumnDirective type='checkbox' width='50'></ColumnDirective>
                        <ColumnDirective field='OrderID' isPrimaryKey={true} headerText='Order ID' width='120' textAlign="Right"></ColumnDirective>
                        <ColumnDirective field='CustomerName' headerText='Customer Name' width='150'></ColumnDirective>
                        <ColumnDirective field='OrderDate' headerText='Order Date' width='130' format='yMd' textAlign='Right'/>
                        <ColumnDirective field='Freight' headerText='Freight' width='120' format='C2' textAlign='Right'/>
                        <ColumnDirective field='ShippedDate' headerText='Shipped Date' width='130' format="yMd" textAlign="Right"></ColumnDirective>
                    </ColumnsDirective>
                    <Inject services={[Page, Selection, Toolbar, Edit, Filter]}/>
                </GridComponent>
            </div>
        </div>);
}
export default CheckboxSelection;
