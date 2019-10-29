import { defineMessages } from 'react-intl';

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
  } = configContext.recordComponents;

  return (
    <Field name="document">
      <Panel name="id" collapsible>
        <Cols>
          <Col>
            <Field name="objectNumber" />
          </Col>

        </Cols>

        <Field name="taxonomicIdentGroupList" subpath="ns2:collectionobjects_naturalhistory">
          <Field name="taxonomicIdentGroup">
            <Panel>
              <Row>
                <Field name="taxon" />
                <Field name="qualifier" />
              </Row>
            </Panel>
          </Field>
        </Field>
      </Panel>

      <Panel name="locality" collapsible collapsed>
        <Field name="localityGroupList" subpath="ns2:collectionobjects_naturalhistory">
          <Field name="localityGroup">
            <Panel>
              <Field name="fieldLocCounty" />
              <Field name="fieldLocState" />
              <Field name="fieldLocCountry" />
            </Panel>
          </Field>
        </Field>
      </Panel>
    </Field>
  );
};

export default configContext => ({
  messages: defineMessages({
    name: {
      id: 'form.collectionobject.student.name',
      defaultMessage: 'Student Template',
    },
  }),
  template: template(configContext),
});
