// @generated
/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: SidebarTabbedContainerPipelineFragment
// ====================================================

export interface SidebarTabbedContainerPipelineFragment_modes_resources_configField_configType_EnumConfigType_innerTypes_EnumConfigType {
  __typename: "EnumConfigType" | "ListConfigType" | "NullableConfigType" | "RegularConfigType";
  key: string;
  name: string | null;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
}

export interface SidebarTabbedContainerPipelineFragment_modes_resources_configField_configType_EnumConfigType_innerTypes_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isOptional: boolean;
  configTypeKey: string;
}

export interface SidebarTabbedContainerPipelineFragment_modes_resources_configField_configType_EnumConfigType_innerTypes_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  name: string | null;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  fields: SidebarTabbedContainerPipelineFragment_modes_resources_configField_configType_EnumConfigType_innerTypes_CompositeConfigType_fields[];
}

export type SidebarTabbedContainerPipelineFragment_modes_resources_configField_configType_EnumConfigType_innerTypes = SidebarTabbedContainerPipelineFragment_modes_resources_configField_configType_EnumConfigType_innerTypes_EnumConfigType | SidebarTabbedContainerPipelineFragment_modes_resources_configField_configType_EnumConfigType_innerTypes_CompositeConfigType;

export interface SidebarTabbedContainerPipelineFragment_modes_resources_configField_configType_EnumConfigType {
  __typename: "EnumConfigType" | "ListConfigType" | "NullableConfigType" | "RegularConfigType";
  key: string;
  name: string | null;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  innerTypes: SidebarTabbedContainerPipelineFragment_modes_resources_configField_configType_EnumConfigType_innerTypes[];
}

export interface SidebarTabbedContainerPipelineFragment_modes_resources_configField_configType_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isOptional: boolean;
  configTypeKey: string;
}

export interface SidebarTabbedContainerPipelineFragment_modes_resources_configField_configType_CompositeConfigType_innerTypes_EnumConfigType {
  __typename: "EnumConfigType" | "ListConfigType" | "NullableConfigType" | "RegularConfigType";
  key: string;
  name: string | null;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
}

export interface SidebarTabbedContainerPipelineFragment_modes_resources_configField_configType_CompositeConfigType_innerTypes_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isOptional: boolean;
  configTypeKey: string;
}

export interface SidebarTabbedContainerPipelineFragment_modes_resources_configField_configType_CompositeConfigType_innerTypes_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  name: string | null;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  fields: SidebarTabbedContainerPipelineFragment_modes_resources_configField_configType_CompositeConfigType_innerTypes_CompositeConfigType_fields[];
}

export type SidebarTabbedContainerPipelineFragment_modes_resources_configField_configType_CompositeConfigType_innerTypes = SidebarTabbedContainerPipelineFragment_modes_resources_configField_configType_CompositeConfigType_innerTypes_EnumConfigType | SidebarTabbedContainerPipelineFragment_modes_resources_configField_configType_CompositeConfigType_innerTypes_CompositeConfigType;

export interface SidebarTabbedContainerPipelineFragment_modes_resources_configField_configType_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  name: string | null;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  fields: SidebarTabbedContainerPipelineFragment_modes_resources_configField_configType_CompositeConfigType_fields[];
  innerTypes: SidebarTabbedContainerPipelineFragment_modes_resources_configField_configType_CompositeConfigType_innerTypes[];
}

export type SidebarTabbedContainerPipelineFragment_modes_resources_configField_configType = SidebarTabbedContainerPipelineFragment_modes_resources_configField_configType_EnumConfigType | SidebarTabbedContainerPipelineFragment_modes_resources_configField_configType_CompositeConfigType;

export interface SidebarTabbedContainerPipelineFragment_modes_resources_configField {
  __typename: "ConfigTypeField";
  configType: SidebarTabbedContainerPipelineFragment_modes_resources_configField_configType;
}

export interface SidebarTabbedContainerPipelineFragment_modes_resources {
  __typename: "Resource";
  name: string;
  description: string | null;
  configField: SidebarTabbedContainerPipelineFragment_modes_resources_configField | null;
}

export interface SidebarTabbedContainerPipelineFragment_modes_loggers_configField_configType_EnumConfigType_innerTypes_EnumConfigType {
  __typename: "EnumConfigType" | "ListConfigType" | "NullableConfigType" | "RegularConfigType";
  key: string;
  name: string | null;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
}

export interface SidebarTabbedContainerPipelineFragment_modes_loggers_configField_configType_EnumConfigType_innerTypes_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isOptional: boolean;
  configTypeKey: string;
}

export interface SidebarTabbedContainerPipelineFragment_modes_loggers_configField_configType_EnumConfigType_innerTypes_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  name: string | null;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  fields: SidebarTabbedContainerPipelineFragment_modes_loggers_configField_configType_EnumConfigType_innerTypes_CompositeConfigType_fields[];
}

export type SidebarTabbedContainerPipelineFragment_modes_loggers_configField_configType_EnumConfigType_innerTypes = SidebarTabbedContainerPipelineFragment_modes_loggers_configField_configType_EnumConfigType_innerTypes_EnumConfigType | SidebarTabbedContainerPipelineFragment_modes_loggers_configField_configType_EnumConfigType_innerTypes_CompositeConfigType;

export interface SidebarTabbedContainerPipelineFragment_modes_loggers_configField_configType_EnumConfigType {
  __typename: "EnumConfigType" | "ListConfigType" | "NullableConfigType" | "RegularConfigType";
  key: string;
  name: string | null;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  innerTypes: SidebarTabbedContainerPipelineFragment_modes_loggers_configField_configType_EnumConfigType_innerTypes[];
}

export interface SidebarTabbedContainerPipelineFragment_modes_loggers_configField_configType_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isOptional: boolean;
  configTypeKey: string;
}

export interface SidebarTabbedContainerPipelineFragment_modes_loggers_configField_configType_CompositeConfigType_innerTypes_EnumConfigType {
  __typename: "EnumConfigType" | "ListConfigType" | "NullableConfigType" | "RegularConfigType";
  key: string;
  name: string | null;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
}

export interface SidebarTabbedContainerPipelineFragment_modes_loggers_configField_configType_CompositeConfigType_innerTypes_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isOptional: boolean;
  configTypeKey: string;
}

export interface SidebarTabbedContainerPipelineFragment_modes_loggers_configField_configType_CompositeConfigType_innerTypes_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  name: string | null;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  fields: SidebarTabbedContainerPipelineFragment_modes_loggers_configField_configType_CompositeConfigType_innerTypes_CompositeConfigType_fields[];
}

export type SidebarTabbedContainerPipelineFragment_modes_loggers_configField_configType_CompositeConfigType_innerTypes = SidebarTabbedContainerPipelineFragment_modes_loggers_configField_configType_CompositeConfigType_innerTypes_EnumConfigType | SidebarTabbedContainerPipelineFragment_modes_loggers_configField_configType_CompositeConfigType_innerTypes_CompositeConfigType;

export interface SidebarTabbedContainerPipelineFragment_modes_loggers_configField_configType_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  name: string | null;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  fields: SidebarTabbedContainerPipelineFragment_modes_loggers_configField_configType_CompositeConfigType_fields[];
  innerTypes: SidebarTabbedContainerPipelineFragment_modes_loggers_configField_configType_CompositeConfigType_innerTypes[];
}

export type SidebarTabbedContainerPipelineFragment_modes_loggers_configField_configType = SidebarTabbedContainerPipelineFragment_modes_loggers_configField_configType_EnumConfigType | SidebarTabbedContainerPipelineFragment_modes_loggers_configField_configType_CompositeConfigType;

export interface SidebarTabbedContainerPipelineFragment_modes_loggers_configField {
  __typename: "ConfigTypeField";
  configType: SidebarTabbedContainerPipelineFragment_modes_loggers_configField_configType;
}

export interface SidebarTabbedContainerPipelineFragment_modes_loggers {
  __typename: "Logger";
  name: string;
  description: string | null;
  configField: SidebarTabbedContainerPipelineFragment_modes_loggers_configField | null;
}

export interface SidebarTabbedContainerPipelineFragment_modes {
  __typename: "Mode";
  name: string;
  description: string | null;
  resources: SidebarTabbedContainerPipelineFragment_modes_resources[];
  loggers: SidebarTabbedContainerPipelineFragment_modes_loggers[];
}

export interface SidebarTabbedContainerPipelineFragment {
  __typename: "Pipeline";
  name: string;
  description: string | null;
  modes: SidebarTabbedContainerPipelineFragment_modes[];
}
