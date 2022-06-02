import React, { useRef, useState } from 'react';

import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/theme-twilight';
import 'ace-builds/src-noconflict/theme-textmate';

import { 
  Box, 
  Button,
  Divider,
  Grid,
  Stack,
  TextField,
  Toolbar,
  Typography 
} from '@mui/material';

import { 
  AutoAwesome as BeautifyIcon,
  FactCheck as ValidateIcon,
  HighlightOff as ClearJsonIcon,
  Report as ErrorIcon,
  Warning as WarningIcon,
  Info as InfoIcon,
} from '@mui/icons-material';

import { fhir } from '@fhir-typescript/r4-core';

export interface MainPageProps {
  useDarkMode: boolean;
  toggleVisualMode: (() => void);
}

export default function MainPage(props: MainPageProps) {
  const refJsonEditor = useRef<AceEditor>(null);
  const [outputFragments, setOutputFragments] = useState<React.ReactFragment[]>([]);

  function beautifyJson() {
    let source:string|undefined = refJsonEditor.current?.editor.getValue();

    if (!source) {
      return;
    }

    let obj = JSON.parse(source);
    refJsonEditor.current?.editor.setValue(JSON.stringify(obj, null, 2));
  }

  function testJson() {
    let source:string|undefined = refJsonEditor.current?.editor.getValue();

    if (!source) {
      setOutputFragments([<Typography>Nothing to validate.</Typography>]);
      return;
    }

    let resource:fhir.FhirResource|null = fhir.resourceFactory(JSON.parse(source));

    if (!resource) {
      setOutputFragments([<Typography>Failed to parse as a FHIR Resource!.</Typography>]);
      return;
    }

    const issues:fhir.FtsIssue[] = resource.doModelValidation();

    if (issues.length === 0) {
      setOutputFragments([<Typography>Basic validation passed with no messages.</Typography>]);
      return;
    }

    let issueFragments:React.ReactFragment[] = [];
    issues.forEach((issue, index) => {
      switch (issue.severity) {
        case 'error':
        case 'fatal':
          issueFragments.push(<Divider textAlign='left' sx={{p:1}}><ErrorIcon color='error'/></Divider>);
          break;
        case 'warning':
          issueFragments.push(<Divider textAlign='left' sx={{p:1}}><WarningIcon color='warning'/></Divider>);
          break;
        case 'information':
          issueFragments.push(<Divider textAlign='left' sx={{p:1}}><InfoIcon color='info'/></Divider>);
          break;
      }

      issueFragments.push(<TextField sx={{p:1}} id={`severity-${index}`} defaultValue={issue.severity} label='Severity' InputProps={{readOnly: true}} fullWidth variant='standard' />);
      issueFragments.push(<TextField sx={{p:1}} id={`code-${index}`} defaultValue={issue.code} label='Code' InputProps={{readOnly: true}} fullWidth variant='standard' />);
      issueFragments.push(<TextField sx={{p:1}} id={`expression-${index}`} defaultValue={issue.expression} label='Expression' InputProps={{readOnly: true}} fullWidth variant='standard' />);
      issueFragments.push(<TextField sx={{p:1}} id={`details-${index}`} defaultValue={issue.details ?? issue.diagnostics} label='Details' multiline InputProps={{readOnly: true}} fullWidth variant='standard' />);
    });

    setOutputFragments(issueFragments);
  }

  function clearJson() {
    refJsonEditor.current?.editor.setValue('');
    setOutputFragments([]);
  }

  return(
    <Box sx={{ display: 'flex' }}>
      <Box component='main' sx={{ flexGrow: 1, px: 2 }}>
        <Toolbar/>
        <Stack direction="row" spacing={1} mt={1} mb={1} >
          <Button 
            variant='contained' 
            startIcon={<BeautifyIcon />}
            onClick={() => beautifyJson()}
            >
            Beautify
          </Button>
          <Button 
            variant='contained' 
            startIcon={<ValidateIcon />}
            onClick={() => testJson()}
            >
            Validate (Basic)
          </Button>
          <Button 
            variant='contained' 
            startIcon={<ClearJsonIcon />}
            onClick={() => clearJson()}
            >
            Clear
          </Button>
        </Stack>

        <Grid container spacing={2} sx={{ p: 2}}>
          <Grid item xs={6} sx={{ border: '1px solid #cccccc' }}>
            <AceEditor
              ref={refJsonEditor}
              mode='json'
              theme={props.useDarkMode ? 'twilight' : 'textmate'}
              name='capJsonEditor'
              width='100%'
              // width='55vw'
              // width='90vw'
              minLines={20}
              maxLines={60}
              />
          </Grid>
          <Grid item xs={6} sx={{ border: '1px solid #cccccc' }}>
            <Typography variant='h6'>Output:</Typography>
            {outputFragments}
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}