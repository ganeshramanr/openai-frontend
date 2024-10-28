import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import TreeView from '@mui/lab/TreeView';
import TreeItem from '@mui/lab/TreeItem';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const XNavigation = () => {
  const [open, setOpen] = React.useState(true);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Drawer anchor="left" open={open} onClose={toggleDrawer}>
      <List>
        <TreeView
          aria-label="file system navigator"
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
        >
          <TreeItem nodeId="1" label="Dashboard">
            <TreeItem nodeId="2" label="Sales" />
            <TreeItem nodeId="3" label="Analytics" />
          </TreeItem>
          <TreeItem nodeId="4" label="Products">
            <TreeItem nodeId="5" label="Inventory" />
            <TreeItem nodeId="6" label="New Product" />
          </TreeItem>
        </TreeView>
      </List>
    </Drawer>
  );
};

export default XNavigation;