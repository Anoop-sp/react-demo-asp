import React, { Component, Fragment } from "react";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import PageTitleAlt2 from "../../../Layout/AppMain/PageTitleAlt2";
import PageTitleAlt3 from "../../../Layout/AppMain/PageTitleAlt3";

import Tabs from "rc-tabs";
import ScrollableInkTabBar from "rc-tabs/lib/ScrollableInkTabBar";



import PageTitleAlt from '../../../Layout/AppMain/PageTitleAlt';

import Sticky from 'react-stickynode';

import classnames from 'classnames';
import { Elastic } from 'react-burgers'
import {
    TabContent, TabPane, DropdownItem,
    CardBody, Collapse, FormGroup, Label, Input, FormFeedback, FormText,
    Card, Col, Row, CardHeader, CardTitle,
    Button
} from 'reactstrap';

// Examples
import CRMDashboard1 from "./Examples/Variation1";
import CRMDashboard2 from "./Examples/Variation2";

export default class CRMDashboard extends Component {
  render() {
    return (
      <Fragment>
        <TransitionGroup>
          <CSSTransition component="div" classNames="TabsAnimation" appear={true}
            timeout={1500} enter={false} exit={false}>
            <div>
              <PageTitleAlt3 heading="CRM Dashboard"/>
            </div>
          </CSSTransition>
        </TransitionGroup>
        <Card className="mb-3">
              <CardBody>
              <Row>
                                                                    <Col md={3}>
                                                                        <FormGroup>
                                                                        <FormGroup>
                        <Label for="exampleCustomSelect">Custom Select</Label>
                        <Input type="select" id="exampleCustomSelect" name="customSelect">
                          <option value="">Select</option>
                          <option>Value 1</option>
                          <option>Value 2</option>
                          <option>Value 3</option>
                          <option>Value 4</option>
                          <option>Value 5</option>
                        </Input>
                      </FormGroup>
                                                                        </FormGroup>
                                                                    </Col>
                                                                    <Col md={3}>
                                                                        <FormGroup>
                                                                        <FormGroup>
                        <Label for="exampleCustomSelect">Custom Select</Label>
                        <Input type="select" id="exampleCustomSelect" name="customSelect">
                          <option value="">Select</option>
                          <option>Value 1</option>
                          <option>Value 2</option>
                          <option>Value 3</option>
                          <option>Value 4</option>
                          <option>Value 5</option>
                        </Input>
                      </FormGroup>
                                                                        </FormGroup>
                                                                    </Col>
                                                                    <Col md={3}>
                                                                        <FormGroup>
                                                                        <FormGroup>
                        <Label for="exampleCustomSelect">Custom Select</Label>
                        <Input type="select" id="exampleCustomSelect" name="customSelect">
                          <option value="">Select</option>
                          <option>Value 1</option>
                          <option>Value 2</option>
                          <option>Value 3</option>
                          <option>Value 4</option>
                          <option>Value 5</option>
                        </Input>
                      </FormGroup>
                                                                        </FormGroup>
                                                                    </Col>
                                                                    






                                                                    <Col md={3}>
                                                                        <FormGroup>
                                                                        <FormGroup>
                                                                        <Label for="exampleCustomSelect" className="d-block">&nbsp;</Label>
                                                                        <Button color="warning" size="lg"
                                                            className="btn-wide btn-shadow  w-100" onClick={() => {
                                                                this.toggle('2'); }}>
                                                           Search
                                                        </Button>
                      </FormGroup>
                                                                        </FormGroup>
                                                                    </Col>
                                                                  </Row>
              </CardBody>
            </Card>
      </Fragment>
    );
  }
}
