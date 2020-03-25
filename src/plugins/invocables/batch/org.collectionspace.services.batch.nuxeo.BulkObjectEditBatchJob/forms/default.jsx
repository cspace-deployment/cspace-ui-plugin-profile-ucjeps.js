const template = (configContext) => {
  const {
    React,
  } = configContext.lib;

  const {
    Field,
  } = configContext.recordComponents;

  const {
    Col,
    Cols,
  } = configContext.layoutComponents;

  return (
    <Field name="params">
      <Cols>
        <Col>
          <Field name="numberOfObjects" />

          <Field name="otherNumberList">
            <Field name="otherNumber">
              <Field name="numberValue" />
              <Field name="numberType" />
            </Field>
          </Field>

          <Field name="fieldCollectionDate" />
        </Col>

        <Col>
          <Field name="assocPeopleGroup">
            <Field name="assocPeople" />
          </Field>

          <Field name="taxonomicIdentGroup">
            <Field name="taxon" />
          </Field>

          <Field name="fieldCollectors">
            <Field name="fieldCollector" />
          </Field>

        </Col>
      </Cols>

      <Field name="briefDescriptions">
        <Field name="briefDescription" />
      </Field>
    </Field>
  );
};

export default configContext => ({
  template: template(configContext),
});
