const template = (configContext) => {
  const {
    React,
  } = configContext.lib;

  const {
    CompoundInput,
  } = configContext.inputComponents;

  const {
    Col,
    Cols,
    Panel,
  } = configContext.layoutComponents;

  const {
    Field,
    Subrecord,
  } = configContext.recordComponents;

  const {
    extensions,
  } = configContext.config;

  return (
    <Field name="document">
      <Panel name="media" collapsible>
        <Cols>
          <Col>
            <Field name="identificationNumber" />
            <Field name="scientificTaxonomy" subpath="ns2:media_ucjeps" />
            <Field name="title" />
            <Field name="publishToList">
              <Field name="publishTo" />
            </Field>
          </Col>

          <Col>
            <Field name="mediaOtherNumberList" subpath="ns2:media_ucjeps">
              <Field name="mediaOtherNumber">
                <Field name="numberValue" />
                <Field name="numberType" />
              </Field>
            </Field>

            <Field name="handwritten" subpath="ns2:media_ucjeps" />
            <Field name="postToPublic" subpath="ns2:media_ucjeps" />
          </Col>
        </Cols>

        <Panel name="file" collapsible>
          <Subrecord name="blob" showDetachButton />
        </Panel>

        <Field name="externalUrl" />

        {extensions.dimension.form}

        <Cols>
          <Col>
            <Field name="majorCategory" subpath="ns2:media_ucjeps" />

            <Field name="morphologyCategories" subpath="ns2:media_ucjeps">
              <Field name="morphologyCategory" />
            </Field>

            <Field name="contributor" />
            <Field name="creator" />

            <Field name="languageList">
              <Field name="language" />
            </Field>

            <Field name="publisher" />

            <Field name="relationList">
              <Field name="relation" />
            </Field>

            <Field name="persons" subpath="ns2:media_ucjeps">
              <Field name="person" />
            </Field>

            <Field name="collector" subpath="ns2:media_ucjeps" />
          </Col>

          <Col>
            <Field name="typeList">
              <Field name="type" />
            </Field>

            <Field name="coverage" />

            <Field name="dateGroupList">
              <Field name="dateGroup" />
            </Field>

            <Field name="source" />

            <Field name="subjectList">
              <Field name="subject" />
            </Field>

            <Field name="places" subpath="ns2:media_ucjeps">
              <Field name="place" />
            </Field>

            <Field name="mediaTaxaGroupList" subpath="ns2:media_ucjeps">
              <Field name="mediaTaxaGroup">
                <Field name="associatedTaxon" />
                <Field name="commonName" />
                <Field name="interaction" />
              </Field>
            </Field>

            <Field name="copyrightStatement" />
            <Field name="rightsHolder" />
          </Col>
        </Cols>

        <Field name="description" />

        <Panel name="locality" collapsible collapsed>
          <CompoundInput subpath="ns2:media_ucjeps">
            {extensions.locality.form}
          </CompoundInput>
        </Panel>
      </Panel>
    </Field>
  );
};

export default configContext => ({
  template: template(configContext),
});
