const template = (configContext) => {
  const {
    React,
  } = configContext.lib;

  const {
    Col,
    Cols,
    Panel,
    Row,
  } = configContext.layoutComponents;

  const {
    Field,
    InputTable,
  } = configContext.recordComponents;

  return (
    <Field name="document">
      <Panel name="info" collapsible>
        <Cols>
          <Col>
            <Field name="loanOutNumber" />
            <Field name="loanPurpose" />
          </Col>

          <Col>
            <Field name="collection" subpath="ns2:loansout_naturalhistory" />
          </Col>
        </Cols>

        <InputTable name="lender">
          <Field name="lendersAuthorizer" />
          <Field name="lendersContact" />
          <Field name="lendersAuthorizationDate" />
        </InputTable>

        <InputTable name="borrower">
          <Field name="borrower" />
          <Field name="borrowersContact" />
          <Field name="borrowersAuthorizer" />
          <Field name="borrowersAuthorizationDate" />
        </InputTable>

        <Cols>
          <Col>
            <Field name="specialConditionsOfLoan" />
            <Field name="loanOutNote" />
          </Col>

          <Col>
            <Field name="majorGroup" subpath="ns2:loansout_naturalhistory" />

            <Field name="geographyList" subpath="ns2:loansout_naturalhistory">
              <Field name="geography" />
            </Field>

            <Field name="taxonomyList" subpath="ns2:loansout_naturalhistory">
              <Field name="taxonomy" />
            </Field>

            <Field name="objKindList" subpath="ns2:loansout_naturalhistory">
              <Field name="objKind" />
            </Field>
          </Col>
        </Cols>

        <Field name="loanStatusGroupList">
          <Field name="loanStatusGroup">
            <Field name="loanStatus" />
            <Field name="loanStatusDate" />
            <Field name="loanStatusNote" />
          </Field>
        </Field>

        <Cols>
          <Col>
            <Field name="loanOutDate" />
            <Field name="shipDate" subpath="ns2:loansout_naturalhistory" />

            <Row>
              <Field name="transportMethod" subpath="ns2:loansout_naturalhistory" />
              <Field name="numPackages" subpath="ns2:loansout_naturalhistory" />
            </Row>

            <Field name="acknowledgeDate" subpath="ns2:loansout_naturalhistory" />
            <Field name="loanReturnDate" />
            <Field name="loanRenewalApplicationDate" />
          </Col>

          <Col>
            <Panel name="manualCount">
              <Field name="numLent" subpath="ns2:loansout_naturalhistory" />
              <Field name="numReturned" subpath="ns2:loansout_naturalhistory" />
              <Field name="balance" subpath="ns2:loansout_naturalhistory" />
              <Field name="discrepancy" subpath="ns2:loansout_naturalhistory" />
            </Panel>
          </Col>
        </Cols>
      </Panel>

      <Panel name="loanItem" collapsible collapsed>
        <Field name="loanoutItems" subpath="ns2:loansout_naturalhistory" />

        <Field name="objectGroupList" subpath="ns2:loansout_naturalhistory">
          <Field name="objectGroup">
            <Panel>
              <Cols>
                <Col>
                  <Field name="objectNumbers" />
                  <Field name="objectQuantity" />
                </Col>

                <Col>
                  <Field name="objectConditions" />
                  <Field name="objectNotes" />
                </Col>
              </Cols>
            </Panel>
          </Field>
        </Field>
      </Panel>

      <Panel name="loanReturn" collapsible collapsed>
        <Field name="returnGroupList" subpath="ns2:loansout_naturalhistory">
          <Field name="returnGroup">
            <Panel>
              <Cols>
                <Col>
                  <Field name="returnObjectNumbers" />
                  <Field name="returnQuantity" />
                  <Field name="returnDate" />
                </Col>

                <Col>
                  <Field name="returnDetermination" />
                  <Field name="returnNotes" />
                </Col>
              </Cols>
            </Panel>
          </Field>
        </Field>
      </Panel>

      <Panel name="loanTransfer" collapsible collapsed>
        <Field name="transferGroupList" subpath="ns2:loansout_naturalhistory">
          <Field name="transferGroup">
            <Panel>
              <Cols>
                <Col>
                  <Field name="transferDate" />
                  <Field name="transferOrg" />
                  <Field name="transferPerson" />
                </Col>

                <Col>
                  <Field name="transferDirector" />
                  <Field name="transferQuantity" />
                  <Field name="transferNotes" />
                </Col>
              </Cols>
            </Panel>
          </Field>
        </Field>
      </Panel>
    </Field>
  );
};

export default configContext => ({
  template: template(configContext),
});
