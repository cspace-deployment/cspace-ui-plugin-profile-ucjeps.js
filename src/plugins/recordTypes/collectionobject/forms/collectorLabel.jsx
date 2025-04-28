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
    InputTable,
  } = configContext.recordComponents;

  return (
    <Field name="document">
      <Panel name="collectorLabel" collapsible>
        <Field name="labelHeader" subpath="ns2:collectionobjects_naturalhistory" />

        <Field name="taxonomicIdentGroupList" subpath="ns2:collectionobjects_naturalhistory">
          <Field name="taxonomicIdentGroup">
            <Panel>
              <Row>
                <Field name="taxon" />
                <Field name="qualifier" />
              </Row>

              <InputTable name="taxonIdent">
                <Field name="identBy" />
                <Field name="identDateGroup" />
                <Field name="institution" />
              </InputTable>

              <Cols>
                <Col>
                  <Field name="identKind" />

                  <InputTable name="taxonRef">
                    <Field name="reference" />
                    <Field name="refPage" />
                  </InputTable>
                </Col>

                <Field name="notes" />
              </Cols>
            </Panel>
          </Field>
        </Field>

        <Field name="referenceGroupList">
          <Field name="referenceGroup">
            <Field name="reference" />
            <Field name="referenceNote" />
          </Field>
        </Field>

        <Field name="localNameGroupList" subpath="ns2:collectionobjects_naturalhistory">
          <Field name="localNameGroup">
            <Field name="localName" />
            <Field name="localNameLanguage" />
          </Field>
        </Field>

        <Field name="localityGroupList" subpath="ns2:collectionobjects_naturalhistory">
          <Field name="localityGroup">
            <Panel>
              <Cols>
                <Col>
                  <Field name="fieldLocVerbatim" />
                </Col>
              </Cols>

              <Row>
                <Field name="fieldLocCounty" />
                <Field name="fieldLocState" />
                <Field name="fieldLocCountry" />
              </Row>

              <Row>
                <Field name="vLatitude" />
                <Field name="vLongitude" />
              </Row>

              <Cols>
                <Col>
                  <InputTable name="depth">
                    <Field name="vDepth" />
                    <Field name="minDepth" />
                    <Field name="maxDepth" />
                    <Field name="depthUnit" />
                  </InputTable>
                </Col>

                <Col>
                  <InputTable name="elevation">
                    <Field name="vElevation" />
                    <Field name="minElevation" />
                    <Field name="maxElevation" />
                    <Field name="elevationUnit" />
                  </InputTable>
                </Col>
              </Cols>
            </Panel>
          </Field>
        </Field>

        <Cols>
          <Col>
            <Field name="fieldCollectionNote" />

            <Field name="briefDescriptions">
              <Field name="briefDescription" />
            </Field>

            <Field name="comments">
              <Field name="comment" />
            </Field>
          </Col>

          <Col>
            <Field name="sex" />
            <Field name="phase" />

            <Field name="forms">
              <Field name="form" />
            </Field>

            <Field name="fieldCollectionDateGroup" />

            <Field name="fieldCollectors">
              <Field name="fieldCollector" />
            </Field>

            <Field name="fieldCollectionNumber" />

            <Field
              name="fieldCollectionNumberAssignor"
              subpath="ns2:collectionobjects_naturalhistory"
            />
          </Col>
        </Cols>

        <Field name="associatedTaxaGroupList" subpath="ns2:collectionobjects_naturalhistory">
          <Field name="associatedTaxaGroup">
            <Field name="associatedTaxon" />
            <Field name="commonName" />
            <Field name="interaction" />
          </Field>
        </Field>

        <Row>
          <Field name="objectCountNumber" subpath="ns2:collectionobjects_naturalhistory" />

          <Field name="objectCountGroupList">
            <Field name="objectCountGroup">
              <Field name="objectCount" />
              {/* <Field name="objectCountType" /> */}
              <Field name="objectCountCountedBy" />
              <Field name="objectCountDate" />
              <Field name="objectCountNote" />
            </Field>
          </Field>
        </Row>

        <Field name="labelFooter" subpath="ns2:collectionobjects_naturalhistory" />
      </Panel>
    </Field>
  );
};

export default (configContext) => ({
  messages: defineMessages({
    name: {
      id: 'form.collectionobject.collector.name',
      defaultMessage: 'Collector Label Template',
    },
  }),
  template: template(configContext),
});
