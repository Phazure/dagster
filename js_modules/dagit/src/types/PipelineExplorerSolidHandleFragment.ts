// @generated
/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: PipelineExplorerSolidHandleFragment
// ====================================================

export interface PipelineExplorerSolidHandleFragment_solid_inputs_definition {
  __typename: "InputDefinition";
  name: string;
}

export interface PipelineExplorerSolidHandleFragment_solid_inputs_dependsOn_definition_type {
  __typename: "RegularRuntimeType" | "ListRuntimeType" | "NullableRuntimeType";
  displayName: string;
}

export interface PipelineExplorerSolidHandleFragment_solid_inputs_dependsOn_definition {
  __typename: "OutputDefinition";
  name: string;
  type: PipelineExplorerSolidHandleFragment_solid_inputs_dependsOn_definition_type;
}

export interface PipelineExplorerSolidHandleFragment_solid_inputs_dependsOn_solid {
  __typename: "Solid";
  name: string;
}

export interface PipelineExplorerSolidHandleFragment_solid_inputs_dependsOn {
  __typename: "Output";
  definition: PipelineExplorerSolidHandleFragment_solid_inputs_dependsOn_definition;
  solid: PipelineExplorerSolidHandleFragment_solid_inputs_dependsOn_solid;
}

export interface PipelineExplorerSolidHandleFragment_solid_inputs {
  __typename: "Input";
  definition: PipelineExplorerSolidHandleFragment_solid_inputs_definition;
  dependsOn: PipelineExplorerSolidHandleFragment_solid_inputs_dependsOn[];
}

export interface PipelineExplorerSolidHandleFragment_solid_outputs_definition {
  __typename: "OutputDefinition";
  name: string;
}

export interface PipelineExplorerSolidHandleFragment_solid_outputs_dependedBy_solid {
  __typename: "Solid";
  name: string;
}

export interface PipelineExplorerSolidHandleFragment_solid_outputs_dependedBy_definition_type {
  __typename: "RegularRuntimeType" | "ListRuntimeType" | "NullableRuntimeType";
  displayName: string;
}

export interface PipelineExplorerSolidHandleFragment_solid_outputs_dependedBy_definition {
  __typename: "InputDefinition";
  name: string;
  type: PipelineExplorerSolidHandleFragment_solid_outputs_dependedBy_definition_type;
}

export interface PipelineExplorerSolidHandleFragment_solid_outputs_dependedBy {
  __typename: "Input";
  solid: PipelineExplorerSolidHandleFragment_solid_outputs_dependedBy_solid;
  definition: PipelineExplorerSolidHandleFragment_solid_outputs_dependedBy_definition;
}

export interface PipelineExplorerSolidHandleFragment_solid_outputs {
  __typename: "Output";
  definition: PipelineExplorerSolidHandleFragment_solid_outputs_definition;
  dependedBy: PipelineExplorerSolidHandleFragment_solid_outputs_dependedBy[];
}

export interface PipelineExplorerSolidHandleFragment_solid_definition_CompositeSolidDefinition_metadata {
  __typename: "MetadataItemDefinition";
  key: string;
  value: string;
}

export interface PipelineExplorerSolidHandleFragment_solid_definition_CompositeSolidDefinition_inputDefinitions_type {
  __typename: "RegularRuntimeType" | "ListRuntimeType" | "NullableRuntimeType";
  displayName: string;
}

export interface PipelineExplorerSolidHandleFragment_solid_definition_CompositeSolidDefinition_inputDefinitions {
  __typename: "InputDefinition";
  name: string;
  type: PipelineExplorerSolidHandleFragment_solid_definition_CompositeSolidDefinition_inputDefinitions_type;
}

export interface PipelineExplorerSolidHandleFragment_solid_definition_CompositeSolidDefinition_outputDefinitions_type {
  __typename: "RegularRuntimeType" | "ListRuntimeType" | "NullableRuntimeType";
  displayName: string;
}

export interface PipelineExplorerSolidHandleFragment_solid_definition_CompositeSolidDefinition_outputDefinitions {
  __typename: "OutputDefinition";
  name: string;
  type: PipelineExplorerSolidHandleFragment_solid_definition_CompositeSolidDefinition_outputDefinitions_type;
}

export interface PipelineExplorerSolidHandleFragment_solid_definition_CompositeSolidDefinition {
  __typename: "CompositeSolidDefinition";
  name: string;
  metadata: PipelineExplorerSolidHandleFragment_solid_definition_CompositeSolidDefinition_metadata[];
  inputDefinitions: PipelineExplorerSolidHandleFragment_solid_definition_CompositeSolidDefinition_inputDefinitions[];
  outputDefinitions: PipelineExplorerSolidHandleFragment_solid_definition_CompositeSolidDefinition_outputDefinitions[];
}

export interface PipelineExplorerSolidHandleFragment_solid_definition_SolidDefinition_metadata {
  __typename: "MetadataItemDefinition";
  key: string;
  value: string;
}

export interface PipelineExplorerSolidHandleFragment_solid_definition_SolidDefinition_inputDefinitions_type {
  __typename: "RegularRuntimeType" | "ListRuntimeType" | "NullableRuntimeType";
  displayName: string;
}

export interface PipelineExplorerSolidHandleFragment_solid_definition_SolidDefinition_inputDefinitions {
  __typename: "InputDefinition";
  name: string;
  type: PipelineExplorerSolidHandleFragment_solid_definition_SolidDefinition_inputDefinitions_type;
}

export interface PipelineExplorerSolidHandleFragment_solid_definition_SolidDefinition_outputDefinitions_type {
  __typename: "RegularRuntimeType" | "ListRuntimeType" | "NullableRuntimeType";
  displayName: string;
}

export interface PipelineExplorerSolidHandleFragment_solid_definition_SolidDefinition_outputDefinitions {
  __typename: "OutputDefinition";
  name: string;
  type: PipelineExplorerSolidHandleFragment_solid_definition_SolidDefinition_outputDefinitions_type;
}

export interface PipelineExplorerSolidHandleFragment_solid_definition_SolidDefinition_configField_configType {
  __typename: "CompositeConfigType" | "EnumConfigType" | "ListConfigType" | "NullableConfigType" | "RegularConfigType";
  name: string | null;
  description: string | null;
}

export interface PipelineExplorerSolidHandleFragment_solid_definition_SolidDefinition_configField {
  __typename: "ConfigTypeField";
  configType: PipelineExplorerSolidHandleFragment_solid_definition_SolidDefinition_configField_configType;
}

export interface PipelineExplorerSolidHandleFragment_solid_definition_SolidDefinition {
  __typename: "SolidDefinition";
  name: string;
  metadata: PipelineExplorerSolidHandleFragment_solid_definition_SolidDefinition_metadata[];
  inputDefinitions: PipelineExplorerSolidHandleFragment_solid_definition_SolidDefinition_inputDefinitions[];
  outputDefinitions: PipelineExplorerSolidHandleFragment_solid_definition_SolidDefinition_outputDefinitions[];
  configField: PipelineExplorerSolidHandleFragment_solid_definition_SolidDefinition_configField | null;
}

export type PipelineExplorerSolidHandleFragment_solid_definition = PipelineExplorerSolidHandleFragment_solid_definition_CompositeSolidDefinition | PipelineExplorerSolidHandleFragment_solid_definition_SolidDefinition;

export interface PipelineExplorerSolidHandleFragment_solid {
  __typename: "Solid";
  name: string;
  inputs: PipelineExplorerSolidHandleFragment_solid_inputs[];
  outputs: PipelineExplorerSolidHandleFragment_solid_outputs[];
  definition: PipelineExplorerSolidHandleFragment_solid_definition;
}

export interface PipelineExplorerSolidHandleFragment {
  __typename: "SolidHandle";
  handleID: string;
  solid: PipelineExplorerSolidHandleFragment_solid;
}
