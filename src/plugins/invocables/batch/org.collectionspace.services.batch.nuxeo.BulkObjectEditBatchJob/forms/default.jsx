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
          <Field name="assocPeople" />
          <Field name="numberValue" />
          <Field name="taxon" />
        </Col>

        <Col>
          <Field name="fieldCollector" />
          <Field name="numberType" />
        </Col>

        <Col>
          <Field name="objectName" />
        </Col>
      </Cols>

      <Field name="briefDescription" />
    </Field>
  );
};

export default (configContext) => ({
  template: template(configContext),
});
