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
        <Field name="taxonTermGroupList">
          <Field name="taxonTermGroup">
            <Panel>
              <Row>
                <Field name="termDisplayName" />
                <Field name="termFormattedDisplayName" />
                <Field name="termQualifier" />
                <Field name="termStatus" />
              </Row>

              <Row>
                <Field name="termType" />
                <Field name="termFlag" />
                <Field name="taxonomicStatus" />
                <Field name="termLanguage" />
                <Field name="termPrefForLang" />
              </Row>

              <InputTable name="termSource">
                <Field name="termSource" />
                <Field name="termSourceDetail" />
                <Field name="termSourceID" />
                <Field name="termSourceNote" />
              </InputTable>
            </Panel>
          </Field>
        </Field>

        <Cols>
          <Col>
            <Field name="taxonRank" />
            <Field name="taxonMajorGroup" subpath="ns2:taxon_ucjeps" />
          </Col>

          <Col>
            <Field name="family" subpath="ns2:taxon_naturalhistory" />
            <Field name="taxonCurrency" />
          </Col>
        </Cols>

        <Field name="taxonAuthorGroupList">
          <Field name="taxonAuthorGroup">
            <Field name="taxonAuthor" />
            <Field name="taxonAuthorType" />
          </Field>
        </Field>

        <Cols>
          <Col>
            <Field name="taxonYear" />
            <Field name="taxonIsNamedHybrid" />
          </Col>

          <Col>
            <Field name="taxonCitationList">
              <Field name="taxonCitation" />
            </Field>

            <Field name="taxonBasionym" subpath="ns2:taxon_naturalhistory" />
          </Col>
        </Cols>

        <Field name="taxonNote" />

        <Field name="commonNameGroupList">
          <Field name="commonNameGroup">
            <Field name="commonName" />
            <Field name="commonNameLanguage" />
            <Field name="commonNameSource" />
            <Field name="commonNameSourceDetail" />
          </Field>
        </Field>

        <Field name="relatedTermGroupList" subpath="ns2:taxon_naturalhistory">
          <Field name="relatedTermGroup">
            <Field name="relatedTerm" />
            <Field name="relatedTermType" />
            <Field name="relatedTermSource" />
            <Field name="relatedTermSourceDetail" />
          </Field>
        </Field>
      </Panel>

      <Panel name="hierarchy" collapsible collapsed>
        <Field name="relation-list-item" subpath="rel:relations-common-list" />
      </Panel>
    </Field>
  );
};

export default configContext => ({
  template: template(configContext),
});
