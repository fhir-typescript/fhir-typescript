import React, { useState } from 'react';

import { 
  AppBar, 
  Divider,
  Drawer, 
  IconButton, 
  ToggleButtonGroup,
  ToggleButton,
  Toolbar, 
  Typography,
  Button,
  Tooltip,
  Stack,
} from '@mui/material';

import { 
  List as ListIcon,
  Settings as SettingsIcon,
  LightMode as LightModeIcon,
  DarkMode as DarkModeIcon,
  DriveFolderUpload as DriveFolderUploadIcon,
} from '@mui/icons-material';

export interface AppHeaderProps {
  darkModeEnabled: boolean;
  toggleVisualMode: (() => void);
}

export default function AppHeader(props: AppHeaderProps) {

  const [settingsVisible, setSettingsVisible] = useState<boolean>(false);

  function handleModeChange(event: React.MouseEvent<HTMLElement>, modeValue:any) {
    console.log(modeValue)
    if (modeValue !== null) {
      props.toggleVisualMode();
    }
  }

  return(
  <div>
    <AppBar 
      position='fixed'
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
      <Toolbar>
        <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
          React Basic FHIR App
        </Typography>
        <Stack direction="row" spacing={2}>
          <Tooltip title="Settings">
            <IconButton aria-label='settings' onClick={() => setSettingsVisible(true)}>
              <SettingsIcon />
            </IconButton>
          </Tooltip>
        </Stack>
      </Toolbar>
    </AppBar>
    <Drawer
      anchor='right'
      open={settingsVisible}
      onClose={() => setSettingsVisible(false)}
      >
      <Typography variant='h6' component='div' sx={{ margin: 1}}>
        Settings
      </Typography>
      <Divider sx={{ marginBottom: 2 }} />
      <ToggleButtonGroup
        exclusive
        value={props.darkModeEnabled ? 'dark' : 'light'}
        aria-label='ui mode'
        onChange={handleModeChange}
        >
        <ToggleButton value='light'>
          <LightModeIcon />
          Light
        </ToggleButton>
        <ToggleButton value='dark'>
          <DarkModeIcon />
          Dark
        </ToggleButton>
      </ToggleButtonGroup>
    </Drawer>
  </div>
  );
}