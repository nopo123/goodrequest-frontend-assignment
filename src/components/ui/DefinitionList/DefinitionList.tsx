'use client';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Fragment } from 'react';

import { SectionDivider } from '@/components/ui/SectionDivider/SectionDivider';
import type { DefinitionRow } from '@/types/ui';

import {
  DefinitionListRoot,
  DefinitionRowStack,
  DefinitionValue,
} from './DefinitionList.styled';

type DefinitionListProps = {
  readonly groups: readonly (readonly DefinitionRow[])[];
};

export const DefinitionList = ({ groups }: DefinitionListProps) => (
  <DefinitionListRoot component="dl" spacing={0}>
    {groups.map((rows, groupIndex) => (
      <Fragment key={groupIndex}>
        {groupIndex > 0 && <SectionDivider />}
        <Stack spacing={1.25}>
          {rows.map((row) => (
            <DefinitionRowStack
              key={row.id}
              direction={{ xs: 'column', sm: 'row' }}
              spacing={{ xs: 0.25, sm: 2 }}
            >
              <Typography component="dt" variant="body1" color="text.secondary">
                {row.label}
              </Typography>
              <DefinitionValue component="dd" variant="body1">
                {row.value}
              </DefinitionValue>
            </DefinitionRowStack>
          ))}
        </Stack>
      </Fragment>
    ))}
  </DefinitionListRoot>
);
