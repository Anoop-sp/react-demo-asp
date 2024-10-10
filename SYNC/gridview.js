import { createRoot } from 'react-dom/client';
import './index.css';
import * as React from 'react';
import { L10n } from '@syncfusion/ej2-base';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Inject, Sort, Toolbar, Filter, Edit } from '@syncfusion/ej2-react-grids';
import { data } from './data';


L10n.load({
    'en-US': {
        'pager': {
            'currentPageInfo': '',
            'totalItemsInfo': '{1} to {2} of {0}',
        }
    }
});
function Paging() {
    const filterSettings = { type: 'Excel' };
    const toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    const editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
    const customeridRule = { required: true, minLength: 5 };
    const orderidRules = { required: true, number: true };
    const freightRules = { required: true, min: 0 };
    return (<div className='control-pane'>
            <div className='control-section paging-api'>
                <GridComponent dataSource={data} locale='en-US' allowPaging={true} allowSorting={true} editSettings={editSettings} allowFiltering={true} filterSettings={filterSettings} toolbar={toolbar} height={365} pageSettings={{ pageCount: 4, pageSizes: true }}>
                    <ColumnsDirective>
                        <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign='Right' validationRules={orderidRules} isPrimaryKey={true}></ColumnDirective>
                        <ColumnDirective field='CustomerName' headerText='Customer Name' width='150' validationRules={customeridRule}></ColumnDirective>
                        <ColumnDirective field='OrderDate' headerText='Order Date' width='130' format='yMd' textAlign='Right' editType='datepickeredit'/>
                        <ColumnDirective field='Freight' headerText='Freight' width='120' format='C2' textAlign='Right' validationRules={freightRules} editType='numericedit'/>
                        <ColumnDirective field='ShipCountry' headerText='Ship Country' width='170' editType='dropdownedit'></ColumnDirective>
                    </ColumnsDirective>
                    <Inject services={[Page, Sort, Toolbar, Filter, Edit]}/>
                </GridComponent>
            </div>
        </div>);
}
export default Paging;

const root = createRoot(document.getElementById('sample'));
root.render(<Paging />);
