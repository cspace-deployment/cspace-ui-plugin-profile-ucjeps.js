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

  const {
    CompoundInput,
  } = configContext.inputComponents;

  const {
    extensions,
  } = configContext.config;

  return (
    <Field name="document">
      <Panel name="id" collapsible>
        <Cols>
          <Col>
            <Field name="objectNumber" />
            <Field name="collection" />
          </Col>

          <Col>
            <Field name="basicStorageLocation" subpath="ns2:collectionobjects_naturalhistory" />
          </Col>
        </Cols>

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

        <Row>
          <Field name="localNameGroupList" subpath="ns2:collectionobjects_naturalhistory">
            <Field name="localNameGroup">
              <Field name="localName" />
              <Field name="localNameLanguage" />
            </Field>
          </Field>

          <Col />
        </Row>

        <Row>
          <Field name="hybridParentGroupList" subpath="ns2:collectionobjects_naturalhistory">
            <Field name="hybridParentGroup">
              <Field name="hybridParent" />
              <Field name="hybridParentQualifier" />
            </Field>
          </Field>

          <Field name="hybridName" subpath="ns2:collectionobjects_naturalhistory" />
        </Row>

        <Field name="labelHeader" subpath="ns2:collectionobjects_naturalhistory" />
        <Field name="labelFooter" subpath="ns2:collectionobjects_naturalhistory" />

        <Row>
          <Col>
            <Field name="objectCountNumber" subpath="ns2:collectionobjects_naturalhistory" />
            <Field name="numberOfObjects" />

            <Field name="objectCountGroupList">
              <Field name="objectCountGroup">
                <Field name="objectCount" />
                {/* <Field name="objectCountType" /> */}
                <Field name="objectCountCountedBy" />
                <Field name="objectCountDate" />
                <Field name="objectCountNote" />
              </Field>
            </Field>

            <Field name="recordStatus" />

            <Field name="briefDescriptions">
              <Field name="briefDescription" />
            </Field>
          </Col>

          <Col>
            <Field name="otherNumberList">
              <Field name="otherNumber">
                <Field name="numberValue" />
                <Field name="numberType" />
              </Field>
            </Field>

            <Field name="comments">
              <Field name="comment" />
            </Field>
          </Col>
        </Row>

        <Field name="typeSpecimenGroupList" subpath="ns2:collectionobjects_naturalhistory">
          <Field name="typeSpecimenGroup">
            <Field name="typeSpecimenKind" />
            <Field name="typeSpecimenAssertionBy" />
            <Field name="typeSpecimenReference" />
            <Field name="typeSpecimenRefPage" />
            <Field name="typeSpecimenBasionym" />
            <Field name="typeSpecimenNotes" />
          </Field>
        </Field>

        <InputTable name="donor">
          <Field name="donor" subpath="ns2:collectionobjects_naturalhistory" />
          <Field name="donorDateGroup" subpath="ns2:collectionobjects_naturalhistory" />
          <Field name="donorNote" subpath="ns2:collectionobjects_naturalhistory" />
        </InputTable>
      </Panel>

      <Panel name="collect" collapsible collapsed>
        <Row>
          <Col>
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

          <Col>
            <Field name="fieldCollectionMethods">
              <Field name="fieldCollectionMethod" />
            </Field>

            <Field name="fieldCollectionNote" />

            <Field name="associatedTaxaGroupList" subpath="ns2:collectionobjects_naturalhistory">
              <Field name="associatedTaxaGroup">
                <Field name="associatedTaxon" />
                <Field name="commonName" />
                <Field name="interaction" />
              </Field>
            </Field>
          </Col>
        </Row>
      </Panel>

      <Panel name="locality" collapsible collapsed>
        <CompoundInput name="ns2:collectionobjects_naturalhistory" subpath="">
          {extensions.locality.form}
        </CompoundInput>
      </Panel>

      <Panel name="desc" collapsible collapsed>
        <Row>
          <Col>
            <Field name="sex" />
            <Field name="phase" />

            <Field name="forms">
              <Field name="form" />
            </Field>
          </Col>

          <Col>
            <Field name="handwritten" subpath="ns2:collectionobjects_ucjeps" />
            <Field name="postToPublic" subpath="ns2:collectionobjects_ucjeps" />
            <Field name="cultivated" subpath="ns2:collectionobjects_naturalhistory" />
          </Col>
        </Row>

        {extensions.annotation.collectionobject.form}

        <Panel name="hist" collapsible collapsed>
          <Panel name="assoc" collapsible collapsed>
            <Row>
              <Col>
                <Field name="assocActivityGroupList">
                  <Field name="assocActivityGroup">
                    <Field name="assocActivity" />
                    <Field name="assocActivityType" />
                    <Field name="assocActivityNote" />
                  </Field>
                </Field>

                <Field name="assocObjectGroupList">
                  <Field name="assocObjectGroup">
                    <Field name="assocObject" />
                    <Field name="assocObjectType" />
                    <Field name="assocObjectNote" />
                  </Field>
                </Field>

                <Field name="assocConceptGroupList">
                  <Field name="assocConceptGroup">
                    <Field name="assocConcept" />
                    <Field name="assocConceptType" />
                    <Field name="assocConceptNote" />
                  </Field>
                </Field>

                <Field name="assocCulturalContextGroupList">
                  <Field name="assocCulturalContextGroup">
                    <Field name="assocCulturalContext" />
                    <Field name="assocCulturalContextType" />
                    <Field name="assocCulturalContextNote" />
                  </Field>
                </Field>

                <Field name="assocOrganizationGroupList">
                  <Field name="assocOrganizationGroup">
                    <Field name="assocOrganization" />
                    <Field name="assocOrganizationType" />
                    <Field name="assocOrganizationNote" />
                  </Field>
                </Field>

                <Field name="assocPeopleGroupList">
                  <Field name="assocPeopleGroup">
                    <Field name="assocPeople" />
                    <Field name="assocPeopleType" />
                    <Field name="assocPeopleNote" />
                  </Field>
                </Field>

                <Field name="assocPersonGroupList">
                  <Field name="assocPersonGroup">
                    <Field name="assocPerson" />
                    <Field name="assocPersonType" />
                    <Field name="assocPersonNote" />
                  </Field>
                </Field>

                <Field name="assocPlaceGroupList">
                  <Field name="assocPlaceGroup">
                    <Field name="assocPlace" />
                    <Field name="assocPlaceType" />
                    <Field name="assocPlaceNote" />
                  </Field>
                </Field>
              </Col>

              <Col>
                <InputTable name="assocEvent">
                  <Field name="assocEventName" />
                  <Field name="assocEventNameType" />
                </InputTable>

                <Field name="assocEventOrganizations">
                  <Field name="assocEventOrganization" />
                </Field>

                <Field name="assocEventPeoples">
                  <Field name="assocEventPeople" />
                </Field>

                <Field name="assocEventPersons">
                  <Field name="assocEventPerson" />
                </Field>

                <Field name="assocEventPlaces">
                  <Field name="assocEventPlace" />
                </Field>

                <Field name="assocEventNote" />

                <Field name="assocDateGroupList">
                  <Field name="assocDateGroup">
                    <Field name="assocStructuredDateGroup" />
                    <Field name="assocDateType" />
                    <Field name="assocDateNote" />
                  </Field>
                </Field>
              </Col>
            </Row>
          </Panel>

          <Field name="objectHistoryNote" />

          <Field name="usageGroupList">
            <Field name="usageGroup">
              <Field name="usage" />
              <Field name="usageNote" />
            </Field>
          </Field>

          <Row>
            <Col>
              <Field name="owners">
                <Field name="owner" />
              </Field>

              <Field name="ownershipDateGroupList">
                <Field name="ownershipDateGroup" />
              </Field>
            </Col>

            <Col>
              <Row>
                <Field name="ownershipAccess" />
                <Field name="ownershipCategory" />
              </Row>

              <Field name="ownershipPlace" />
            </Col>
          </Row>

          <InputTable name="ownershipExchange">
            <Field name="ownershipExchangeMethod" />
            <Field name="ownershipExchangeNote" />
            <Field name="ownershipExchangePriceCurrency" />
            <Field name="ownershipExchangePriceValue" />
          </InputTable>
        </Panel>

        <Panel name="reference" collapsible collapsed>
          <Field name="referenceGroupList">
            <Field name="referenceGroup">
              <Field name="reference" />
              <Field name="referenceNote" />
            </Field>
          </Field>
        </Panel>
      </Panel>

      <Panel name="hierarchy" collapsible collapsed>
        <Field name="relation-list-item" subpath="rel:relations-common-list" />
      </Panel>
    </Field>
  );
};

export default (configContext) => ({
  template: template(configContext),
});
