import { useState } from 'react';
import {useNavigate} from "react-router-dom";
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import CottageIcon from '@mui/icons-material/Cottage';
import AssistantIcon from '@mui/icons-material/Assistant';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

import './XNavigation.css';

const XNavigation = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sidebar collapsed={collapsed}>
      <div className="closemenu" onClick={() => setCollapsed(!collapsed)}>
          {/* changing menu collapse icon on click */}
        {collapsed ? (
          <ArrowRightIcon/>
        ) : (
          <ArrowLeftIcon/>
        )}
      </div>
      <Menu>
        <MenuItem onClick={() => navigate('/home')} icon={<CottageIcon />}>
          Home
        </MenuItem>
        <MenuItem onClick={() => navigate('/openai')} icon={<AssistantIcon />}>
          Open AI
        </MenuItem>
        <MenuItem onClick={() => navigate('/settings')} icon={<SettingsApplicationsIcon />}>
          Settings
        </MenuItem>
      </Menu>
    </Sidebar>
  );
};

export default XNavigation;