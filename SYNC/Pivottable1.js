import * as React from "react";
import {
  PivotViewComponent,
  Inject,
  FieldList,
  CalculatedField,
  Toolbar,
  PDFExport,
  ExcelExport,
  ConditionalFormatting,
  NumberFormatting,
} from "@syncfusion/ej2-react-pivotview";
import { Pivot_Data } from "./pivot-data/data_source";

/**
 * PivotView Toolbar Sample
 */
let dataSourceSettings = {
  enableSorting: true,
  columns: [
    { name: "Year" },
    { name: "Order_Source", caption: "Order Source" },
  ],
  rows: [{ name: "Country" }, { name: "Products" }],
  formatSettings: [{ name: "Amount", format: "C0" }],
  dataSource: Pivot_Data,
  expandAll: false,
  values: [
    { name: "Sold", caption: "Units Sold" },
    { name: "Amount", caption: "Sold Amount" },
  ],
  filters: [{ name: "Product_Categories", caption: "Product Categories" }],
};
function PivotToolbar1() {
  let pivotObj;
  let toolbarOptions = [
    "New",
    "Save",
    "SaveAs",
    "Rename",
    "Remove",
    "Load",
    "Grid",
    "Chart",
    "Export",
    "SubTotal",
    "GrandTotal",
    "Formatting",
    "FieldList",
  ];
  function saveReport(args) {
    let reports = [];
    let isSaved = false;
    if (localStorage.pivotviewReports && localStorage.pivotviewReports !== "") {
      reports = JSON.parse(localStorage.pivotviewReports);
    }
    if (args.report && args.reportName && args.reportName !== "") {
      reports.map(function (item) {
        if (args.reportName === item.reportName) {
          item.report = args.report;
          isSaved = true;
        }
      });
      if (!isSaved) {
        reports.push(args);
      }
      localStorage.pivotviewReports = JSON.stringify(reports);
    }
  }
  function fetchReport(args) {
    let reportCollection = [];
    let reeportList = [];
    if (localStorage.pivotviewReports && localStorage.pivotviewReports !== "") {
      reportCollection = JSON.parse(localStorage.pivotviewReports);
    }
    reportCollection.map(function (item) {
      reeportList.push(item.reportName);
    });
    args.reportName = reeportList;
  }
  function loadReport(args) {
    let reportCollection = [];
    if (localStorage.pivotviewReports && localStorage.pivotviewReports !== "") {
      reportCollection = JSON.parse(localStorage.pivotviewReports);
    }
    reportCollection.map(function (item) {
      if (args.reportName === item.reportName) {
        args.report = item.report;
      }
    });
    if (args.report) {
      pivotObj.dataSourceSettings = JSON.parse(args.report).dataSourceSettings;
    }
  }
  function removeReport(args) {
    let reportCollection = [];
    if (localStorage.pivotviewReports && localStorage.pivotviewReports !== "") {
      reportCollection = JSON.parse(localStorage.pivotviewReports);
    }
    for (let i = 0; i < reportCollection.length; i++) {
      if (reportCollection[i].reportName === args.reportName) {
        reportCollection.splice(i, 1);
      }
    }
    if (localStorage.pivotviewReports && localStorage.pivotviewReports !== "") {
      localStorage.pivotviewReports = JSON.stringify(reportCollection);
    }
  }
  function renameReport(args) {
    let reportsCollection = [];
    if (localStorage.pivotviewReports && localStorage.pivotviewReports !== "") {
      reportsCollection = JSON.parse(localStorage.pivotviewReports);
    }
    if (args.isReportExists) {
      for (let i = 0; i < reportsCollection.length; i++) {
        if (reportsCollection[i].reportName === args.rename) {
          reportsCollection.splice(i, 1);
        }
      }
    }
    reportsCollection.map(function (item) {
      if (args.reportName === item.reportName) {
        item.reportName = args.rename;
      }
    });
    if (localStorage.pivotviewReports && localStorage.pivotviewReports !== "") {
      localStorage.pivotviewReports = JSON.stringify(reportsCollection);
    }
  }
  function newReport() {
    pivotObj.setProperties(
      {
        dataSourceSettings: { columns: [], rows: [], values: [], filters: [] },
      },
      false
    );
  }
  function beforeToolbarRender(args) {
    args.customToolbar.splice(6, 0, {
      type: "Separator",
    });
    args.customToolbar.splice(9, 0, {
      type: "Separator",
    });
  }
  function chartOnLoad(args) {
    // eslint-disable-next-line no-restricted-globals
    let selectedTheme = location.hash.split("/")[1];
    selectedTheme = selectedTheme ? selectedTheme : "Material";
    args.chart.theme = (
      selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)
    )
      .replace(/-dark/i, "Dark")
      .replace(/contrast/i, "Contrast")
      .replace(/-highContrast/i, "HighContrast");
  }
  return (
    <div className="control-pane">
      <div
        className="control-section"
        id="pivot-table-section"
        style={{ overflow: "initial" }}
      >
        <PivotViewComponent
          id="PivotView"
          ref={(scope) => {
            pivotObj = scope;
          }}
          dataSourceSettings={dataSourceSettings}
          width={"100%"}
          height={"450"}
          showFieldList={true}
          gridSettings={{ columnWidth: 140 }}
          allowExcelExport={true}
          allowNumberFormatting={true}
          allowConditionalFormatting={true}
          allowPdfExport={true}
          showToolbar={true}
          allowCalculatedField={true}
          displayOption={{ view: "Both" }}
          toolbar={toolbarOptions}
          newReport={newReport.bind(this)}
          renameReport={renameReport.bind(this)}
          removeReport={removeReport.bind(this)}
          loadReport={loadReport.bind(this)}
          fetchReport={fetchReport.bind(this)}
          saveReport={saveReport.bind(this)}
          toolbarRender={beforeToolbarRender.bind(this)}
          chartSettings={{
            title: "Sales Analysis",
            load: chartOnLoad.bind(this),
          }}
        >
          <Inject
            services={[
              FieldList,
              CalculatedField,
              Toolbar,
              PDFExport,
              ExcelExport,
              ConditionalFormatting,
              NumberFormatting,
            ]}
          />
        </PivotViewComponent>
      </div>
    </div>
  );
}
export default PivotToolbar1;
