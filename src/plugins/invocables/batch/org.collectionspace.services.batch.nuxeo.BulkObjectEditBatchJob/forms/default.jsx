const template = (configContext) => {
  const {
    React,
  } = configContext.lib;

  const {
    Field,
    InputTable,
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
        </Col>

        <Col> 
          <Field name="fieldCollector" />
          <Field name="numberType" />
        </Col>

        <Col>
          <Field name="objectName" />
          <Field name="taxon" />
        </Col>
      </Cols>

      <Field name="briefDescription" />
    </Field>
  );
};

export default configContext => ({
  template: template(configContext),
});
