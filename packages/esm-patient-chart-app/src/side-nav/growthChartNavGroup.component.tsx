import React from 'react';
import { defineExtensionConfigSchema, Type, useConfig } from '@openmrs/esm-framework';
import { DashboardGroupExtension } from '@openmrs/esm-patient-common-lib';
import { GenericNavGroupConfig } from './generic-nav-group.component'; 

// Schema define
export const growthChartNavGroupConfigSchema = {
    title: {
        _type: Type.String,
        _description: 'Title of the tab',
        _default: 'Growth Chart',
    },
    slotName: {
        _type: Type.String,
        _description: 'Slot where this tab will be injected',
        _default: 'patient-chart-sidebar',
    },
    isExpanded: {
        _type: Type.Boolean,
        _description: 'Expanded by default',
        _default: true,
    },
};

// Schema ko register karo extension ke sath
defineExtensionConfigSchema('growth-chart-nav-group', growthChartNavGroupConfigSchema);

// Component
const GrowthChartNavGroup: React.FC = () => {
    const config = useConfig<GenericNavGroupConfig>(); // ✅ Yeh syntax ab sahi hai

    return (
        <DashboardGroupExtension
            title={config.title}
            slotName={config.slotName}
            isExpanded={config.isExpanded}
            basePath="growth-chart" 
        />
    );
};

export default GrowthChartNavGroup;
