const template = (configContext) => {
  const {
    React,
  } = configContext.lib;

  const {
    Col,
    Cols,
  } = configContext.layoutComponents;

  const {
    Field,
  } = configContext.recordComponents;

  return (
    <Field name="document">
      <Field
        name="relation-list-item"
        subpath="rel:relations-common-list"
        showChildren={false}
        showSiblings={false}
      />

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

      <Field name="taxonNote" />
    </Field>
  );
};

export default configContext => ({
  template: template(configContext),
});
